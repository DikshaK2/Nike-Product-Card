let container = document.querySelector(".container");
let color1 = document.querySelector(".blue");
let color2 = document.querySelector(".red");
let cardTop = document.querySelector(".card-top");
let price = document.querySelector(".price");
let shoe1 = document.querySelector(".shoe-1");
let shoe2 = document.querySelector(".shoe-2");
let boxes = document.querySelectorAll(".box");

color1.addEventListener("click",()=>{
    cardTop.style.backgroundColor = "#ff9b06";
    price.style.backgroundColor = "#085f98";
    shoe1.style.transform = "translate(0rem,0)"+ "rotate(0deg)";
    shoe2.style.transform = "translate(0rem,0)"+ "rotate(0deg)";

})
color2.addEventListener("click",()=>{
    cardTop.style.backgroundColor = "red"; 
    price.style.backgroundColor = "red";
    shoe1.style.transform = "translate(-50rem,0)"+ "rotate(45deg)";
    shoe2.style.transform = "translate(-40rem,0)"+ "rotate(-45deg)";
});

for(let box of boxes){
    box.addEventListener("click",()=>{
        
        //   box.style.backgroundColor = "rgb(53, 181, 138)";
        //   box.style.color= "white";
    })
}
