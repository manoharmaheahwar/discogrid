let mainDiv = document.querySelector(".mainDiv");
let noOfColors=700

for (let index = 0; index < noOfColors; index++){
   let  box = document.createElement("div");
    box.classList.add("box");
    box.style.width = "4rem";
    box.style.height = "4rem"
    box.style.border = "1px solid black"
    mainDiv.appendChild(box)
}

let className=document.querySelectorAll(".box");

function random(){
    return Math.floor(Math.random()*500);
}

mainDiv.addEventListener('mouseover',()=>{
    for(let i=0;i<className.length;i++ ){
        const randomColor=`rgb(${random(255)},${random(255)},${random(255)})`
        className[i].textContent=random();
        className[i].style.background=randomColor;
    }
})
