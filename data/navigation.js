const siteConfig = {
    title: "叉烧虫导航站",
    copyright: "© 2026 叉烧虫导航站",
    lastUpdate: "2026-07-17"
};

const featuredPath = {
    title: "上款路径",
    description: "点击右侧按钮复制上款路径。",
    value: "请把这里替换成你的上款路径"
};

const announcements = [
    {
        title: "欢迎使用叉烧虫导航站",
        date: "2026-07-17",
        pinned: true,
        isNew: true
    },
    {
        title: "导航内容持续更新中",
        date: "2026-07-17",
        pinned: false,
        isNew: false
    }
];

const navigationData = [
    {
        id: "section-contact",
        title: "正装对接",
        layout: "cards",
        items: [
            {
                title: "微信对接",
                icon: "💬",
                buttonText: "复制微信",
                action: {
                    type: "copy",
                    value: "请替换成你的微信号"
                }
            },
            {
                title: "电话咨询",
                icon: "☎️",
                buttonText: "拨打电话",
                action: {
                    type: "phone",
                    value: "13800000000"
                }
            },
            {
                title: "邀请码",
                icon: "🔑",
                buttonText: "复制邀请码",
                action: {
                    type: "copy",
                    value: "请替换成你的邀请码"
                }
            }
        ]
    },
    {
        id: "section-hot",
        title: "爆款推荐",
        layout: "list",
        items: [
            {
                title: "爆款榜单",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "热门活动",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "新品速递",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "限时福利",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "独家资源",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            }
        ]
    },
    {
        id: "section-link",
        title: "链接优化",
        layout: "list",
        items: [
            {
                title: "在线工具箱",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "链接检测",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "域名查询",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "短链生成",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "链接转换",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            }
        ]
    },
    {
        id: "section-faq",
        title: "问题答疑",
        layout: "list",
        items: [
            {
                title: "常见问题",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "使用教程",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "故障排查",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "问题反馈",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            },
            {
                title: "建议收集",
                action: {
                    type: "link",
                    value: "https://example.com"
                }
            }
        ]
    }
];