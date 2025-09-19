console.log(document.getElementById("checkbox"));
console.dir(document.getElementById("checkbox"));
console.log(document.getElementById("checkbox").checked);
if (document.getElementById("checkbox").checked == true) {
  console.log("isTrue");
} else {
  console.log("isFalse");
}
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
    // <input id="UserName" type="text" />
    // <input id="Password" type="text" />
  }
  if (!e.target.checked) {
    user.remove();
    pass.remove();
  }
});
