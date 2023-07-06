const productList = [
  {
    name: "Nasi Kuning - Ayam",
    price: 12000,
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Nasi Kuning - Ikan",
    price: 12000,
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Nasi Kuning - Telur",
    price: 12000,
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Nasi - Chiken Katsu",
    price: 14000,
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Nasi - Chicken Curry",
    price: 14000,
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Piscok - Maco",
    price: "",
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Piscok - Tico",
    price: "",
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Lumpia Tahu",
    price: "",
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Lumpia Telur",
    price: "",
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Tahu HAH",
    price: "",
    img: "./src/productImg/cthProduct.jpg",
  },
  {
    name: "Tahu Bakso",
    price: "",
    img: "./src/productImg/cthProduct.jpg",
  },
];

const productCardContainer = document.querySelector("#product");

productList.forEach((product) => {
  // rubah format harga
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  // card element DOM
  const card = document.createElement("div");
  card.style.width = "18rem";
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  img.className = "card-img-top";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const nameProduct = document.createElement("h5");
  nameProduct.className = "card-title";
  nameProduct.textContent = product.name;

  const priceProduct = document.createElement("p");
  priceProduct.className = "card-text";
  priceProduct.textContent = typeof product.price === "number" ? formattedPrice : "Unset";

  cardBody.appendChild(nameProduct);
  cardBody.appendChild(priceProduct);

  card.appendChild(img);
  card.appendChild(cardBody);

  productCardContainer.appendChild(card);
});

window.addEventListener("load");
