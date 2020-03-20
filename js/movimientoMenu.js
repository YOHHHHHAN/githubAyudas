function moverMenu() {
    document.getElementById("menu").classList.toggle('activarMenu');
}

let btnItems = document.querySelectorAll(".iten .btn-iten");
for (let i = 0; i < btnItems.length; i++) {
    btnItems[i].addEventListener("click", function (e) {

        let btn = e.target;
        if (btn.className == "btn-inten active") {
            removerClase();
        } else {
            removerClase();
            btn.classList.add("active");
        }
    })
}

function removerClase() {
    for (let i = 0; i < btnItems.length; i++) {
        btnItems[i].classList.remove("active")
    }
}