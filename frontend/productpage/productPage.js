const port = "https://thankful-mittens-duck.cyclic.app";
let productName = localStorage.getItem("productName");
let atpage = 1;
let sortValue = undefined;
async function pagination() {
  let data = await fetch(`${port}/product/${productName}`, {
    method: "GET",
  });
  if (data.status == 200) {
    let jsonData = await data.json();
    let length = jsonData.length;
    //   adding length and product name
    let lenNPname = document.querySelector("#lenNPname");
    lenNPname.innerText = `@${productName} - ${length} products`;
    let pages = Math.ceil(length / 12);
    let Displaypages = document.querySelector("#pagination");
    for (let i = 1; i <= pages; i++) {
      let button = document.createElement("button");
      button.innerText = i;
      if (i == atpage) {
        button.style.backgroundColor = "rgb(240, 90, 34)";
        button.style.color = "white";
      }
      button.addEventListener("click", () => {
        atpage = i;
        Displaypages.innerHTML = null;
        pagination();
        displayProduct();
      });
      Displaypages.append(button);
    }
  }
}
pagination();
// ***********************************************************display products***************************************************
async function displayProduct() {
  let displayData = await fetch(
    `${port}/product/${productName}?page=${atpage}&sort=${sortValue}`,
    {
      method: "GET",
    }
  );
  if (displayData.status == 200) {
    let data = await displayData.json();
    let productDiv = document.querySelector("#productDiv");
    productDiv.innerHTML = null;
    data.forEach((element) => {
      let img = document.createElement("img");
      img.src = element.image;
      let title = document.createElement("p");
      title.innerText = element.title.substring(0, 26) + "...";
      let rating = document.createElement("p");
      rating.innerText = "rating-" + element.rating;
      let price = document.createElement("h3");
      price.innerText = "₹ " + element.disprice;
      let ogprice = document.createElement("p");
      ogprice.innerHTML = "M.R.P: " + element.price.toString().strike();
      let pricediv = document.createElement("div");
      pricediv.append(price, ogprice);
      // product div
      let div = document.createElement("div");
      div.style.cursor = "pointer";
      // href function
      div.addEventListener("click", () => {
        hrefProductView(element._id);
      });
      div.append(img, title, rating, pricediv);
      productDiv.append(div);
    });
  } else {
    alert("error");
  }
}
displayProduct();

// ******************************************************sort function*********************************************************
let sortSelect = document.querySelector("#sortSelect");
sortSelect.addEventListener("change", () => {
  sortValue = sortSelect.value;
  displayProduct();
});

// switching to product view page
function hrefProductView(productID) {
  localStorage.setItem("productViewID", productID);
  window.location.href = "../productViewPage/productviewpage.html";
}
