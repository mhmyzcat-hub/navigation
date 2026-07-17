// js/search.js
// V3.0.1 搜索优化版


function initSearch() {

    const input = $("#searchInput");

    const button = document.querySelector(
        ".hero-search button"
    );


    if (!input) return;


    function executeSearch(){

        const keyword =
            input.value
            .trim()
            .toLowerCase();


        const cards =
            $$(".card");


        cards.forEach(card=>{


            const content =
                card.dataset.search
                || "";


            const matched =
                content.includes(keyword);


            card.classList.toggle(
                "hidden",
                !matched
            );


        });


        // 自动跳转到导航区域

        const links =
            document.querySelector("#links");


        if(keyword && links){

            setTimeout(()=>{

                links.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            },150);

        }

    }


    // 输入实时搜索

    input.addEventListener(
        "input",
        executeSearch
    );


    // 点击搜索按钮

    if(button){

        button.addEventListener(
            "click",
            executeSearch
        );

    }


    // 回车搜索

    input.addEventListener(
        "keydown",
        event=>{


            if(event.key==="Enter"){

                executeSearch();

            }


        }
    );


}


/* ===========================
   Collapse
=========================== */


function initCollapse(){


    $$(".collapse-btn")
    .forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                toggleCollapse(

                    button.dataset.target,

                    button

                );


            }
        );


    });


}


/* ===========================
   FAQ
=========================== */


function initFAQ(){


    document.addEventListener(
        "click",
        event=>{


            const question =
                event.target.closest(
                    ".faq-question"
                );


            if(!question) return;


            const item =
                question.parentElement;


            item.classList.toggle(
                "active"
            );


        }
    );


}


/* ===========================
   Copy
=========================== */


function initCopyButtons(){


    $$(".copy-btn")
    .forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                copyText(
                    button.dataset.copy
                );


            }
        );


    });


}


/* ===========================
   Smooth Scroll
=========================== */


function initAnchor(){


    document.addEventListener(
        "click",
        event=>{


            const link =
                event.target.closest(
                    'a[href^="#"]'
                );


            if(!link) return;


            const href =
                link.getAttribute(
                    "href"
                );


            if(
                href === "#"
            ) return;


            const target =
                document.querySelector(
                    href
                );


            if(!target) return;


            event.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }
    );


}