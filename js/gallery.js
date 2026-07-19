document.addEventListener("DOMContentLoaded", async function () {
    const galleryKey = document.body.dataset.galleryKey;
    const gallery = recommendationGalleries[galleryKey];

    if (!gallery) {
        renderGalleryError();
        return;
    }

    document.title = gallery.title + " - 叹木宁导航站";

    const title = document.getElementById("galleryTitle");
    const count = document.getElementById("galleryCount");
    const grid = document.getElementById("galleryGrid");
    const empty = document.getElementById("galleryEmpty");

    title.textContent = gallery.title;
    count.textContent = "正在加载图片…";

    initGalleryTheme();
    initLightbox();
    initGalleryCopyButton();

    try {
        if (gallery.sections) {
            const sectionResults = await Promise.all(
                gallery.sections.map(async function (section) {
                    return {
                        title: section.title,
                        images: await loadGalleryImages(section.folder)
                    };
                })
            );

            const totalCount = sectionResults.reduce(function (total, section) {
                return total + section.images.length;
            }, 0);

            count.textContent = totalCount + " 张图片";

            if (!totalCount) {
                empty.hidden = false;
                grid.hidden = true;
                return;
            }

            grid.className = "gallery-section-list";
            sectionResults.forEach(function (section) {
                renderGallerySection(grid, gallery, section);
            });
            return;
        }

        const images = await loadGalleryImages(gallery.folder);

        count.textContent = images.length + " 张图片";

        if (!images.length) {
            empty.hidden = false;
            grid.hidden = true;
            return;
        }

        images.forEach(function (item, index) {
            renderGalleryCard(grid, gallery, item, index);
        });
    } catch (error) {
        count.textContent = "加载失败";
        empty.querySelector("strong").textContent = "图片暂时无法加载";
        empty.querySelector("p").textContent = "请检查网络，或确认图片已经推送到 GitHub。";
        empty.hidden = false;
        grid.hidden = true;
    }
});

function renderGallerySection(container, gallery, section) {
    const sectionElement = document.createElement("section");
    sectionElement.className = "gallery-category-section";

    const heading = document.createElement("div");
    heading.className = "gallery-category-heading";

    const title = document.createElement("h2");
    title.textContent = section.title;

    const count = document.createElement("span");
    count.textContent = section.images.length + " 张";

    heading.appendChild(title);
    heading.appendChild(count);
    sectionElement.appendChild(heading);

    if (!section.images.length) {
        const empty = document.createElement("p");
        empty.className = "gallery-section-empty";
        empty.textContent = "该板块暂未添加图片";
        sectionElement.appendChild(empty);
    } else {
        const grid = document.createElement("div");
        grid.className = "gallery-grid";
        section.images.forEach(function (item, index) {
            renderGalleryCard(grid, gallery, item, index);
        });
        sectionElement.appendChild(grid);
    }

    container.appendChild(sectionElement);
}

async function loadGalleryImages(folder) {
    const normalizedFolder = "/" + folder.replace(/^\/+|\/+$/g, "") + "/";

    return Array.from(document.querySelectorAll("[data-gallery-image]"))
        .filter(function (item) {
            return item.dataset.path.startsWith(normalizedFolder);
        })
        .map(function (item) {
            return {
                type: "file",
                name: item.dataset.name,
                download_url: item.dataset.url
            };
        })
        .sort(function (left, right) {
            return left.name.localeCompare(right.name, "zh-CN", {
                numeric: true,
                sensitivity: "base"
            });
        });
}

function renderGalleryCard(grid, gallery, item, index) {
    const card = document.createElement("button");
    card.className = "gallery-card";
    card.type = "button";

    const displayName = item.name.replace(/\.[^.]+$/, "");
    const isScarce = displayName.includes("稀缺");
    const cleanName = displayName
        .replace(/[【\[（(]?\s*稀缺\s*[】\]）)]?/g, "")
        .replace(/^[-_·@\s]+|[-_·@\s]+$/g, "")
        .trim();
    const imageTitle = cleanName || "参考款式 " + (index + 1);
    card.setAttribute("aria-label", "查看" + imageTitle);

    const image = document.createElement("img");
    image.src = item.download_url;
    image.alt = gallery.title + " - " + imageTitle;
    image.loading = "lazy";

    const info = document.createElement("span");
    info.className = "gallery-card-info";

    const titleRow = document.createElement("span");
    titleRow.className = "gallery-card-title-row";

    const itemTitle = document.createElement("strong");
    itemTitle.textContent = imageTitle;
    titleRow.appendChild(itemTitle);

    if (isScarce) {
        const scarceBadge = document.createElement("em");
        scarceBadge.className = "gallery-scarce-badge";
        scarceBadge.textContent = "·稀缺";
        titleRow.appendChild(scarceBadge);
    }

    info.appendChild(titleRow);

    card.appendChild(image);
    card.appendChild(info);
    card.addEventListener("click", function () {
        openLightbox(image.src, image.alt);
    });
    grid.appendChild(card);
}

function renderGalleryError() {
    const title = document.getElementById("galleryTitle");
    const empty = document.getElementById("galleryEmpty");
    title.textContent = "图片分类不存在";
    empty.hidden = false;
}

function openLightbox(src, alt) {
    const lightbox = document.getElementById("galleryLightbox");
    const image = lightbox.querySelector("img");
    image.src = src;
    image.alt = alt;
    lightbox.hidden = false;
    document.body.classList.add("gallery-modal-open");
}

function closeLightbox() {
    const lightbox = document.getElementById("galleryLightbox");
    lightbox.hidden = true;
    document.body.classList.remove("gallery-modal-open");
}

function initLightbox() {
    const lightbox = document.getElementById("galleryLightbox");
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox || event.target.closest(".gallery-lightbox-close")) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !lightbox.hidden) {
            closeLightbox();
        }
    });
}

function initGalleryTheme() {
    const button = document.getElementById("galleryThemeToggle");
    const savedTheme = localStorage.getItem("navigation-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateGalleryThemeButton(button);

    button.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "navigation-theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
        updateGalleryThemeButton(button);
    });
}

function updateGalleryThemeButton(button) {
    const isDark = document.body.classList.contains("dark");
    button.textContent = isDark ? "☀️" : "🌙";
    button.setAttribute("aria-label", isDark ? "切换浅色模式" : "切换深色模式");
}

function initGalleryCopyButton() {
    const button = document.getElementById("galleryWechatCopy");

    if (!button) {
        return;
    }

    const originalText = button.innerHTML;

    button.addEventListener("click", async function () {
        const text = button.dataset.copy;

        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
        }

        button.textContent = "已复制 ✓";
        button.classList.add("is-copied");

        window.setTimeout(function () {
            button.innerHTML = originalText;
            button.classList.remove("is-copied");
        }, 1500);
    });
}
