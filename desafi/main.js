
const cores = document.querySelectorAll('[data-tintas]');
document.querySelector('button').onclick = mostraTintas;
function mostraTintas(lista){
    cores.forEach((cor) => {
        document.querySelector('.lista').innerHTML.fontcolor('transparent')
    })
}