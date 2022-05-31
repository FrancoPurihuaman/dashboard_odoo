/**
 * Libreria para generar un mensaje de alerta
 * Author: Franco Purihuaman
 * 
 */

 const f_alert = {};

/**
 * Función para generar un mensaje de alerta
 *
 * @param {*} { 
 *              container => String - Id del contenedor donde se agregará el mensaje de alerta (default body),
 *              type => String - Especifica el tipo de mensaje de alerta (success, danger, warning, info, etc),
 *              message => String - Mensje a mostrar,
 *              details => array - Detalles a mostrar como item de lista,
 *              autoremove => boolean - Especifica si el mensaje de alerta debe eliminarse automaticamente
 *             }
 */
f_alert.generate = ({
    container = "",
    type      = "info",
    message   = "",
    details   = [],
    autoremove = true}) =>
{
    const alertInner = document.createElement("div");
    let mainContainer = document.getElementById(container);
    if (!mainContainer) {[mainContainer] = document.getElementsByTagName("body");}
    let alertContainer = mainContainer.querySelector("div.f_alert-container");

    alertInner.setAttribute("class", `f_alert ${type}`);
    alertInner.innerHTML = message;

    // Agregando boton close a la alerta
    let buttonClose = document.createElement('button');
    buttonClose.setAttribute('class', 'f_alert__close');
    buttonClose.innerHTML = "&#x2715";
    buttonClose.addEventListener('click', function(){
        alertContainer.removeChild(buttonClose.parentNode);
    });
    // Eliminar alerta despues de "n" segundos
    if(autoremove === true){
        setTimeout(function(){
        alertContainer.removeChild(buttonClose.parentNode);
        },5000);
    }
    alertInner.appendChild(buttonClose);

    // Agregando item de lista al mensaje
    if(details){
        let ul = document.createElement('ul');

        details.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element;
        ul.appendChild(li);
        });

        alertInner.appendChild(ul);
    }

    if (!alertContainer) {
        alertContainer = document.createElement("div");
        alertContainer.setAttribute("class", "f_alert-container");
        mainContainer.insertAdjacentElement("afterbegin", alertContainer);
    }

    alertContainer.appendChild(alertInner);

}

export default f_alert;