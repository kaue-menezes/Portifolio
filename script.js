window.onload = function () {
    document.querySelector(".menu-mobile").addEventListener("click", function () {
        if (document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    });
};


let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let banner = document.getElementById('banner')
let sobreMim = document.getElementById('sobreMim', 'sobreMimDireita','sobreMimEsquerda')
let experiencias = document.getElementById('experiencias')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('ligth')
    body.classList.toggle('ligth')
    banner.classList.toggle('ligth')
    sobreMim.classList.toggle('ligth')
    experiencias.classList.toggle('ligth')
})
