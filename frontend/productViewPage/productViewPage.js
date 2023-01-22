let productID = localStorage.getItem("productViewID");
let checkuser = localStorage.getItem("user") || null;
async function FetchData() {
  let data = await fetch(
    `https://thankful-mittens-duck.cyclic.app/product/productview/${productID}`,
    {
      method: "GET",
    }
  );
  if (data.status == 200) {
    let details = await data.json();
    let pageTitle = document.querySelector("#title");
    title.innerText = details.title;
    displayData(details);
  } else {
    alert("something went wrong");
  }
}
FetchData();
// display data
function displayData(details) {
  let container = document.querySelector("#container");
  container.innerHTML = `
    <div id="productView">
        <div id="imageDiv">
          <img
            src="${details.image}"
            alt=""
          />
        </div>
        <div id="productDetails">
          <p style="font-size: 20px">${details.title}</p>
          <h2>₹ ${details.disprice}</h2>
          <span style="display: flex; gap: 10px; background-color: white">
            <p style="align-self: center">
              MRP:<strike style="background-color: white">${details.price}</strike>
            </p>
            <p style="align-self: center">
              ${details.discount}% 0ff
            </p>
          </span>
          <p style="font-size: 10px; margin-top: 2px; margin-bottom: 20px">
            Inclusive of all Taxes
          </p>
          <h3 style="margin-bottom: 20px">Rating : ${details.rating}</h3>
          <h4>Product description:</h4>
          <p>${details.description}</p>
          <div id="quantity">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div id="btnDiv"><button id="addToCartBtn">Add to Cart</button></div>
        </div>
      </div>
      <div id="totalPriceDiv"></div>`;

  // select quantity
  let quantityvalue = 1;
  let selection = document.querySelector("#quantity select");
  selection.addEventListener("change", () => {
    quantityvalue = selection.value;
  });

  // add to cart btn;

  let addTocartBtn = document.querySelector("#addToCartBtn");
  addTocartBtn.addEventListener("click", () => {
    if (checkuser != null) {
      addTocart(details, quantityvalue);
    } else {
      alert("please login first");
    }
  });
}

async function addTocart(details, quantityvalue) {
  console.log(details);
  let obj = {
    productid: details._id,
    title: details.title,
    image: details.image,
    price: details.price,
    discount: details.discount,
    disprice: details.disprice,
    quantity: quantityvalue,
  };
  let data = await fetch("https://thankful-mittens-duck.cyclic.app/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(obj),
  });
  if (data.status == 200) {
    alert("product added to cart");
    window.location.href = "../cartpage/cartpage.html";
  }
}
