const siteConfig = {
    title: "叉烧虫导航站",
    copyright: "© 2026 叉烧虫导航站",
    lastUpdate: "2026-07-17"
};

const featuredPath = {
    title: "上款路径",
    description: "点击每行右侧按钮，可单独复制对应的完整路径。",
    items: [
        {
            category: "正装西装",
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装西服 > 男士西服单品 > 男装西服上装"
        },
        {
            category: "休闲西装",
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装西服 > 男装休闲西装"
        },
        {
            category: "正装西裤",
            exempt: true,
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装西服 > 男士西服单品 > 男装西裤"
        },
        {
            category: "休闲西裤",
            exempt: true,
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装长裤 > 男士正装裤"
        },
        {
            category: "正装衬衫",
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装上衣、T恤、衬衫 > 男装正装衬衫"
        },
        {
            category: "西装马甲",
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装西服 > 男装西装马甲"
        },
        {
            category: "西装套装",
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装西服 > 男装西服套装"
        },
        {
            category: "燕尾服",
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装西服 > 男装燕尾服套装"
        },
        {
            category: "燕尾服",
            path: "服装、鞋靴和珠宝饰品 > 男士时尚 > 男装 > 男装上衣、T恤、衬衫 > 男士燕尾服衬衫"
        }
    ]
};

const announcements = [
    {
        title: "【西装套装快速恢复美国/欧盟站点加站事宜】",
        date: "2026-07-17",
        pinned: true,
        isNew: true,
        action: {
            type: "link",
            value: "notice-suit-restoration.html"
        }
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
            layout: "wide",
            kind: "onboarding",
            title: "申请入驻",
            linkLabel: "申请入驻链接",
            link: "https://seller.kuajingmaihuo.com",
            codeLabel: "填写入驻邀请码",
            code: "yzldty"
        },

        {
            title: "叹木宁",
            subtitle: "微信号：tanmuning-277",
            icon: "🌍",

            buttonText: "复制微信",

            action: {
                type: "copy",
                value: "tanmuning-277"
            }
        },


        {
            title: "colin.chen",
            subtitle: "电话：18565237723",
            icon: "📱",

            buttonText: "拨打电话",

            action: {
                type: "phone",
                value: "18565237723"
            }
        },


        {
            layout: "wide",
            kind: "address",
            title: "私人件寄样地址",
            lines: [
                "广东省/深圳市/南山区/深圳市南山区前海国际人才港B塔29楼【H-男装组】",
                "叹木宁tanmuning(私人件)",
                "18565237723"
            ],
            copyValue: "广东省/深圳市/南山区/深圳市南山区前海国际人才港B塔29楼【H-男装组】\n叹木宁tanmuning(私人件)\n18565237723"
        }

    ]
},
    {
        id: "section-hot",
        title: "开款推荐",
        layout: "list",
        items: [
            {
                title: "单西",
                action: {
                    type: "link",
                    value: "recommend-suit.html"
                }
            },
            {
                title: "单马甲",
                action: {
                    type: "link",
                    value: "recommend-vest-tailcoat.html"
                }
            },
            {
                title: "两件套",
                action: {
                    type: "link",
                    value: "recommend-suit-set.html"
                }
            },
            {
                title: "三件套",
                action: {
                    type: "link",
                    value: "recommend-three-piece.html"
                }
            },
            {
                title: "西裤",
                action: {
                    type: "link",
                    value: "recommend-trousers.html"
                }
            },
            {
                title: "衬衫",
                action: {
                    type: "link",
                    value: "recommend-shirt.html"
                }
            }
        ]
    },
    {
        id: "section-product",
        title: "商品优化",
        layout: "list",
        items: [
            {
                title: "图片优化",
                action: {
                    type: "link",
                    value: ""
                }
            },
            {
                title: "标题扩写",
                action: {
                    type: "link",
                    value: ""
                }
            }
        ]
    }
];
