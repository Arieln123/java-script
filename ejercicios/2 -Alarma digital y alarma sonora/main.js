import hamburgerMenu from "../menuHamburguesa.js"
import {digitalClock,alarm} from "./reloj.js";
const d=document;


d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj"); //paso los 3 parametros para que nade el reloj
    alarm("assets/Bioalarma.mp3","#activar-alarma","#desactivar-alarma");
});
