let cardBtn = document.getElementById("card");
let box = document.getElementById("box");
let items = [];
let cardes = [
  { id: 1, img: "assetes/M1080J14_D-New-Balance-Fresh-Foam-X-860v14-Mens-Running-Shoes_20_3.jpg", titel: "shoes-1", pries: "120$" },
  { id: 2, img: "assetes/M1080J14_D-New-Balance-Fresh-Foam-X-860v14-Mens-Running-Shoes_20_3.jpg", titel: "shoes-2", pries: "20$" },
  { id: 3, img: "assetes/M1080J14_D-New-Balance-Fresh-Foam-X-860v14-Mens-Running-Shoes_20_3.jpg", titel: "shoes-3", pries: "70$" },
  { id: 4, img: "assetes/M1080J14_D-New-Balance-Fresh-Foam-X-860v14-Mens-Running-Shoes_20_3.jpg", titel: "shoes-4", pries: "100$" },
  { id: 5, img: "assetes/M1080J14_D-New-Balance-Fresh-Foam-X-860v14-Mens-Running-Shoes_20_3.jpg", titel: "shoes-5", pries: "10$" },
  { id: 6, img: "assetes/M1080J14_D-New-Balance-Fresh-Foam-X-860v14-Mens-Running-Shoes_20_3.jpg", titel: "shoes-6", pries: "210$" },
];

// عرض المنتجات
cardes.forEach(item => {
  box.innerHTML += `
    <div class="box">
      <img src="${item.img}" alt="${item.titel}" width="150"/>
      <h2>${item.titel}</h2>
      <p>${item.pries}</p>
      <button onclick="AddToCart(${item.id})">Add To Cart</button>
    </div>
  `;
});

function AddToCart(id) {
  const product = cardes.find(p => p.id === id);
  if (product) items.push(product);
  DisplayTocart();
}

function DisplayTocart() {
  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";
  if (items.length === 0) {
    cartItems.innerHTML = "<p> </p>";
    cardBtn.innerText = "0 +";
    return;
  }
  items.forEach(card => {
    cartItems.innerHTML += `
      <div class="box">
        <img src="${card.img}" alt="${card.titel}" width="150"/>
        <h2>${card.titel}</h2>
        <p>${card.pries}</p>
        <button onclick="Remove(${card.id})">Remove</button>
      </div>
    `;
  });
  cardBtn.innerText = items.length + " +";
}

function Remove(id) {
  const index = items.findIndex(card => card.id === id);
  if (index !== -1) items.splice(index, 1);
  DisplayTocart();
}


const allBtn = document.querySelector(".All");
const outBox = document.querySelector(".out");
const closeBtn = document.querySelector(".close-btn");

allBtn.addEventListener("click", () => {
  outBox.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  outBox.classList.remove("active");
});
