// 1. Product ka sara data ek Object mein store kar liya
const product = {
  name: "Parker Jotter Standard CT Ball Pen (Black)",
  rating: "7,002",
  price: "₹270",
  mrp: "M.R.P: ₹275",
  discount: "(5% off)",
  badge: "Deal of the Day",
  imageSrc: "image.jpg.png"
};

// 2. JavaScript se HTML ki ID pakad kar wahan data bhej diya
document.getElementById("product-name").innerText = product.name;
document.getElementById("product-rating").innerText = product.rating;
document.getElementById("product-price").innerText = product.price;
document.getElementById("product-mrp").innerText = product.mrp;
document.getElementById("product-discount").innerText = product.discount;
document.getElementById("product-badge").innerText = product.badge;
document.getElementById("product-img").src = product.imageSrc;
