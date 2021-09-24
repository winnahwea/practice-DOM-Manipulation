const body = document.body;
//form
var formgroup = document.createElement("FORM");
formgroup.setAttribute("id", "myForm");
document.body.appendChild(formgroup);

//heading
var heading = document.createElement("H1");
heading.setAttribute("id", "h1");
var heading1 = document.createTextNode("Sign In");
heading.appendChild(heading1);
document.getElementById("myForm").appendChild(heading);

//username label
var unLabel = document.createElement("LABEL");
var unTxt = document.createTextNode("Username");
unLabel.setAttribute("for", "username");
unLabel.appendChild(unTxt);
document
  .getElementById("myForm")
  .insertBefore(unLabel, document.getElementById("username"));

//username input
const username = document.createElement("INPUT");
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Username");
document.getElementById("myForm").appendChild(username);

//password label
var pswLabel = document.createElement("LABEL");
var pswTxt = document.createTextNode("Password");
pswLabel.setAttribute("for", "password");
pswLabel.appendChild(pswTxt);
document
  .getElementById("myForm")
  .insertBefore(pswLabel, document.getElementById("password"));

//password input
const password = document.createElement("INPUT");
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Password");
document.getElementById("myForm").appendChild(password);

//button
const btn = document.createElement("button");
btn.className = "btnnew";
btn.appendChild(document.createTextNode("Sign In"));
formgroup.appendChild(btn);

document.getElementsByTagName("body")[0].appendChild(formgroup);

console.log(body);
