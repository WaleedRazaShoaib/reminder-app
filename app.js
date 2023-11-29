// =======================ALL IDS GET =========================

var loginName = document.getElementById("loginName");
var loginPassword = document.getElementById("loginPassword");
var loginform = document.getElementById("loginform");
var signupusername = document.getElementById("signupusername");
var signupPassword = document.getElementById("signupPassword");
var signupform = document.getElementById("signupform");

// =============== WORK FOR SIGN-UP FUNCTION ==================== 

function signupdata(){
if(signupusername.value.trim() === ""){
  Swal.fire({
           icon: "error",
           title: "Oops...",
           text: "Plzz write the name",
         });
}
else{
  namestring = JSON.stringify(signupusername.value);
  console.log(namestring);
  localStorage.setItem("username",namestring)

}
if(signupPassword.value.trim() === ""){
  Swal.fire({
           icon: "error",
           text: "Plzz write the password",
         });
}
else{
  passwordstring = JSON.stringify(signupPassword.value);
  console.log(passwordstring);
  localStorage.setItem("password",passwordstring)

}
if(signupusername.value && signupPassword){
  Swal.fire({
    icon: "success",
    title: "Your Sign up has been saved",
});
signupform.style.display ="none";
loginform.style.display ="block";
loginform.style.display ="flex";
}
 

}
// =============================== WORK FOR LOG-IN DATA ======================== 

function logindata(){
  var userparse = JSON.parse(localStorage.getItem("username"));
  console.log(userparse);
  var passwordparse = JSON.parse(localStorage.getItem("password"));
  console.log(passwordparse);
  if(loginName.value === userparse ){
    alert("verify username")
  }
  else{
    Swal.fire({
      icon: "error",
      text: "Didn't match the Username",
    }); 
  }
  if(loginPassword.value === passwordparse ){
    alert("verify password")
  }
  else{
    Swal.fire({
      icon: "error",
      text: "Didn't match the Password",
    }); 
  }
 if(loginName.value === userparse &&  loginPassword.value === passwordparse){
  Swal.fire({
    icon: "success",
    title: `${loginName.value + "Log In Sucessfully"}` ,
});

setTimeout(function () { window.location.href = "./main.html" }, 1000)

 }


}

// ========================= LOGOUT FUNCTION WORK ===================
function logout(){
  setTimeout(function () {window.location.href = "./index.html"},1000)

}









