
function createCard(item) {

    const card = document.createElement("div");

    card.className = "card fade-in";

    card.dataset.search = [

        item.title,

        item.subtitle,

        item.desc,

        item.tag

    ].join(" ").toLowerCase();

    card.innerHTML = `
        <div class="card-header">

            <div class="card-icon">
                ${item.icon}
            </div>

            <div class="card-info">

                <div class="card-title">
                    ${item.title}
                </div>

                <div class="card-subtitle">
                    ${item.subtitle || ""}
                </div>

            </div>

        </div>

        <div class="card-desc">
            ${item.desc}
        </div>

        <div class="card-footer">

            <span class="tag">
                ${item.tag}
            </span>

            <a
                class="card-link"
                href="${item.url}"
                target="_blank">

                打开 →

            </a>

        </div>
    `;

    return card;

}

/* ===========================
   Notice
=========================== */

function renderNotice() {

    const notice = $("#noticeText");

    if (!notice) return;

    notice.textContent = NavigationData.notice;

}

/* ===========================
   Common Links
=========================== */

function renderCommon() {

    const container = $("#commonLinks");

    if (!container) return;

    container.innerHTML = "";

    NavigationData.common.forEach(item => {

        container.appendChild(createCard(item));

    });

}

/* ===========================
   Recommend
=========================== */

function renderRecommend() {

    const container = $("#recommendList");

    if (!container) return;

    container.innerHTML = "";

    NavigationData.recommend.forEach(item => {

        container.appendChild(createCard(item));

    });

}

/* ===========================
   FAQ
=========================== */

function renderFAQ() {

    const list = $("#faqList");

    if (!list) return;

    list.innerHTML = "";

    NavigationData.faq.forEach(item => {

        const div = document.createElement("div");

        div.className = "faq-item";

        div.innerHTML = `
            <button class="faq-question">

                <span>${item.q}</span>

                <span>⌄</span>

            </button>

            <div class="faq-answer">

                ${item.a}

            </div>
        `;

        list.appendChild(div);

    });

}

/* ===========================
   Rules
=========================== */

function renderRules() {

    const box = $("#rulesContent");

    if (!box) return;

    box.innerHTML = `
        <ul>

            ${NavigationData.rules
                .map(rule => `<li>${rule}</li>`)
                .join("")}

        </ul>
    `;

}