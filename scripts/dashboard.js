// This is the Dashboard Script

let user = JSON.parse(localStorage.getItem("user"))

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let days = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();

function greetUser() {
  let day = "";
  if(days === 0) {
    day = "Sunday";
  }  else if(days === 1) {
    day = "Monday";
  }  else if(days === 2) {
    day = "Tuesday";
  }  else if(days === 3) {
    day = "Wednesday";
  }  else if(days === 4) {
    day = "Thursday";
  }  else if(days === 5) {
    day = "Friday";
  }  else if(days === 6) {
    day = "Saturday";
  }

  let period = "";
  if (hour < 12) {
    period = "Morning";
  }  else if (hour >=12 && hour < 16) {
    period = "Afternoon"
  }  else if (hour >=16) {
    period = "Evening"
  }

  let message = `Welcome ${user.fullName}, Good ${period}.`;
  document.getElementById("greetings").innerHTML = message
}

greetUser()