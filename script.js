let botoesTenis = document.querySelectorAll(".botaoTenis");
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");

let coresBg = ["vermelho", "cinza", "verde", "marrom"];


botoesTenis.forEach((botao, index) => {
    botao.onclick = ()=> {
        let slideAtivo = document.querySelector(".slide.active");
        slideAtivo.classList.remove("active");
        slides[index].classList.add("active")

        let botaoTenisAtivo = document.querySelector(".botaoTenis.active");
        botaoTenisAtivo.classList.remove("active");
        botoesTenis[index].classList.add("active");


        coresBg.forEach(cor => {
            slider.classList.remove(cor)
        })
        slider.classList.add(coresBg[index]);
    }
})