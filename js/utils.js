
const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => [...document.querySelectorAll(selector)];

/* ===========================
   Toast
=========================== */

function showToast(message = "操作成功") {

    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}

/* ===========================
   Copy
=========================== */

async function copyText(text) {

    try {

        await navigator.clipboard.writeText(text);

        showToast("已复制");

    } catch (e) {

        const textarea = document.createElement("textarea");

        textarea.value = text;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

        showToast("已复制");

    }

}

/* ===========================
   Collapse
=========================== */

function toggleCollapse(id, button) {

    const element = document.getElementById(id);

    if (!element) return;

    element.classList.toggle("hidden");

    button.textContent =

        element.classList.contains("hidden")

            ? "展开"

            : "收起";

}

/* ===========================
   External Link
=========================== */

function secureLinks() {

    $$('a[target="_blank"]').forEach(link => {

        link.rel = "noopener noreferrer";

    });

}

/* ===========================
   Counter
=========================== */

function setStatistics() {

    const site = $("#siteCount");

    const recommend = $("#recommendCount");

    if (site) {

        site.textContent = NavigationData.common.length;

    }

    if (recommend) {

        recommend.textContent = NavigationData.recommend.length;

    }

}

/* ===========================
   Observer Animation
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

function observeElements() {

    $$(
        ".card,.faq-item,.contact-card,.announcement-box,.rules-box"
    ).forEach(el => {

        observer.observe(el);

    });

}