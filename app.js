const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

updateBody();

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

function updateBody(){
     if(inputEl.checked){
          bodyEl.style.background = "black";
     }else{
          bodyEl.style.background = "white";
     }
} 

inputEl.addEventListener("click",()=>{
     updateBody();
     updateLocalStorage();
});

function updateLocalStorage(){
     localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}