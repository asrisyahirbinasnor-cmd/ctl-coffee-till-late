// Open or close the menu on phone
function toggleMenu() {
  var nav = document.getElementById("mainNav");
  nav.classList.toggle("open");
}

// ---------- MENU PAGE: filter and search ----------

// Show only the rows for one category (all / coffee / chocolate)
function filterMenu(category) {
  var rows = document.getElementsByClassName("menu-row");

  for (var i = 0; i < rows.length; i++) {
    if (category == "all" || rows[i].className.indexOf(category) != -1) {
      rows[i].style.display = "";       // show
    } else {
      rows[i].style.display = "none";   // hide
    }
  }
}

// Search drinks by name while typing
function searchMenu() {
  var text = document.getElementById("searchBox").value.toLowerCase();
  var rows = document.getElementsByClassName("menu-row");

  for (var i = 0; i < rows.length; i++) {
    var rowText = rows[i].innerText.toLowerCase();
    if (rowText.indexOf(text) != -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// ---------- ORDER PAGE: calculate total ----------

// Prices in the same order as the table rows (RM)
var prices = [6, 8, 9, 9, 9, 10, 10, 9, 10];

// Calculate the total price and show it on the page
function calculateTotal() {
  var total = 0;

  for (var i = 0; i < prices.length; i++) {
    var qty = Number(document.getElementById("qty" + i).value);
    total = total + qty * prices[i];
  }

  document.getElementById("totalPrice").innerText = total.toFixed(2);
  return total;
}
// ---------- ORDER PAGE: check the form ----------

function checkOrder() {
  var name = document.getElementById("customerName").value;
  var total = calculateTotal();
  var message = document.getElementById("orderMessage");

  if (name == "") {
    message.className = "error";
    message.innerText = "Please enter your name.";
    return false;
  }

  if (total == 0) {
    message.className = "error";
    message.innerText = "Please choose at least one drink.";
    return false;
  }

  message.className = "success";
  message.innerText = "Thank you, " + name + "! Your order total is RM " + total.toFixed(2) + ".";
  return false;
}

// ---------- CONTACT PAGE: check the form ----------

function checkContact() {
  var name = document.getElementById("contactName").value;
  var email = document.getElementById("contactEmail").value;
  var msg = document.getElementById("contactMessage").value;
  var message = document.getElementById("contactResult");

  if (name == "" || email == "" || msg == "") {
    message.className = "error";
    message.innerText = "Please fill in all the fields.";
    return false;
  }

  if (email.indexOf("@") == -1) {
    message.className = "error";
    message.innerText = "Please enter a valid email address.";
    return false;
  }

  message.className = "success";
  message.innerText = "Thank you, " + name + "! Your message has been sent.";
  return false;
}

// ---------- LOGIN PAGE: check login and register ----------

function checkLogin() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  var message = document.getElementById("loginResult");

  if (email.indexOf("@") == -1) {
    message.className = "error";
    message.innerText = "Please enter a valid email address.";
    return false;
  }

  if (password.length < 6) {
    message.className = "error";
    message.innerText = "Password must be at least 6 characters.";
    return false;
  }

  message.className = "success";
  message.innerText = "Login successful. Welcome back!";
  return false;
}

function checkRegister() {
  var name = document.getElementById("regName").value;
  var email = document.getElementById("regEmail").value;
  var password = document.getElementById("regPassword").value;
  var confirmPassword = document.getElementById("regConfirm").value;
  var message = document.getElementById("registerResult");

  if (name == "") {
    message.className = "error";
    message.innerText = "Please enter your name.";
    return false;
  }

  if (email.indexOf("@") == -1) {
    message.className = "error";
    message.innerText = "Please enter a valid email address.";
    return false;
  }

  if (password.length < 6) {
    message.className = "error";
    message.innerText = "Password must be at least 6 characters.";
    return false;
  }

  if (password != confirmPassword) {
    message.className = "error";
    message.innerText = "Passwords do not match.";
    return false;
  }

  message.className = "success";
  message.innerText = "Account created for " + name + "!";
  return false;
}