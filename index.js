let cardsArray = [
  {
    card1:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
    card2:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
    card3:
      "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
    card4:
      "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
    smallCard1:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard2:
      "https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard3:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard4:
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
  },
  {
    card1:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    card2:
      "https://images.unsplash.com/photo-1597851065532-055f97d12e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    card3:
      "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    card4:
      "https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard1:
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard2:
      "https://plus.unsplash.com/premium_photo-1678935939781-7e5df8a2001b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard3:
      "https://images.unsplash.com/photo-1613487957484-32c977a8bd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard4:
      "https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
  },
  {
    card1:
      "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    card2:
      "https://plus.unsplash.com/premium_photo-1682124669726-6721b5a1932c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    card3:
      "https://images.unsplash.com/photo-1580920459139-68dcb30f70fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    card4:
      "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard1:
      "https://plus.unsplash.com/premium_photo-1682124729413-6d940f082212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard2:
      "https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard3:
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    smallCard4:
      "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
  },
];

let card = {
  card1:
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
  card2:
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
  card3:
    "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
  card4:
    "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
  smallCard1:
    "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
  smallCard2:
    "https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
  smallCard3:
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
  smallCard4:
    "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
};

let currentIndex = 0;

const renderCards = () => {
  const cardContainer = document.querySelector(".card-container");

  cardContainer.innerHTML = `
                <div class="active-card">
                <div class="small-cards small-card-1">
                    <img src=${card.card1} />
                </div>
                <div class="cards card-1">
                    <img src=${card.smallCard1} />
                </div>
            
                <div class="small-cards small-card-2">
                    <img src=${card.card2} />
                </div>
                <div class="cards card-2">
                    <img src=${card.smallCard2} />
                </div>
            
                <div class="small-cards small-card-3">
                    <img src=${card.card3} />
                </div>
                <div class="cards card-3">
                    <img src=${card.smallCard3} />
                </div>
            
                <div class="small-cards small-card-4">
                    <img src=${card.card4} />
                </div>
                <div class="cards card-4">
                    <img src=${card.smallCard4} />
                </div></div>
         `;
};

const like = () => {
  if (currentIndex >= cardsArray.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  card = cardsArray[currentIndex];
  const cardContainer = document.querySelector(".card-container");
  const activeCard = document.querySelector(".active-card");
  activeCard.classList.add("left-to-right-animate-disappears");

  setTimeout(() => {
    activeCard.remove();
    cardContainer.innerHTML = `<div class="active-card">
         <div class="small-cards small-card-1">
                        <img src=${card.card1} />
                    </div>
                    <div class="cards card-1">
                        <img src=${card.smallCard1} />
                    </div>

                    <div class="small-cards small-card-2">
                        <img src=${card.card2} />
                    </div>
                    <div class="cards card-2">
                        <img src=${card.smallCard2} />
                    </div>

                    <div class="small-cards small-card-3">
                        <img src=${card.card3} />
                    </div>
                    <div class="cards card-3">
                        <img src=${card.smallCard3} />
                    </div>

                    <div class="small-cards small-card-4">
                        <img src=${card.card4} />
                    </div>
                    <div class="cards card-4">
                        <img src=${card.smallCard4} />
                    </div>
      </div>`;
  }, 400);
};

const dislike = () => {
  if (currentIndex <= 0) {
    currentIndex = cardsArray.length - 1;
  } else {
    currentIndex--;
  }

  card = cardsArray[currentIndex];
  const cardContainer = document.querySelector(".card-container");
  const activeCard = document.querySelector(".active-card");
  activeCard.classList.add("right-to-left-animate-disappears");

  setTimeout(() => {
    activeCard.remove();
    cardContainer.innerHTML = `<div class="active-card">
         <div class="small-cards small-card-1">
                        <img src=${card.card1} />
                    </div>
                    <div class="cards card-1">
                        <img src=${card.smallCard1} />
                    </div>

                    <div class="small-cards small-card-2">
                        <img src=${card.card2} />
                    </div>
                    <div class="cards card-2">
                        <img src=${card.smallCard2} />
                    </div>

                    <div class="small-cards small-card-3">
                        <img src=${card.card3} />
                    </div>
                    <div class="cards card-3">
                        <img src=${card.smallCard3} />
                    </div>

                    <div class="small-cards small-card-4">
                        <img src=${card.card4} />
                    </div>
                    <div class="cards card-4">
                        <img src=${card.smallCard4} />
                    </div>
      </div>`;
  }, 400);
};

window.onload = function () {
  renderCards();
};
