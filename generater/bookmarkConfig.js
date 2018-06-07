const config = {
    // 导出的书签的文件名
    bookmarksFile: 'bookmarks.html',
    // 生成markdown文件的根目录
    mdFilePath: '../source/',
    // 排除路径
    unlessPath: ['public'],
    // 除生成书签的页面外的其他页面，插入到vuepress的导航栏配置中，
    customNavs: [{
            text: '网络邻居',
            link: '/friends/'
        },
        {
            text: '开发导航',
            link: '/developer/'
        },
    ]
}

module.exports = config