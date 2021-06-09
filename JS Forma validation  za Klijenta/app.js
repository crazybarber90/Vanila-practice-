const form  = document.getElementById('form');
const username  = document.getElementById('username');
const password  = document.getElementById('password');
const email  = document.getElementById('email');
const password2  = document.getElementById('password2');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
  // Get values from the inputs.
  //trim() remove white space if user use space before password.

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value =  password2.value.trim();

  if(usernameValue === ''){
    //show error
    //add error class
    setErrorFor(username, 'Username cannot be blank');
  }else {
    // add success class
    setSuccessFor(username);
}

  if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank')
  }else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid')
  }else {
    setSuccessFor(email);
  }

  if(passwordValue===""){
    setErrorFor(password, 'Enter your password')
  }else {
    setSuccessFor(password);
  }

  if(password2Value===""){
    setErrorFor(password2, 'Enter your password2')
  }else if(passwordValue !== password2Value){
    setErrorFor(password2, 'passwords does not match')
  } else {
    setSuccessFor(password2);
  }
}


function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;
  //add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


// //IS EMAIL custom function 
function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}