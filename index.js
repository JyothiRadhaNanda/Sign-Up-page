console.log("test");
const SignUpForm = document.forms["sign-up-form"];
const firstName = SignUpForm["firstName"];
const lastName = SignUpForm["lastName"];
const age = SignUpForm["age"];

const fnAlert = document.getElementById("fnalert");
const lnAlert = document.getElementById("lnalert");
const ageAlert = document.getElementById("age-alert");
const result = document.getElementById("hasil");
const nama = document.getElementById("nama");
const umur = document.getElementById("umur");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const backButton = document.getElementById("gusti");
const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
const string = ["undefined", "number", "boolean", "string", "null", "object"];

function validation() {
  if (firstName.value.trim() === "") {
    fnAlert.classList.add("text-danger");
    fnAlert.innerHTML = "Nama depan harus di isi!";
  } else if (string.includes(firstName.value.toLowerCase())) {
    fnAlert.classList.add("text-danger");
    fnAlert.innerHTML = "Nama tidak tersedia!";
  } else if (symbols.test(firstName.value)) {
    fnAlert.classList.add("text-danger");
    fnAlert.innerHTML = "Nama depan tidak boleh simbol!";
  } else {
    fnAlert.innerHTML = "success";
    fnAlert.classList.add("text-success");
    // fnAlert.classList.add("result");
  }

  if (lastName.value.trim() === "") {
    lnAlert.classList.add("text-danger");
    lnAlert.innerHTML = "Nama belakang harus di isi!";
  } else if (string.includes(lastName.value.toLowerCase())) {
    lnAlert.classList.add("text-danger");
    lnAlert.innerHTML = "Nama tidak tersedia!";
  } else if (symbols.test(lastName.value)) {
    lnAlert.classList.add("text-danger");
    lnAlert.innerHTML = "Nama belakang tidak boleh simbol!";
  } else {
    lnAlert.innerHTML = "success";
    lnAlert.classList.add("text-success");
  }

  if (age.value.trim() < 18) {
    ageAlert.classList.add("text-danger");
    ageAlert.innerHTML = "Pengguna harus di atas 18 tahun!";
  } else {
    ageAlert.innerHTML = "success";
    ageAlert.classList.add("text-success");
  }
}

function hasil() {
  if (
    fnAlert.innerHTML === "success" &&
    lnAlert.innerHTML === "success" &&
    ageAlert.innerHTML === "success"
  ) {
    // alert("test");
    slide1.classList.add("slide1");
    slide2.classList.remove("slide2");
    nama.innerText = firstName.value + " " + lastName.value;
    umur.innerText = age.value;
  }
}

function back() {
  window.location.reload();
  // alert("test");
}

backButton.addEventListener("click", back);

SignUpForm.onsubmit = (event) => {
  event.preventDefault();
  validation();
  hasil();
};
