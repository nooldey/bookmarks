/*
 * @Author: nooldey
 * @Date:   2018-04-18 10:56:39
 * @Last Modified by: nooldey
 * @Last Modified time: 2018-04-24 09:16:10
 */
module.exports = {
	// base: '/child/',  /* 二级目录 */
	title: 'Nooldey Docs',
	/* 标题 */
	description: 'Just Run Docs',
	/* 描述 */
	// head: [
	// 	['tagName', { attrName: attrValue }, innerHTML?]
	// ],
	// dev: '0.0.0.0',
	// port: 8080,
	dest: 'public',
	// ga: '',
	// serviceWorker: true,
	/* Nav */
	themeConfig: {
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Nav',
				link: '/nav/'
			},
			/* dropdown menu */
			{
				text: 'Languages',
				items: [{
						text: 'Chinese',
						link: '/language/chinese'
					},
					{
						text: 'Japanese',
						link: '/language/japanese'
					}
				]
			}
		],
		sidebar: {
			'/nav/': [
				'前端在线工具',
				'实用工具',
				'搜索引擎',
				'程序开发Coder',
				'个人',
				'收藏的文章',
				'电商运营'
			]
		}
	}
}