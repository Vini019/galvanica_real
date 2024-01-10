document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#duvida");
    const modal = document.querySelector(".dialog");
    const buttonclose = document.querySelector("#close");

    button.onclick = function() {
        modal.showModal();
    };

    buttonclose.onclick = function() {
        modal.close();
    };
    toggleModal();
});



        const hamburguer = document.getElementById("hamburguer");
        const navbar = document.querySelector(".navbar");
    
        hamburguer.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    
        const menuItems = document.querySelectorAll(".menu-list a");
    
        menuItems.forEach(function (item) {
            item.addEventListener("click", function () {
                navbar.classList.remove("active");
            });
        });
  
    