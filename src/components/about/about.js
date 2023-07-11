const about = [
  {
    desc: "Selamat datang di Faniha Kitchen, tempat di mana cita rasa dan kreativitas bertemu. Didirikan pada tahun 2019, kami bangga menjadi salah satu destinasi kuliner terpercaya bagi pecinta makanan di seluruh kota. Kami mengusung semangat yang sama sejak awal: menyajikan hidangan lezat yang memanjakan lidah Anda.",
    img: "./src/productImg/cthProduct.jpgg",
  },
  {
    desc: "Di Faniha Kitchen, kami percaya bahwa makanan adalah tentang lebih dari sekadar nutrisi. Ini adalah seni yang memenuhi jiwa dan menciptakan kenangan yang tak terlupakan. Dengan menggabungkan bahan-bahan segar berkualitas tinggi, rempah-rempah pilihan, dan resep warisan keluarga, kami menghadirkan hidangan otentik dengan sentuhan inovatif.",
    img: "./src/productImg/cthProduct.jpgg",
  },
  {
    desc: "Tim kami yang berbakat terdiri dari koki berpengalaman yang memiliki dedikasi tinggi dalam menciptakan pengalaman makan yang luar biasa. Kami tidak hanya berfokus pada rasa yang luar biasa, tetapi juga pada presentasi yang menarik dan layanan pelanggan yang ramah. Setiap hidangan kami dirancang dengan cinta dan perhatian terhadap detail, untuk memberikan kepuasan kuliner yang tak tertandingi.",
    img: "./src/productImg/cthProduct.jpgg",
  },
  {
    desc: "Dalam upaya kami untuk memenuhi preferensi dan kebutuhan beragam, kami menawarkan berbagai pilihan menu, mulai dari hidangan tradisional hingga kreasi modern. Apakah Anda mencari sarapan yang bergizi, hidangan ringan untuk makan siang, atau makan malam yang romantis, kami memiliki sesuatu yang istimewa untuk semua orang.",
    img: "./src/productImg/cthProduct.jpgg",
  },
  {
    desc: "Kami juga sangat menghargai hubungan kami dengan komunitas sekitar. Kami berkomitmen untuk mendukung petani lokal dan pemasok terpercaya, dengan menyediakan bahan-bahan segar berkualitas tinggi yang mendukung ekonomi lokal.",
    img: "./src/productImg/cthProduct.jpgg",
  },
  {
    desc: "Kami berterima kasih kepada semua pelanggan setia kami yang telah mendukung kami sepanjang perjalanan ini. Faniha Kitchen adalah bukti nyata cinta kami terhadap makanan dan semangat kami untuk menyajikan kelezatan yang tak terlupakan. Bergabunglah dengan kami dan mari kita bersama-sama merayakan kegembiraan makanan yang luar biasa.",
    img: "./src/productImg/cthProduct.jpgg",
  },
];

const aboutContainer = document.querySelector("#about");

about.forEach((data, index) => {
  const row = document.createElement("div");
  row.className = "row";

  const colLeft = document.createElement("div");
  colLeft.className = "col wow fadeInLeft left";
  colLeft.setAttribute("data-wow-duration", "1s");

  const colRight = document.createElement("div");
  colRight.className = "col wow fadeInRight right";
  colRight.setAttribute("data-wow-duration", "1s");

  const img = document.createElement("img");
  img.src = data.img;
  img.alt = "About Me";

  const p = document.createElement("p");
  p.textContent = data.desc;

  if (index % 2 === 0) {
    colRight.classList.remove("col");
    colRight.classList.add("col-8");
    colLeft.appendChild(img);
    colRight.appendChild(p);
  } else {
    colLeft.classList.remove("col");
    colLeft.classList.add("col-8");
    colLeft.appendChild(p);
    colRight.appendChild(img);
  }

  row.appendChild(colLeft);
  row.appendChild(colRight);

  aboutContainer.appendChild(row);
});
