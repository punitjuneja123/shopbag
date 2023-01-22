// login func
let user = localStorage.getItem("user") || null;
if (user) {
  let logindiv = document.querySelector("#loginBtn");
  logindiv.innerHTML = `
  <i class="fa fa-smile-o" aria-hidden="true"></i>
        <div style="background-color: white;>
          <p style="background-color: white;">Welcome ${user}</p>
          <div style="text-align: center; background-color: white;">
            <button id="logoutbtn"
              style="
                background-color: red;
                color: white;
                padding: 3px 10px;
                border: none;
                border-radius: 20px;
                cursor: pointer;
              "
            >
              Logout
            </button>
          </div>
        </div>
  `;
  // logout
  let logoutBtn = document.querySelector("#logoutbtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    location.reload();
  });
}
