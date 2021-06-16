var lista = document.getElementById('lista');

function carregaDados(arquivo) {

    var httpRequest = new XMLHttpRequest();

    httpRequest.onloadstart = mostraLoader;
    httpRequest.onload = mostraDados;
    

    httpRequest.open('GET',arquivo,true);
    httpRequest.send(null);
};

function mostraLoader() {
    lista.innerHTML = 'carregendo...';
}

function mostraDados() {
    lista.innerHTML = this.responseText;
};

var btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click',function(){
    carregaDados('produtos.htm');
});
var btnCarros = document.getElementById('btn-carros');
btnCarros.addEventListener('click',function(){
    carregaDados('carros.htm');
});