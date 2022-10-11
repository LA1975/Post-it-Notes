
var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
var index = 0;

  
  document.querySelector("#modalLogin").style.display = "none";

//   document.querySelector(".la-plus-square").addEventListener("click", () => {
//   document.querySelector("#modal").style.display = "block";
//   document.querySelector("#user_input").select();
  
// });

document.querySelector("#hide").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});

document.querySelector("#tick").addEventListener("click", () => {
   
    let text = document.querySelector("#user_input");
    createStickyNote(text.value);
    text.value = '';
    document.querySelector("#modal").style.display = "none";
  
});



function createStickyNote(text){
  let note = document.createElement("div");
  let details = document.createElement("div");
  let noteText = document.createElement("h1");
  let trash = document.createElement("i");
  let edit = document.createElement("i");
  let icons = document.createElement('div');


  note.className = "note";
  details.className = "details";
  noteText.textContent = text;
  text.className="text";
  trash.className = "las la-trash";
  edit.className = "las la-edit";
  icons.className = 'icons';

  details.appendChild(noteText);
  note.appendChild(details);
  note.appendChild(icons);
  icons.appendChild(edit);
  icons.appendChild(trash);
  

  
  if(index > random_colors.length - 1)
    index = 0;

  note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);
  
  note.addEventListener("dblclick", () => {
  note.remove();
  })
  trash.addEventListener("click", () =>{
    note.remove();
  })
edit.addEventListener("click",()=>{
  editStickyNote(text)
})
  document.querySelector("#all_notes").appendChild(note);
}

function editStickyNote(text){
  document.querySelector("#modal").style.display = "block";
  console.log(text);
  document.querySelector("#user_input").innerHTML=text;
  document.querySelector("#user_input").select();
}

//hamburger to cross animation navigation
const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const firstBar = document.getElementById('bar-first');
const secondBar = document.getElementById('bar-second');
const thirdBar = document.getElementById('bar-third');
let menuOn=false;

function toggleButton(){
  navList.classList.toggle('show');
    if(menuOn){
    firstBar.style.transform = 'rotate(0deg)';
    firstBar.style.top = '0px';
    secondBar.style.opacity =1;
    thirdBar.style.transform = 'rotate(0deg)';
    thirdBar.style.bottom = '0px';
    menuOn=false;
    
  }else{
    firstBar.style.transform = 'rotate(45deg)';
    firstBar.style.top = '8px';
    secondBar.style.opacity =0;
    thirdBar.style.transform = 'rotate(-45deg)';
    thirdBar.style.bottom = '8px';
    menuOn=true;
  }
 }

hamburgerBtn.addEventListener('click', toggleButton);

// login and signup forms
const forms = document.querySelector(".forms");
const showHidePassword = document.querySelectorAll(".la-eye-slash");
const links = document.querySelectorAll(".link");

// for testing
// console.log(forms,showHidePassword,links);  
showHidePassword.forEach(eyeIcon =>{
  eyeIcon.addEventListener("click", ()=>{
    let passwordFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    // for testing
    // console.log(passwordFields);

    passwordFields.forEach(password =>{
      if (password.type === "password"){
        password.type ="text";
        eyeIcon.classList.replace("la-eye-slash" , "la-eye");
        return;
      }
      password.type ="password";
      eyeIcon.classList.replace("la-eye", "la-eye-slash" );
    })
  });
});

links.forEach(link =>{
  link.addEventListener("click", e=>{
    e.preventDefault(); //prevents the formsubmit
    forms.classList.toggle("show-signup");
  })
})
//Login modal
document.querySelector(".la-sign-in-alt").addEventListener("click", () => {
  let modalLogin = document.querySelector("#modalLogin");
  let modalDisplay = modalLogin.style.display;
 
    if (modalDisplay === "block"){
      document.querySelector("#modalLogin").style.display = "none";
    }
    if (modalDisplay === "none"){
      document.querySelector("#modalLogin").style.display = "block";
    }
   
  });


 