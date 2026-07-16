
const NavigationData = {

    notice:
        "欢迎使用叉烧虫导航站 V3，全新界面已上线，支持搜索、分类折叠、深色模式、响应式布局。",

    common: [

        {
            title: "Google",
            subtitle: "搜索引擎",
            icon: "🌎",
            desc: "全球最大的搜索引擎。",
            tag: "搜索",
            url: "https://www.google.com"
        },

        {
            title: "GitHub",
            subtitle: "代码托管",
            icon: "💻",
            desc: "全球最大的开源社区。",
            tag: "开发",
            url: "https://github.com"
        },

        {
            title: "ChatGPT",
            subtitle: "AI 助手",
            icon: "🤖",
            desc: "智能 AI 助手。",
            tag: "AI",
            url: "https://chatgpt.com"
        },

        {
            title: "Claude",
            subtitle: "AI 助手",
            icon: "🧠",
            desc: "Anthropic AI。",
            tag: "AI",
            url: "https://claude.ai"
        },

        {
            title: "Notion",
            subtitle: "知识库",
            icon: "📝",
            desc: "团队文档管理。",
            tag: "文档",
            url: "https://www.notion.so"
        },

        {
            title: "Linear",
            subtitle: "项目管理",
            icon: "📌",
            desc: "现代项目管理平台。",
            tag: "项目",
            url: "https://linear.app"
        },

        {
            title: "Figma",
            subtitle: "设计",
            icon: "🎨",
            desc: "在线 UI 设计工具。",
            tag: "设计",
            url: "https://www.figma.com"
        },

        {
            title: "Vercel",
            subtitle: "部署",
            icon: "▲",
            desc: "现代网站部署平台。",
            tag: "部署",
            url: "https://vercel.com"
        },

        {
            title: "Cloudflare",
            subtitle: "CDN",
            icon: "☁️",
            desc: "DNS 与 CDN。",
            tag: "网络",
            url: "https://cloudflare.com"
        },

        {
            title: "Canva",
            subtitle: "设计",
            icon: "🖌️",
            desc: "在线设计工具。",
            tag: "设计",
            url: "https://www.canva.com"
        }

    ],

    recommend: [

        {
            title: "本周推荐",
            subtitle: "HOT",
            icon: "🔥",
            desc: "推荐项目示例。",
            tag: "HOT",
            url: "#"
        },

        {
            title: "新人必看",
            subtitle: "START",
            icon: "🚀",
            desc: "新成员快速上手。",
            tag: "NEW",
            url: "#"
        },

        {
            title: "官方文档",
            subtitle: "DOC",
            icon: "📚",
            desc: "所有文档统一入口。",
            tag: "DOC",
            url: "#"
        },

        {
            title: "资源中心",
            subtitle: "RESOURCE",
            icon: "💎",
            desc: "团队共享资源。",
            tag: "VIP",
            url: "#"
        }

    ],

    faq: [

        {
            q: "如何新增导航？",
            a: "只需要在 data/navigation.js 的 common 数组中新增一个对象即可。"
        },

        {
            q: "搜索支持哪些内容？",
            a: "支持标题、副标题、描述、标签实时搜索。"
        },

        {
            q: "如何修改公告？",
            a: "修改 notice 字段即可。"
        },

        {
            q: "联系方式在哪里修改？",
            a: "当前版本在 index.html 中，可后续统一迁移到 navigation.js。"
        },

        {
            q: "是否支持手机？",
            a: "支持，已完成响应式布局。"
        }

    ],

    rules: [

        "禁止传播违法违规内容。",

        "所有资源仅供团队内部学习交流。",

        "禁止分享内部账号。",

        "禁止恶意修改导航数据。",

        "发现链接失效及时反馈管理员。",

        "新增导航建议统一审核。",

        "请保持良好的团队协作氛围。"

    ]

};