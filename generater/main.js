/*
* @Author: nooldey
* @Date:   2018-04-25 09:00:42
 * @Last Modified by: nooldey
 * @Last Modified time: 2018-06-07 13:40:05
*/

const fs      = require('fs')
const cheerio = require('cheerio')
const pinyin  = require('pinyin')
const COPY    = require('recursive-copy')
const PATH    = require('path')
const config  = require('./bookmarkConfig')

/* 固定变量 */
const html       = fs.readFileSync(PATH.resolve(__dirname, './bookmark/' + config.bookmarksFile))
const $          = cheerio.load(html)
const timeNow    = Date.now()
const dirNameObj = {}
const separator  = '=>'
let   NavList    = [ ...config.customNavs ];

/////////////////////定义基础方法/////////////////////////

/* 转换中文为拼音 */
const formatCN = ctx => ctx.replace(/([\u4e00-\u9fa5])/g, str => pinyin(str, { style: pinyin.STYLE_NORMAL }))

/* 生成控制台操作结果内容 */
const formatMsg = (target) => {
	let getBlen = function(str) {
		if (str == null) return 0;
		if (typeof str !== 'string') {
			str += ''
		}
		/* [^\x00-\xff]匹配的是双字节字符，即中文 */
		return str.replace(/[^\x00-\xff]/g, '01').length
	}
	let len = getBlen(target)
	let max = len > 30 ? len + 10 : 30;
	let template = (new Array(max)).join(' ')
	let res = target + template.substr(len, template.length)
	return res
}

/* 日期格式化 */
const formatDate = (time, fmt = 'yyyy-MM-dd hh:mm') => {
    // 10位时间戳格式化
    let timeStr = time + ''
    if (timeStr.length < 13) {
        time = time * (Math.pow(10, 13 - timeStr.length))
    }
    time = parseInt(time)
    if (isNaN(time)) {
        return ''
    }
    let date = new Date(time)
    let padLeftZero = (str) => {
        return ('00' + str).substr(str.length)
    }
    let doFormatDate = (date, fmt) => {
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        let obj = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in obj) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = obj[k] + ''
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
            }
        }
        return fmt
    }
    return doFormatDate(date, fmt)
}

/* 写入MD文件 */
const writeFile = (fileName, content, filePath) => {
	let path;
	if (fileName !== 'README.md') {
		filePath = filePath || './md/';
	    fileName = fileName.replace('.md','');
	    let foldPath = PATH.join(__dirname, filePath)
	    if (!fs.existsSync(foldPath)) {
	        fs.mkdirSync(foldPath)
	    }
		/* 写入 */
		path = PATH.join(__dirname, filePath + formatCN(fileName));
	} else {
		path = PATH.join(__dirname, filePath);
	}
	if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }
	fs.writeFile(path + '/README.md', content, function(err) {
		if (err) {
			return console.error(err)
		}
		else {
			let msg = [];
			msg.push(formatMsg(fileName) + 'Created Successfully!')
			let stat = fs.statSync(path + '/README.md')
			if (stat.isFile()) {
				msg.push('size: ' + stat.size)
            }
            NavList.push({
                text: fileName,
                link: '/' + formatCN(fileName) + '/'
            })
            console.log(msg.join(' '))
		}
	})
}

/* 遍历、解析bookmark */
const resolveBookmark = () => {
    return new Promise((resolve, reject) => {
        $('a').each(function (i, el) {
            let node = $(el)
            let nodeText = node.text()
            let nodeHref = node.attr('href')
            let nodeCreateTime = formatDate(node.attr('add_date'))
            let nodeUpdateTime = formatDate(node.attr('last_modified'))
            // 查找父目录
            let parentDT = node.parents('dt')
            let parentDirPathArr = []
            let parentDirPathStr = ''
            parentDT.each(function (j, parent) {
                let firstChild = $(parent).children().first()
                if (firstChild.is('h3')) {
                    let dirName = firstChild.text()
                    if (firstChild.attr('personal_toolbar_folder')) {
                        dirName = timeNow
                    }
                    parentDirPathArr.push(dirName)
                }
            })
            parentDirPathStr = parentDirPathArr.reverse().join(separator)
            // 初始化当前目录路径
            if (!dirNameObj[parentDirPathStr]) {
                dirNameObj[parentDirPathStr] = []
            }
            dirNameObj[parentDirPathStr].push({
                text: nodeText,
                href: nodeHref,
                create_time: nodeCreateTime,
                update_time: nodeUpdateTime
            })
        })
        resolve()
    })
}

////////////////////////实际操作方法///////////////////////////////

