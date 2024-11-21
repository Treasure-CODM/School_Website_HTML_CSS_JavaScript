// This is the Login Script

// Retroeve user from database (localStorage)
function getUser() {
  const student = JSON.parse(localStorage.getItem("user"));
  return student
}


document.getElementById("login-form-data").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values:
  const emailInput = document.getElementById("emailInput").value;
  const passwordInput = document.getElementById("passwordInput").value;

  // Retrieve user from database(localStorage):
  let student = getUser()

  if(student) {
    // Check if email and password match:
    if (emailInput === student.email && passwordInput === student.password){
      alert("Happy Hacking");

      // Redirect to homepage or dashboard
      window.location.href = "./dashboard.html"
    } else {
      alert("Invalid email and password combination! Please try again.")
    }
  } else {
    alert("No account found. Please register first")
  }
})

