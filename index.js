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

function validation() {
  if (firstName.value.trim() === "") {
    fnAlert.innerHTML = "Nama depan harus di isi!";
  } else if (symbols.test(firstName.value)) {
    fnAlert.innerHTML = "Nama depan tidak boleh simbol!";
  } else {
    fnAlert.innerHTML = "mantap";
    fnAlert.classList.add("result");
  }

  if (lastName.value.trim() === "") {
    lnAlert.innerHTML = "Nama belakang harus di isi!";
  } else if (symbols.test(lastName.value)) {
    lnAlert.innerHTML = "Nama belakang tidak boleh simbol";
  } else {
    lnAlert.innerHTML = "mantap";
    lnAlert.classList.add("result");
  }

  if (age.value.trim() < 18) {
    ageAlert.innerHTML = "Pengguna harus di atas 18 tahun!";
  } else {
    ageAlert.innerHTML = "mantap";
    ageAlert.classList.add("result");
  }
}

function hasil() {
  if (
    fnAlert.innerHTML === "mantap" &&
    lnAlert.innerHTML === "mantap" &&
    ageAlert.innerHTML === "mantap"
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
