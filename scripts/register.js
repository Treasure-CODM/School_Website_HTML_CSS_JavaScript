// This is the Register Script 

const checkBox = document.getElementById("check-terms");

document.getElementById("formData").addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkBox.checked) {
      // Get input values:
  const fullName = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const department = document.getElementById("department").value;
  const matricNumber = document.getElementById("matricNumber").value;

  // Store user data in object:
  const user = {
    fullName, 
    email,
    password,
    department,
    matricNumber
  }

  // Save info to Local storage:
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration Successful!");

  // Redirect to login page
  // window.location.href, window.location.assign
  window.location.href = "./index.html";  
  }  else {
    alert("You must read and accept our terms and conditions before registration")
  }
})






/*
document.getElementById("formData").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values:
  const fullName = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const department = document.getElementById("department").value;
  const matricNumber = document.getElementById("matricNumber").value;

  // Store user data in object:
  const user = {
    fullName, 
    email,
    password,
    department,
    matricNumber
  }

  // Save info to Local storage:
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration Successful!");

  // Redirect to login page
  // window.location.href, window.location.assign
  window.location.href = "./login.html";
})
*/