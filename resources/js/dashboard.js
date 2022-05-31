import navegation from "./franco/components/menu";
import f_modal from "./franco/components/modal";
import f_alert from "./franco/components/alert";

import '../sass/dashboard.scss';

/**
 * Agregando componente menu al objeto window
 *
 * @param {*}
 */
(function (window) {
    const _init = (containerId, menuId, toggleButtonId) => {
        navegation.menu(containerId, menuId, toggleButtonId);
    }
    window.menu = {
        init: _init
    }
})(window);

/**
 * Agregando componente ventana modal al objeto window
 *
 * @param {*}
 */
 (function (window) {
    const _init = (params) => {
        f_modal.generate(params);
    }
    window.f_modal = {
        init: _init
    }
})(window);

/**
 * Agregando componente mensaje de alerta al objeto window
 *
 * @param {*}
 */
 (function (window) {
    const _init = (params) => {
        f_alert.generate(params);
    }
    window.f_alert = {
        init: _init
    }
})(window);


/**
 * Instanciando menus para el dashboard
 * Agregando eventos para los botones del header
 * 
 */
(function (window) {
    // Instanciar los menus
    navegation.menu("menuModules","menuModules","btnToggleMenuModules");
    navegation.menu("menuHeader","menuHeader","btnToggleMenuHeader");



    // Agregar evento a la tarjeta información de usuario del header
    var btnToggleUserHeader = document.getElementById("btnToggleUserHeader");
    btnToggleUserHeader.addEventListener("click", function(event){
        event.stopPropagation();

        var cardUserHeader = document.getElementById("cardUserHeader");
        cardUserHeader.classList.toggle("show_card");

        if(cardUserHeader.classList.contains("show_card")){
            window.addEventListener("click", closeCardUserInfo);
        }

        // Cerrar tarjeta de notificación
        var cardNotificationHeader = document.getElementById("cardNotificationHeader");
        cardNotificationHeader.classList.remove("show_card");

        // Cerrar tarjeta de message del header
        var cardMessageHeader = document.getElementById("cardMessageHeader");
        cardMessageHeader.classList.remove("show_card");
    }); 

    function closeCardUserInfo(e){
        var card = document.getElementById("cardUserHeader");
        if(!card.contains(e.target)){
            card.classList.remove("show_card");
            window.removeEventListener("click", closeCardUserInfo);
        }
    }



    // Agregar evento a la tarjeta notificación del header
    var btnToggleNotificationHeader = document.getElementById("btnToggleNotificationHeader");
    btnToggleNotificationHeader.addEventListener("click", function(event){
        event.stopPropagation();

        var cardNotificationHeader = document.getElementById("cardNotificationHeader");
        cardNotificationHeader.classList.toggle("show_card");

        if(cardNotificationHeader.classList.contains("show_card")){
            window.addEventListener("click", closeCardNotification);
        }

        // Cerrar tarjeta de información de usuario
        var cardUserHeader = document.getElementById("cardUserHeader");
        cardUserHeader.classList.remove("show_card");

        // Cerrar tarjeta de message del header
        var cardMessageHeader = document.getElementById("cardMessageHeader");
        cardMessageHeader.classList.remove("show_card");
    });

    function closeCardNotification(e){
        var card = document.getElementById("cardNotificationHeader");
        if(!card.contains(e.target)){
            card.classList.remove("show_card");
            window.removeEventListener("click", closeCardNotification);
        }
    }



    // Agregar evento a la tarjeta message del header
    var btnToggleMessageHeader = document.getElementById("btnToggleMessageHeader");
    btnToggleMessageHeader.addEventListener("click", function(event){
        event.stopPropagation();

        var cardMessageHeader = document.getElementById("cardMessageHeader");
        cardMessageHeader.classList.toggle("show_card");

        if(cardMessageHeader.classList.contains("show_card")){
            window.addEventListener("click", closeCardMessage);
        }

        // Cerrar tarjeta de información de usuario
        var cardUserHeader = document.getElementById("cardUserHeader");
        cardUserHeader.classList.remove("show_card");

        // Cerrar tarjeta de notificación del header
        var cardNotificationHeader = document.getElementById("cardNotificationHeader");
        cardNotificationHeader.classList.remove("show_card");
    });

    function closeCardMessage(e){
        var card = document.getElementById("cardMessageHeader");
        if(!card.contains(e.target)){
            card.classList.remove("show_card");
            window.removeEventListener("click", closeCardMessage);
        }
    }

})(window);



