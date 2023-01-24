let form = document.querySelector("form");
const port = "https://thankful-mittens-duck.cyclic.app";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let all_tag = document.querySelectorAll("form input");
  let signupObj = {};
  for (let i = 0; i < all_tag.length - 1; i++) {
    signupObj[all_tag[i].id] = all_tag[i].value;
  }
  signupFun(signupObj);
});

async function signupFun(signupObj) {
  let data = await fetch(`${port}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupObj),
  });
  if (data.status == 200) {
    alert("User Registered");
    window.location.href = "./signin.html";
  } else {
    alert(await data.text());
  }
}
