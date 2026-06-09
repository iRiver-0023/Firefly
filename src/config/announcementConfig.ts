import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "十年磨一剑，今朝试锋芒。祝：笔下生辉！",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "关于我",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
