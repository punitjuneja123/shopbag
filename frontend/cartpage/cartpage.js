async function getCartItem() {
  let data = await fetch("http://localhost:4600/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  if (data.status == 200) {
    let cartData = await data.json();
    displayData(cartData);
  }
}
getCartItem();

function displayData(cartData) {
  let maincartProductsView = document.querySelector("#maincartProductsView");
  maincartProductsView.innerHTML = null;
  let cartDataArray = [];
  cartData.forEach((element) => {
    let div = document.createElement("div");
    let innerDiv = `
        <div id="cartProductsView">
          <div></div>
          <div class="imageDiv">
            <img
              src=${element.image}
              alt=""
            />
          </div>
          <div class="productDetails">
            <h1>${element.title}</h1>
            <h2>₹ ${element.disprice}</h2>
            <span style="display: flex; gap: 10px; background-color: white">
              <p style="align-self: center">
                MRP:<strike style="background-color: white">${
                  element.price
                }</strike>
              </p>
              <p style="align-self: center">${element.discount}% 0ff</p>
            </span>
            <p style="font-size: 10px; margin-top: 2px; margin-bottom: 20px">
              Inclusive of all Taxes
            </p>
            <div style="display: flex; background-color: white">
              <div class="quantity">
                <select class="quantitys">
                    <option value="${element.quantity}">${
      element.quantity
    }</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
              </div>
              <button id="removebtn">Remove</button>
            </div>
          </div>
          <div class="totalPerQuantity">
            <h3 style="margin-top: 10px; background-color: white">Total:</h3>
            <h2 style="margin-top: 4px; background-color: white">₹ ${
              element.disprice * element.quantity
            }</h2>
          </div>
        </div>`;
    div.innerHTML = innerDiv;
    maincartProductsView.append(div);
  });
  // maincartProductsView.innerHTML = cartDataArray.join("");
  // let quantityOpt = document.querySelector(".quantity");
  // console.log(quantityOpt);
    let quantityOpt = document.querySelectorAll(".quantitys");
    console.log(quantityOpt)
    for (let i = 0; i < quantityOpt.length; i++){
        quantityOpt[i].addEventListener("change", () => {
            console.log(quantityOpt[i].value)
        })
    }
    
    // quantityOpt.addEventListener("change", () => {
    //   console.log(quantityOpt.value);
    // });
}
