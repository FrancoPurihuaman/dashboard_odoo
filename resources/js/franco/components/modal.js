/**
 * Libreria para generar ventana modal
 * Author: Franco Purihuaman
 * 
 */


const f_modal = {};

/**
 * Función para generar ventana modal
 * a partir de html existente
 *
 * @param {*} { 
 *              btnShow => String - Id del boton mostrar modal 
 *              modal = String - Id del modal a mostrar, 
 *              backdrop = String ("" | "static") - Especifica si el modal se ocultará al hacer click en el backdrop
*              }
 */
f_modal.generate = ({btnShow = "", modal = "", backdrop = true}) => {
    btnShow = document.getElementById(btnShow);
    modal = document.getElementById(modal);
    let buttonsClose = null;

    if(btnShow){
        if(modal){
            btnShow.addEventListener("click", function(){
                modal.style.display = "block";
            });
            buttonsClose = modal.querySelectorAll("button[data-dismis=close]");
            buttonsClose.forEach(element => {
                element.addEventListener("click", function(){
                    modal.style.display = "none";
                });
            });

            if(backdrop != "static"){
                modal.addEventListener("click", function(e){
                    if(e.target == modal){
                        modal.style.display = "none";
                    }
                    
                });
            }

        }else{
            console.log("modal no encontrado");
        }
        
    }else{
        console.log("btnShow no encontrado");
    }
}

export default f_modal;