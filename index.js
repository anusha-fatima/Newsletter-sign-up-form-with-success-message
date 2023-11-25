const form = document.querySelector("form");
const slide_1 = document.querySelector(".slide_1");
const slide_2 = document.querySelector(".slide_2");
const error_email = document.getElementById("error_email");
form.addEventListener("submit", (e)=>{  // clicked event.
  e.preventDefault();
  slide_1.classList.add("hide");
  slide_2.classList.remove('hide');
});
//fro error message.
function errorCheck(){
  if((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    error_email.innerHTML = "valid email required";
    return false;
  }
  error_email.innerHTML = " ";
  return true;
}