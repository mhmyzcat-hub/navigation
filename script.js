const app = document.getElementById("app");


websites.forEach(section => {


    const category = document.createElement("section");

    category.className = "category";


    const title = document.createElement("h2");

    title.textContent = section.category;


    const cards = document.createElement("div");

    cards.className = "cards";



    section.links.forEach(site => {


        const card = document.createElement("a");


        card.className = "card";


        card.href = site.url;


        card.target = "_blank";



        card.innerHTML = `

            <h3>${site.name}</h3>

            <p>${site.desc}</p>

        `;


        cards.appendChild(card);


    });



    category.appendChild(title);

    category.appendChild(cards);


    app.appendChild(category);



});
