let productName = localStorage.getItem("productName");
let atpage = 1;
async function pagination() {
  let data = await fetch("http://localhost:4600/product/mobile", {
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
    `http://localhost:4600/product/mobile?page=${atpage}`,
    {
      method: "GET",
    }
  );
  if (displayData.status == 200) {
    let data = await displayData.json();
    let productDiv = document.querySelector("#productDiv");
    productDiv.innerHTML = null;
    data.forEach((element) => {
      console.log(element);
      let img = document.createElement("img");
      img.src = element.image;
      let title = document.createElement("p");
      title.innerText = element.title.substring(0, 26) + "...";
      let rating = document.createElement("p");
      rating.innerText = "rating-" + element.rating;
      let price = document.createElement("h3");
      price.innerText =
        "₹ " +
        Math.trunc(element.price - element.price * (element.discount / 100));
      let ogprice = document.createElement("p");
      ogprice.innerHTML = "M.R.P: " + element.price.toString().strike();
      let pricediv = document.createElement("div");
      pricediv.append(price, ogprice);
      let div = document.createElement("div");
      div.append(img, title, rating, pricediv);
      productDiv.append(div);
    });
  } else {
    alert("error");
  }
}
displayProduct();

// ******************************************************sort function*********************************************************