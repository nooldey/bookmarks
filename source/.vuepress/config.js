/*
 * @Author: nooldey
 * @Date:   2018-04-18 10:56:39
 * @Last Modified by:   nooldey
 * @Last Modified time: 2018-05-03 19:36:27
 */
module.exports = {
	base: '/bookmarks/',  /* 二级目录 */
	title: '网址导航',
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
	serviceWorker: true,
	/* Nav */
	themeConfig: {
		// nav: [{
		// 		text: 'Home',
		// 		link: '/'
		// 	},
		// 	{
		// 		text: 'Nav',
		// 		link: '/nav/'
		// 	},
		// 	/* dropdown menu */
		// 	{
		// 		text: 'Languages',
		// 		items: [{
		// 				text: 'Chinese',
		// 				link: '/language/chinese'
		// 			},
		// 			{
		// 				text: 'Japanese',
		// 				link: '/language/japanese'
		// 			}
		// 		]
		// 	}
		// ],
		sidebar: [
			'友情链接/',
			'开发者导航/',
			'前端在线工具/',
			'实用工具/',
			'搜索引擎/',
			'程序开发Coder/',
			'收藏的文章/',
			'个人/',
			'电商运营/'
		]
	}
}