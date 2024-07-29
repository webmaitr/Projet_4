function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const menuIcon = document.querySelector(".icon");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalbgMsg = document.querySelector(".bground-msg");
const validMsg = document.querySelector(".valid-msg");
const closeIcon = document.querySelectorAll(".close");

// launch responsive menu event
menuIcon.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch validation message ok
function launchMsg() {
  modalbgMsg.style.display = "block";
  validMsg.innerHTML = "<br>Merci ! Votre réservation a bien été reçue.";
}

// close modal event
closeIcon.forEach((icon) => icon.addEventListener("click", closeModal));
function closeModal() {
  modalbg.style.display = "none";
  modalbgMsg.style.display = "none";
} 

// object will gather data from user after each input field validation
const userData = {};

// validate Prénom is minimum 2 letters or display error message
function validateFirstName() {
  let inputFirst = document.getElementById("first");
  let firstName = inputFirst.value;
  if (firstName.length >= 2) {
  inputFirst.parentElement.setAttribute("data-error", "");
  inputFirst.parentElement.setAttribute("data-error-visible", false);  
  userData.prenom = firstName;
  return true;
  }
  inputFirst.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  inputFirst.parentElement.setAttribute("data-error-visible", true);
  return false;
}

// validate Nom is minimum 2 letters or display error message
function validateLastName() {
  let inputLast = document.getElementById("last");
  let lastName = inputLast.value;
  if (lastName.length >= 2) {
    inputLast.parentElement.setAttribute("data-error", "");
    inputLast.parentElement.setAttribute("data-error-visible", false);
    userData.nom = lastName;
    return true;
  }
  inputLast.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  inputLast.parentElement.setAttribute("data-error-visible", true);
  return false;
}

// validate Email is valid Email or display error message
function validateEmail() {
  let inputEmail = document.getElementById("email");
  let emailUser = inputEmail.value;
  let mailRegExp = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9.-_]+");
  if (mailRegExp.test(emailUser)) {
    inputEmail.parentElement.setAttribute("data-error", "");
    inputEmail.parentElement.setAttribute("data-error-visible", false);
    userData.email = emailUser;
    return true;
  }
  inputEmail.parentElement.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
  inputEmail.parentElement.setAttribute("data-error-visible", true);
  return false;
}

// validate Date de naissance is a date or display error message
function validateBirthdate() {
  let inputBirthdate = document.getElementById("birthdate");
  let birthdateUser = inputBirthdate.value;
  let dateRegExp = new RegExp("[12][09][0-9][0-9]\-[0[1-9]|1[0-2]\-[0-2][1-9]|3[01]");
  if (dateRegExp.test(birthdateUser)) {
    inputBirthdate.parentElement.setAttribute("data-error", "");
    inputBirthdate.parentElement.setAttribute("data-error-visible", false);
    userData.anniversaire = birthdateUser;
    return true;
  }
  inputBirthdate.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance dans le format JJ/MM/YYYY.");
  inputBirthdate.parentElement.setAttribute("data-error-visible", true);
  return false;
}

// validate nombre de tournois is a number or display error message
function validateQuantity() {
  let baliseQuantity = document.getElementById("quantity");
  let qtyOfGame = baliseQuantity.value;
  let qtyRegExp = new RegExp("[1-9]|[1-9][1-9]");
  if (qtyRegExp.test(qtyOfGame)) {
    baliseQuantity.parentElement.setAttribute("data-error", "");
    baliseQuantity.parentElement.setAttribute("data-error-visible", false);
    userData.tournois = qtyOfGame;
    return true;
  }
  baliseQuantity.parentElement.setAttribute("data-error", "Vous devez entrer une valeur.");
  baliseQuantity.parentElement.setAttribute("data-error-visible", true);
  return false;
}

// check that at least 1 radio is selected or display error message
function validateLocation() {
  let inputLocation = document.querySelectorAll('input[name="location"]');
  for (let i = 0; i < inputLocation.length; i++) {
    if (inputLocation[i].checked) {
      inputLocation[i].parentElement.setAttribute("data-error", "");
      inputLocation[i].parentElement.setAttribute("data-error-visible", false);
      userData.souhait = inputLocation[i].value;  
      return true;
    }
  }    
  inputLocation[0].parentElement.setAttribute("data-error", "Vous devez choisir une option.");
  inputLocation[0].parentElement.setAttribute("data-error-visible", true);
  return false;
}

// check that conditions checkbox is checked or display error message
function validateConditions () {
  let cond = document.getElementById("checkbox1");
  let info = document.getElementById("checkbox2");
  if (cond.checked === true) {
    cond.parentElement.setAttribute("data-error", "");
    cond.parentElement.setAttribute("data-error-visible", false);
    userData.conditions = cond.checked;
    userData.prochains = info.checked;
    return true;
  }
  cond.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
  cond.parentElement.setAttribute("data-error-visible", true);
  return false;
}

// launch validate when form is submitted
document.getElementById("modal-form").onsubmit = validate;
function validate(event) {
  event.preventDefault();
  validateFirstName();
  validateLastName();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateLocation();
  validateConditions();
  if (validateFirstName() && validateLastName() && validateEmail() && validateBirthdate() && validateQuantity() && validateLocation() && validateConditions()) {
    console.log(userData);
    closeModal();
    launchMsg();
  }
}


