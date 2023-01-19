let category = document.querySelectorAll(".category");

for (singleCategory of category) {
  singleCategory.addEventListener("click", (event) => {
    let productName = event.target.dataset.name;
    localStorage.setItem("productName", productName);
    window.location.href = "./productpage/productPage.html";
  });
}
