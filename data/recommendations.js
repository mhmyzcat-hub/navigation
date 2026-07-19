/* 开款图片会自动从 GitHub 文件夹读取，无需登记文件名。 */
const recommendationRepository = {
    owner: "mhmyzcat-hub",
    repo: "navigation",
    branch: "main"
};

const recommendationGalleries = {
    suit: {
        title: "单西",
        folder: "assets/recommendations/suit"
    },
    trousers: {
        title: "西裤",
        sections: [
            {
                title: "裤长",
                folder: "assets/recommendations/trousers/length"
            },
            {
                title: "裤型",
                folder: "assets/recommendations/trousers/fit"
            },
            {
                title: "面料",
                folder: "assets/recommendations/trousers/fabric"
            },
            {
                title: "纹样",
                folder: "assets/recommendations/trousers/pattern"
            }
        ]
    },
    suitSet: {
        title: "两件套",
        folder: "assets/recommendations/suit-set"
    },
    threePiece: {
        title: "三件套",
        folder: "assets/recommendations/three-piece"
    },
    shirt: {
        title: "衬衫",
        folder: "assets/recommendations/shirt"
    },
    vestTailcoat: {
        title: "单马甲",
        folder: "assets/recommendations/vest-tailcoat"
    }
};
