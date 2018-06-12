/*
 * @Author: nooldey
 * @Date:   2018-04-18 10:56:39
 * @Last Modified by: nooldey
 * @Last Modified time: 2018-06-12 11:01:31
 */

const Nav = require('./nav')

module.exports = {
	base: '/bookmarks/',  /* 二级目录 */
	title: 'Chrome 书签',
	/* 标题 */
	description: '智能转换谷歌收藏夹导出书签',
	/* 描述 */
	head: [
		// ['tagName', { attrName: attrValue }, innerHTML?]
		['meta', { name: 'keywords', content: ['谷歌书签', 'Chrome BookMarks', '自动在线书签', 'Chrome 书签'] }]
	],
	// dev: '0.0.0.0',
	// port: 8080,
	repo: 'nooldey/bookmarks',
	editLinks: true,
	dest: 'public',
	ga: 'UA-120747219-1',
	// theme: 'woo',
	serviceWorker: true,
	/* Nav */
	themeConfig: {
		nav: Nav
	}
}