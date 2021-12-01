export default function hamburgerMenu(panelBtn,panel,menuLink){
const d=document;

d.addEventListener("click",e=>{  //agrego accion al hacer click
    if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){
        d.querySelector(panel).classList.toggle("is-active"); //le pongo activo a paneo o se lo saco
        d.querySelector(panelBtn).classList.toggle("is-active");// le pongo activo al boton para que haga la animacion
    }
    if(e.target.matches(menuLink)){
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");

    }
    })
}
