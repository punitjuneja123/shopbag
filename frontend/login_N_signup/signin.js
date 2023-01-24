let form = document.querySelector("form");
const port = "https://thankful-mittens-duck.cyclic.app";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let all_tag = document.querySelectorAll("form input");
  let signinObj = {};
  for (let i = 0; i < all_tag.length - 1; i++) {
    signinObj[all_tag[i].id] = all_tag[i].value;
  }
  signinFun(signinObj);
});

async function signinFun(signinObj) {
  let data = await fetch(`${port}/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signinObj),
  });
  if (data.status == 200) {
    let token = await data.json();
    localStorage.setItem("token", token.token);
    localStorage.setItem("user", token.user);
    // checking previous page.
    const previousPageUrl = document.referrer;
    const checkPreviousPage = previousPageUrl.split("/");
    if (
      checkPreviousPage[checkPreviousPage.indexOf("login_N_signup") + 1] ==
        "signup.html" ||
      checkPreviousPage[checkPreviousPage.indexOf("login_N_signup") + 1] ==
        "signin.html"
    ) {
      window.location.href = "../index.html";
    } else {
      history.back();
    }
  } else {
    alert(await data.text());
  }
}
