async function getCartItem() {
  let data = await fetch("https://thankful-mittens-duck.cyclic.app/cart", {
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
// *********************************************************Display function*******************************************************************
function displayData(cartData) {
  let maincartProductsView = document.querySelector("#maincartProductsView");
  maincartProductsView.innerHTML = null;
  let Subtotal = 0;
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
                <select class="quantitys" data-id="${element._id}">
                    <option value="${element.quantity}">${
      element.quantity
    }</option>
                    <option value="1" data-id="${element._id}">1</option>
                    <option value="2" data-id="${element._id}">2</option>
                    <option value="3" data-id="${element._id}">3</option>
                    <option value="4" data-id="${element._id}">4</option>
                    <option value="5" data-id="${element._id}">5</option>
                </select>
              </div>
              <button class="removebtn" data-id="${element._id}">Remove</button>
            </div>
          </div>
          <div class="totalPerQuantity">
            <h3 style="margin-top: 10px; background-color: white">Total:</h3>
            <h2 style="margin-top: 4px; background-color: white">₹ ${
              element.disprice * element.quantity
            }</h2>
          </div>
        </div>`;
    Subtotal += element.disprice * element.quantity;
    div.innerHTML = innerDiv;
    maincartProductsView.append(div);
  });
  // *****************total N price Section**********************
  let totalNpriceSection = document.querySelector("#totalNpriceSection");
  totalNpriceSection.innerHTML = `
        <div>
          <h2>Subtotal :</h2>
          <h2>${Subtotal}</h2>
        </div>
        <div>
          <p>shipment and handling:</p>
          <p>free</p>
        </div>
        <hr style="margin-top: 10px" />
        <div id="btnDiv" style="justify-content: center;">
          <button id="checkoutBtn">Checkout</button>
        </div>`;

  // quantity
  let quantityOpt = document.querySelectorAll(".quantitys");
  for (let i = 0; i < quantityOpt.length; i++) {
    quantityOpt[i].addEventListener("change", (event) => {
      let quantity = quantityOpt[i].value;
      let ID = event.target.dataset.id;
      updateQuantity(quantity, ID);
    });
  }

  //remove
  let all_remove_btn = document.querySelectorAll(".removebtn");
  for (let i = 0; i < all_remove_btn.length; i++) {
    all_remove_btn[i].addEventListener("click", (event) => {
      let ID = event.target.dataset.id;
      remove(ID);
    });
  }
}
// update quantity function
async function updateQuantity(quantity, ID) {
  let data = await fetch(
    `https://thankful-mittens-duck.cyclic.app/cart/upadtequantity/${ID}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    }
  );
  if (data.status == 200) {
    getCartItem();
  }
}

// remove/delete function
async function remove(ID) {
  let data = await fetch(
    `https://thankful-mittens-duck.cyclic.app/cart/delete/${ID}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );
  if (data.status == 200) {
    getCartItem();
  }
}
