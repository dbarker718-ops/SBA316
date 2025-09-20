console.log(document.getElementById("checkbox"));
console.dir(document.getElementById("checkbox"));
console.log(document.getElementById("checkbox").checked);
if (document.getElementById("checkbox").checked == true) {
  console.log("isTrue");
} else {
  console.log("isFalse");
}
const opt = document.createElement("option");
const memberForm2 = document.getElementById("Long_Term_Lease");
const noCheck = document.getElementById("checkbox");
noCheck.addEventListener("click", function (e) {
  console.log(e.target.checked);
  if (e.target.checked) {
  memberForm.appendChild(opt);}
});
const button = document.createElement("button");
button.id = "button";
button.innerHTML = "Submit";
button.type = "submit";
const user = document.createElement("input");
user.id = "UserName";
user.type = "text";
const pass = document.createElement("input");
pass.type = "text";
pass.id = "PassWord";
const memberForm = document.getElementById("Returning_Member");
const yesCheck = document.getElementById("checkbox");
yesCheck.addEventListener("click", function (e) {
  console.log(e.target.checked);
  if (e.target.checked) {
    memberForm.appendChild(user);
    memberForm.appendChild(pass);
    memberForm.appendChild(button);
    // <input id="UserName" type="text" />
    // <input id="Password" type="text" />
  }
  if (!e.target.checked) {
    user.remove();
    pass.remove();
    button.remove();
  }
});
