const menu=document.querySelector(".menu");
const menunav=document.querySelector(".menunav");
const luna=document.querySelector(".luna");
const carrito=document.querySelector(".carrito");
const modo=document.querySelector(".modo");
const comprar=document.querySelector(".comprar");
const add1=document.querySelector(".add1");
const add2=document.querySelector(".add2");
const add3=document.querySelector(".add3");
const add4=document.querySelector(".add4");
const productos=document.querySelector(".productos");
const cancel=document.querySelector(".cancel");
const button=document.querySelectorAll("button");
const cajas=document.querySelector("addcaja");
let container=document.querySelector(".addmore")






const crearCaja1 =()=>{ 
    return `<div class="addcaja"> 
<img src="imagenes/descarga.jpg" alt="">
<div class="more">
    <p class="value2">0 </p> 
    <img src="iconos/menos-que.png" alt="">
    <img src="iconos/mas-grande-que.png" alt="">
</div>
<div class="cajabutton ">
<button class="delete">eliminar</button>
<button>comprar</button>
</div> 
</div>`}



const crearCaja2 =()=>{ 
    return `<div class="addcaja"> 
<img src="imagenes/hola.jpg" alt="">
<div class="more">
    <p class="value2">0 </p> 
    <img src="iconos/menos-que.png" alt="">
    <img src="iconos/mas-grande-que.png" alt="">
</div>
<div class="cajabutton ">
<button class="delete">eliminar</button>
<button>comprar</button>
</div> 
</div>`}



const crearCaja3 =()=>{ 
    return `<div class="addcaja"> 
<img src="imagenes/sombrerode paja.jpg" alt="">
<div class="more">
    <p class="value2">0 </p> 
    <img src="iconos/menos-que.png" alt="">
    <img src="iconos/mas-grande-que.png" alt="">
</div>
<div class="cajabutton ">
<button class="delete">eliminar</button>
<button>comprar</button>
</div> 
</div>`}


const crearCaja4 =()=>{ 
    return `<div class="addcaja"> 
<img src="imagenes/descarga.jpg" alt="">
<div class="more">
    <p class="value2">0 </p> 
    <img src="iconos/menos-que.png" alt="">
    <img src="iconos/mas-grande-que.png" alt="">
</div>
<div class="cajabutton ">
<button class="delete">eliminar</button>
<button>comprar</button>
</div> 
</div>`}



add2.addEventListener('click',()=>{
    container.innerHTML= crearCaja2();
    
    })

add3.addEventListener('click',()=>{
    container.innerHTML= crearCaja3();
    })


add4.addEventListener('click',()=>{
container.innerHTML= crearCaja4();

})

const agregarcajas=[    
    `${crearCaja1}`,
    `${crearCaja2}`,
    `${crearCaja3}`,
    `${crearCaja4}`
];

container =[]
add1.addEventListener('click',()=>{
return container.push(agregarcajas[0]);

    })



;
  


cancel.addEventListener("click",()=>{
    productos.style.display="none";
})
carrito.addEventListener("click",()=>{
productos.style.display="block";
})



