
document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Render
    =========================== */

    renderNotice();

    renderCommon();

    renderRecommend();

    renderFAQ();

    renderRules();

    /* ===========================
       Statistics
    =========================== */

    setStatistics();

    /* ===========================
       Search
    =========================== */

    initSearch();

    /* ===========================
       Collapse
    =========================== */

    initCollapse();

    /* ===========================
       FAQ
    =========================== */

    initFAQ();

    /* ===========================
       Copy
    =========================== */

    initCopyButtons();

    /* ===========================
       Anchor
    =========================== */

    initAnchor();

    /* ===========================
       External Links
    =========================== */

    secureLinks();

    /* ===========================
       Animation
    =========================== */

    observeElements();

    /* ===========================
       Theme
    =========================== */

    initTheme();

});

/* ===========================
   Theme
=========================== */

function initTheme() {

    const button = $("#themeToggle");

    if (!button) return;

    const current = localStorage.getItem("theme");

    if (current === "dark") {

        document.body.classList.add("dark");

        button.textContent = "☀️";

    }

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        button.textContent =

            dark

                ? "☀️"

                : "🌙";

        localStorage.setItem(

            "theme",

            dark

                ? "dark"

                : "light"

        );

    });

}