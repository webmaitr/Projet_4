function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeIcon.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
} 


function validateFirstName() {
  let inputFirst = document.getElementById("first");
  let firstName = inputFirst.value;
  if (firstName.length >= 2) {
  inputFirst.parentElement.setAttribute("data-error", "");
  inputFirst.parentElement.setAttribute("data-error-visible", false);  
  return true;
  }
  inputFirst.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  inputFirst.parentElement.setAttribute("data-error-visible", true);
  return false;
}


function validateLastName() {
  let inputLast = document.getElementById("last");
  let lastName = inputLast.value;
  if (lastName.length >= 2) {
    inputLast.parentElement.setAttribute("data-error", "");
    inputLast.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
  inputLast.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  inputLast.parentElement.setAttribute("data-error-visible", true);
  return false;
}

function validateEmail() {
  let inputEmail = document.getElementById("email");
  let emailUser = inputEmail.value;
  let mailRegExp = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9.-_]+");
  if (mailRegExp.test(emailUser)) {
    inputEmail.parentElement.setAttribute("data-error", "");
    inputEmail.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
  inputEmail.parentElement.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
  inputEmail.parentElement.setAttribute("data-error-visible", true);
  return false;
}

function validateBirthdate() {
  let inputBirthdate = document.getElementById("birthdate");
  let birthdateUser = inputBirthdate.value;
  let dateRegExp = new RegExp("[12][09][0-9][0-9]\-[0[1-9]|1[0-2]\-[0-2][1-9]|3[01]");
  if (dateRegExp.test(birthdateUser)) {
    inputBirthdate.parentElement.setAttribute("data-error", "");
  inputBirthdate.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
  inputBirthdate.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance dans le format JJ/MM/YYYY.");
  inputBirthdate.parentElement.setAttribute("data-error-visible", true);
  return false;
}

function validateQuantity() {
  let baliseQuantity = document.getElementById("quantity");
  let qtyOfGame = baliseQuantity.value;
  let qtyRegExp = new RegExp("[1-9]|[1-9][1-9]");
  if (qtyRegExp.test(qtyOfGame)) {
    baliseQuantity.parentElement.setAttribute("data-error", "");
  baliseQuantity.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
  baliseQuantity.parentElement.setAttribute("data-error", "Vous devez entrer une valeur.");
  baliseQuantity.parentElement.setAttribute("data-error-visible", true);
  return false;
}

function validateLocation() {
  let inputLocation = document.querySelectorAll('input[name="location"]');
  for (let i = 0; i < inputLocation.length; i++) {
    if (inputLocation[i].checked) {
      inputLocation[i].parentElement.setAttribute("data-error", "");
      inputLocation[i].parentElement.setAttribute("data-error-visible", false);  
      return true;
    }
  }    
  inputLocation[0].parentElement.setAttribute("data-error", "Vous devez choisir une option.");
  inputLocation[0].parentElement.setAttribute("data-error-visible", true);
  return false;
}    

function validateConditions () {
  let cond = document.getElementById("checkbox1");
  if (cond.checked === true) {
    cond.parentElement.setAttribute("data-error", "");
    cond.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
  cond.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
  cond.parentElement.setAttribute("data-error-visible", true);
  return false;
}

function validate() {
  

  if (validateFirstName() && validateLastName() && validateEmail() && validateBirthdate() && validateQuantity() && validateLocation() && validateConditions()) {
    console.log("tout ok");
    launchModal();
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "Merci ! Votre réservation a bien été reçue.";
    return true;
  }
  else {
    console.log("y a un prob");
    return false;
  }
}