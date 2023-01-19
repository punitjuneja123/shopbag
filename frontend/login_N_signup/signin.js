let form = document.querySelector("form");

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
  let data = await fetch("http://localhost:4600/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signinObj),
  });
  if (data.status == 200) {
    let token = await data.json();
    localStorage.setItem("token", token.token);
  } else {
    alert(await data.text());
  }
}
