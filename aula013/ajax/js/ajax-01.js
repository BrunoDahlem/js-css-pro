function carregaDados() {

    var httpRequest = new XMLHttpRequest();

    httpRequest.onload = mostraDados;

    httpRequest.open('GET','produtos.htm',true);
    httpRequest.send(null);
};

function mostraDados() {
    console.log(this.responseText);
    var div = document.createElement('div');
    div.innerHTML = this.responseText;
    document.body.appendChild(div)
};

var btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click',carregaDados)