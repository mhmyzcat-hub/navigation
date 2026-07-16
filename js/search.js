
function initSearch() {

    const input = $("#searchInput");

    if (!input) return;

    input.addEventListener("input", () => {

        const keyword = input.value
            .trim()
            .toLowerCase();

        $$(".card").forEach(card => {

            const matched =
                card.dataset.search.includes(keyword);

            card.classList.toggle(
                "hidden",
                !matched
            );

        });

    });

}

/* ===========================
   Collapse
=========================== */

function initCollapse() {

    $$(".collapse-btn").forEach(button => {

        button.addEventListener("click", () => {

            toggleCollapse(

                button.dataset.target,

                button

            );

        });

    });

}

/* ===========================
   FAQ
=========================== */

function initFAQ() {

    document.addEventListener("click", e => {

        const question =
            e.target.closest(".faq-question");

        if (!question) return;

        const item =
            question.parentElement;

        item.classList.toggle("active");

    });

}

/* ===========================
   Copy Button
=========================== */

function initCopyButtons() {

    $$(".copy-btn").forEach(button => {

        button.addEventListener("click", () => {

            copyText(button.dataset.copy);

        });

    });

}

/* ===========================
   Smooth Scroll
=========================== */

function initAnchor() {

    document.addEventListener("click", e => {

        const link =
            e.target.closest('a[href^="#"]');

        if (!link) return;

        const href =
            link.getAttribute("href");

        if (href === "#") return;

        const target =
            document.querySelector(href);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

}