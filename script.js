
var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
var index = 0;


document.querySelector("#modal").style.display = "none";

document.querySelector(".la-plus-square").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
  document.querySelector("#user_input").select();
  
});

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