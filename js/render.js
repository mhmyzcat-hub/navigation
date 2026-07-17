let toastTimer = null;

document.addEventListener("DOMContentLoaded", function () {
    renderSiteInfo();
    renderAnnouncements();
    renderFeaturedPath();
    renderDirectories();
});

function renderSiteInfo() {
    document.title = siteConfig.title;

    const copyright =
        document.getElementById("footerCopyright");

    const update =
        document.getElementById("lastUpdateText");

    if (copyright) {
        copyright.textContent = siteConfig.copyright;
    }

    if (update) {
        update.textContent =
            "最后更新：" + siteConfig.lastUpdate;
    }
}

function renderAnnouncements() {
    const container =
        document.getElementById("announcementList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    announcements.forEach(function (item) {
        const row = document.createElement("div");

        row.className = "announcement-item";

        const content = document.createElement("div");
        content.className = "announcement-content";

        const titleRow = document.createElement("div");
        titleRow.className = "announcement-title-row";

        if (item.pinned) {
            const pinned = document.createElement("span");

            pinned.className = "announcement-badge pinned";
            pinned.textContent = "置顶";

            titleRow.appendChild(pinned);
        }

        if (item.isNew) {
            const newBadge = document.createElement("span");

            newBadge.className = "announcement-badge new";
            newBadge.textContent = "NEW";

            titleRow.appendChild(newBadge);
        }

        const title = document.createElement("strong");

        title.textContent = item.title;

        titleRow.appendChild(title);
        content.appendChild(titleRow);

        const date = document.createElement("time");

        date.className = "announcement-date";
        date.textContent = item.date;

        row.appendChild(content);
        row.appendChild(date);

        container.appendChild(row);
    });
}

function renderFeaturedPath() {
    const container =
        document.getElementById("featuredPath");

    if (!container) {
        return;
    }

    container.innerHTML = `
        <div class="featured-path-icon">
            🔗
        </div>

        <div class="featured-path-content">
            <h2>${featuredPath.title}</h2>
            <p>${featuredPath.description}</p>
        </div>

        <button
            class="featured-path-button"
            type="button"
        >
            复制路径
        </button>
    `;

    const button = container.querySelector(
        ".featured-path-button"
    );

    button.addEventListener("click", function () {
        copyText(featuredPath.value);
    });
}

function renderDirectories() {
    const container =
        document.getElementById("directoryContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const contactCategory = navigationData.find(
        function (category) {
            return category.layout === "cards";
        }
    );

    const listCategories = navigationData.filter(
        function (category) {
            return category.layout === "list";
        }
    );

    if (contactCategory) {
        container.appendChild(
            createContactSection(contactCategory)
        );
    }

    const listGrid = document.createElement("div");

    listGrid.className = "list-section-grid";

    listCategories.forEach(function (category) {
        listGrid.appendChild(
            createListSection(category)
        );
    });

    container.appendChild(listGrid);
}

function createContactSection(category) {
    const section = document.createElement("section");

    section.className = "directory-section contact-section";
    section.id = category.id;

    const heading = createSectionTitle(category.title);
    const grid = document.createElement("div");

    grid.className = "contact-grid";

    category.items.forEach(function (item) {
        const card = document.createElement("article");

        card.className = "contact-card";
        card.tabIndex = 0;

        card.innerHTML = `
            <div class="contact-card-icon">
                ${item.icon}
            </div>

            <div class="contact-card-body">
                <h3>${item.title}</h3>

                <button
                    class="contact-action-button"
                    type="button"
                >
                    ${item.buttonText}
                </button>
            </div>
        `;

        card.addEventListener("click", function (event) {
            if (
                event.target.classList.contains(
                    "contact-action-button"
                )
            ) {
                return;
            }

            executeAction(item.action);
        });

        const button = card.querySelector(
            ".contact-action-button"
        );

        button.addEventListener("click", function () {
            executeAction(item.action);
        });

        grid.appendChild(card);
    });

    section.appendChild(heading);
    section.appendChild(grid);

    return section;
}

function createListSection(category) {
    const section = document.createElement("section");

    section.className = "list-section";
    section.id = category.id;

    const heading = document.createElement("h2");

    heading.className = "list-section-title";
    heading.textContent = category.title;

    const list = document.createElement("div");

    list.className = "navigation-list";

    category.items.forEach(function (item) {
        const button = document.createElement("button");

        button.className = "navigation-list-item";
        button.type = "button";

        button.innerHTML = `
            <span>${item.title}</span>
            <span class="navigation-list-arrow">›</span>
        `;

        button.addEventListener("click", function () {
            executeAction(item.action);
        });

        list.appendChild(button);
    });

    section.appendChild(heading);
    section.appendChild(list);

    return section;
}

function createSectionTitle(titleText) {
    const heading = document.createElement("div");

    heading.className = "category-heading";

    const title = document.createElement("h2");

    title.textContent = titleText;

    heading.appendChild(title);

    return heading;
}

function executeAction(action) {
    if (!action || !action.type) {
        showToast("暂时没有可用操作");
        return;
    }

    switch (action.type) {
        case "copy":
            copyText(action.value);
            break;

        case "phone":
            window.location.href =
                "tel:" + action.value;
            break;

        case "link":
            if (!action.value) {
                showToast("链接暂未配置");
                return;
            }

            window.open(
                action.value,
                "_blank",
                "noopener,noreferrer"
            );
            break;

        default:
            showToast("暂不支持这个操作");
    }
}

async function copyText(text) {
    if (!text) {
        showToast("复制内容为空");
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        showToast("复制成功");
    } catch (error) {
        fallbackCopyText(text);
    }
}

function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");

    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.select();

    try {
        document.execCommand("copy");
        showToast("复制成功");
    } catch (error) {
        showToast("复制失败，请手动复制");
    }

    textarea.remove();
}