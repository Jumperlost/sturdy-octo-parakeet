let userName = prompt("What is your name?").trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

let lastName = prompt("What is your last name?").trim();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

let userEmail = prompt("Enter your email?").replaceAll().toLowerCase();
userEmail = !userEmail.includes("@")
  ? `not valid email <b>${userEmail}</b> (symbol @ not exist)`
  : userEmail.startsWith("@")
  ? `not valid email <b>${userEmail}</b> (symbol @ find in first place)`
  : userEmail.endsWith("@")
  ? `not valid email <b>${userEmail}</b> (symbol @ find in last place)`
  : `<b> ${userEmail} </b>`;

let dateOfBirth;

do {
  dateOfBirth = prompt("Enter your birthday").replaceAll();

  if (dateOfBirth.length < 4) {
    alert("Please enter at least 4 characters");
  }
} while (dateOfBirth.length < 4);

today = new Date();
thisYear = today.getFullYear();
userAge = thisYear - dateOfBirth;
document.write(
  `<li>Full name: <b>${userName} ${lastName}</b></li>  <li>Email: ${userEmail} <br></li><li>Age: <b>${userAge}</b></li>`
);
