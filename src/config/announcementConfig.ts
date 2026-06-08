import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "高考加油",

	// 公告内容
	content: "十年磨一剑，今朝试锋芒。高考必胜！笔下生辉！",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/posts/guide/致每一个走进考场的你/",
		// 内部链接
		external: false,
	},
};
