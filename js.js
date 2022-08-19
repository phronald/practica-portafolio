/*const range = document.querySelector('#opacidad');

const range2=document.querySelector("#contraste")
const valor =document.querySelector(".valor1");
const range3=document.querySelector("#contraste")
const color=document.querySelector('input[type="color"]');
const item=document.querySelector(".item");

color.addEventListener('input',(e)=>{
   item.style.background=hexToRgb(e.target.value);
localStorage.setItem("rgba",hexToRgb(e.target.value));
})

function hexToRgb(hex) {
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   if(result){
       const r= parseInt(result[1], 16);
       const g= parseInt(result[2], 16);
       const b= parseInt(result[3], 16);
       return `rgba(${r},${g},${b},.99)`
   } 
   return null;
 }
 range.addEventListener('input', (e)=>{
   let rgba = localStorage.getItem("rgba");
   let splite=rgba.split(',');
   splite.pop();
   splite.push(` ${e.target.value/100}`)
   rgba=splite.join(',')
   item.style["backgroud-color"]=rgba 
   localStorage.setItem("rgba",rgba);
   console.log(item)
}
);
range2.addEventListener("input",(e)=>{
   item.style["background-filter"]=`range2(${e.target.value}px)`;
   console.log(range2)
})
range3.addEventListener("input",(e)=>{
   item.style["background-filter"]=`range3(${e.target.value}%)`;
})
*/


const range1=document.querySelector("#difuminar")
const saturacion=document.querySelector("#saturar")
const  caja=document.querySelector(".item")
const color=document.querySelector(".color")

color.addEventListener('input',(e) => {
   caja.style.background=e.target.value;
})

function createFilter(){
   rgb = `blur(${range1.value}px) saturate(${saturacion.value}%)`
}


range1.addEventListener("input",createFilter =>{
 caja.style.filter=`blur(createFilter.target.value;)`
caja.innerHTML=createFilter.target.value;
console.log(range1)
})