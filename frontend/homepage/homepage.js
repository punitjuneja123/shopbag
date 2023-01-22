let category = document.querySelectorAll(".category");

for (singleCategory of category) {
  singleCategory.addEventListener("click", (event) => {
    let productName = event.target.dataset.name;
    localStorage.setItem("productName", productName);
    window.location.href = "./productpage/productPage.html";
  });
}
// crousel
const GrocerynHomeSlideRight = document.querySelector(
  "#GrocerynHomeSlideRight"
);
const GrocerynHomeSlideLeft = document.querySelector("#GrocerynHomeSlideLeft");
let button1count = 0;
function GrocerynHomeSlideButton(button1count) {
  if (button1count == 0) {
    GrocerynHomeSlideLeft.style.opacity = 0;
    GrocerynHomeSlideRight.style.opacity = 0.7;
  } else {
    GrocerynHomeSlideLeft.style.opacity = 0.7;
    GrocerynHomeSlideRight.style.opacity = 0;
  }
}
GrocerynHomeSlideButton(button1count);
GrocerynHomeSlideRight.addEventListener("click", function () {
  document.getElementById("GrocerynHomeInner").scrollLeft += 1300;
  button1count = 1;
  GrocerynHomeSlideButton(button1count);
});
GrocerynHomeSlideLeft.addEventListener("click", function () {
  document.getElementById("GrocerynHomeInner").scrollLeft -= 1300;
  button1count = 0;
  GrocerynHomeSlideButton(button1count);
});

// **************************************************Jewellery

const JewellerySlideRight = document.querySelector("#JewellerySlideRight");
const JewellerySlideLeft = document.querySelector("#JewellerySlideLeft");
let button2count = 0;
function JewellerySlideButton(button2count) {
  if (button2count == 0) {
    JewellerySlideLeft.style.opacity = 0;
    JewellerySlideRight.style.opacity = 0.7;
  } else {
    JewellerySlideLeft.style.opacity = 0.7;
    JewellerySlideRight.style.opacity = 0;
  }
}
JewellerySlideButton(button1count);
JewellerySlideRight.addEventListener("click", function () {
  document.getElementById("JewelleryInner").scrollLeft += 1300;
  button2count = 1;
  JewellerySlideButton(button2count);
});
JewellerySlideLeft.addEventListener("click", function () {
  document.getElementById("JewelleryInner").scrollLeft -= 1300;
  button2count = 0;
  JewellerySlideButton(button2count);
});
