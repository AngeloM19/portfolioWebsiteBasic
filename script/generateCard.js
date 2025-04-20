function createCard({img, title, description }){
    const card = document.createElement("div")

    card.innerHTML = `
    <div class="card">            

    <img class="cardImage" src="${img}" alt="${title}">

    <div class="cardContent">
        <div class="cardTitle montserrat-semiBold">${title}</div>
        <div class="cardDescription montserrat-Regular">${description}</div>
    </div>
    </div>
    `;

    return card;
}

const data = {
    title: "Mountain Escape",
    description: "Discover the peaceful mountain retreats and beautiful landscapes.",
    img: "https://picsum.photos/id/1018/300/200"
  };

const container = document.getElementById("Tab1");
container.appendChild(createCard(data));