// Instanciar los menus

navegation.menu("menuLeft","menuLeft","btnToggleMenuLeft");
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
});

function closeCardNotification(e){
    var card = document.getElementById("cardNotificationHeader");
    if(!card.contains(e.target)){
        card.classList.remove("show_card");
        window.removeEventListener("click", closeCardNotification);
    }
}