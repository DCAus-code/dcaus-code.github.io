function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var spreadsheetID = "1PE-KgoRlJ739BS8sxF8l00NBQcqTdkGodT3UXmnJAXg";
  var range = "A:B";
  var url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetID + "/values/" + range + "?key=AIzaSyAyhcpssMAxhuWXteTTPZsGWj-zx4PPNis";
  
  $.getJSON(url, function(data) {
    var values = data.values;
    var valid = false;
    for (var i = 0; i < values.length; i++) {
      if (values[i][0] == username && values[i][1] == password) {
        valid = true;
        break;
      }
    }
    if (valid) {
      var id = generateID();
      window.location.href = "nextpage/#id=" + id + "/yes";
      setTimeout(function() {
        removeID(id);
      }, 3600000); // Remove ID after 1 hour (3600 seconds)
    } else {
      alert("Invalid username or password.");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
}

function generateID() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var id = "";
  for (var i = 0; i < 10; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  localStorage.setItem(id, Date.now());
  return id;
}

function removeID(id) {
  localStorage.removeItem(id);
}

function checkID() {
  var id = window.location.hash.substring(4, 14);
  var timestamp = localStorage.getItem(id);
  if (timestamp == null || Date.now() - timestamp > 3600000) {
    alert("Session expired. Please login again.");
    window.location.href = "login.html";
  }
}