/* 复制静态文件等 */
const copyStatic = () => {
    return new Promise((resolve, reject) => {
        let from = PATH.join(__dirname, './static');
        let to = PATH.join(__dirname, config.mdFilePath);
        if (!fs.existsSync(to)) {
            fs.mkdirSync(to)
        }
        COPY(from, to, function(err, res) {
            if (err) {
                console.error('Copy Failed: ' + err);
                reject(err)
            } else {
                console.info('Copy Success! ' + res.length + ' files!');
                resolve()
            }
        })
    })
}

const genMarkdown = () => {
    return new Promise((resolve) => {
        let fileObj = {}
        Object.keys(dirNameObj).map(function (key) {
            let flag = false
            for (let path of config.unlessPath) {
                if (key.toLowerCase().includes(path.toLowerCase())) {
                    flag = true
                    break
                }
            }
            if (!flag) {
                // console.log('key', key)
                let keys = key.split(separator)
                // 递归处理
                function handle (index, elem, keys, len, obj) {
                    if (!obj[elem]) {
                        obj[elem] = {
                            dir: elem,
                            child: {},
                            list: []
                        }
                    }
                    if (index < len - 1) {
                        let i = index + 1
                        handle(i, keys[i], keys, keys.length, obj[elem].child)
                    } else if (index = len - 1) {
                        obj[elem].list =  dirNameObj[keys.join(separator)]
                    }
                }
                handle(0, keys[0], keys, keys.length, fileObj)
            }
        })
        // 处理fileObj
        let childFileObj = fileObj[timeNow]['child']
        let fileContentArr = []
        Object.keys(childFileObj).map(function (key) {
            if (key) {
                let fileName = key + '.md'
                let fileContent = '---\nsidebar: auto\n---\n\n'
                // 递归循环
                let count = 1
                let getSize = function (count) {
                    let arr = new Array(count > 6 ? 6 : count).fill('#')
                    return arr.join('') + ' '
                }
                let handle = function (obj, count) {
                    if (obj['dir']) {
                        fileContent += getSize(count) + obj['dir'] + '\n\n'
                    }
                    // 判断list是否为空
                    if (obj.list && obj.list.length) {
                        for (let [i, item] of obj.list.entries()) {
                            let createTime = item.create_time ? item.create_time + ' ' : ''
                            // fileContent += createTime + '[' + item.text + '](' + item.href + ')' + '\n\n'
                            fileContent += '+ ' + '[' + item.text + '](' + item.href + ')' + '\n';
                            if (i === obj.list.entries.length-1) {
                                console.log('last-one');
                                fileContent += '\n\n'
                            }
                        }
                    }
                    // 判断是否存在子节点
                    if (obj.child && Object.keys(obj.child).length) {
                        for (let key of Object.keys(obj.child)) {
                            handle(obj.child[key], count + 1)
                        }
                    }
                }
                handle(childFileObj[key], count)
                fileContentArr.push(fileContent)
                // 创建 md 文件
                writeFile(fileName, fileContent, config.mdFilePath)
            }
        })
        resolve({fileObj, fileContentArr})
    })
}

const genAllMD = ({ fileObj, fileContentArr = [] }) => {
    // 汇总所有的书签
    if (fileObj[timeNow].list && fileObj[timeNow].list.length) {
        let obj = fileObj[timeNow]
        let fileContent = ''
        for (let [i, item] of obj.list.entries()) {
            let createTime = item.create_time ? item.create_time + ' ' : ''
            // fileContent += createTime + '[' + item.text + '](' + item.href + ')' + '\n\n'
            fileContent += '+ ' + '[' + item.text + '](' + item.href + ')' + '\n'
        }
        fileContentArr.push(fileContent)
    }
    // 生成README.md
    writeFile('all/README.md', fileContentArr.join(''), config.mdFilePath)
}

const genNavConfig = () => {
    setTimeout(() => {
        let content = '/* By auto generator */'+ '\n\n const nav = ' + JSON.stringify(NavList).replace(/\"(text|link)\"/g, '$1') + '\n\n' + 'module.exports = nav';
        fs.writeFile(PATH.join(__dirname, config.mdFilePath) + '.vuepress/nav.js', content, function(err) {
            if (err) {
                return console.error(err)
            }
            else {
                console.log('Created Nav Config Successfully!');
            }
        })
    }, 500);
}

/////////////////////////////
/* 执行操作 */
const run = async () => {
    /* 1. 建立基础文件夹，存放生成的数据以及初始化配置等 */
    await copyStatic()
    /* 2. 解析书签导出文件，生成可解析对象 */
    await resolveBookmark()
    /* 3. 生成单个书签Markdown文件 */
    const res = await genMarkdown()
    /* 4. [可选] 生成书签汇总 */
    // await genAllMD(res)
    /* 5. 生成Vuepress导航栏配置，将本次生成的所有书签页面加入到导航栏 */
    await genNavConfig()
}
run()