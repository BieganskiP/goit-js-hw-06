const form = document.querySelector("form");

const userEmail = "bieganski1996@gmail.com";
const userPassword = "helloWorld123";
let logedIn = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value != "" && password.value != "") {
    logedIn = { email: email.value, password: password.value };
    console.log(logedIn);
    form.reset();
  } else if (email.value == "" || password.value == "") {
    alert(
      "At least one of the form windows is empty! All windows should be filled in"
    );
  }
});
