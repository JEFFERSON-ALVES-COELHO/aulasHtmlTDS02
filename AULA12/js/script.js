const url = 'https://viacep.com.br/ws/02726010/json/';
//fetch(url).then(response => response.json()).then(dados => console.log(dados))

//async function buscarCep() {
//const response = await fetch(url);
//const dados = await response.json();
//console.log(dados);

//}
   

const campoCep = document.querySelector('#cep');
const botaoBuscar = document.querySelector('#btnBuscar');
const campoLogradouro = document.querySelector('#logradouro');
const campoCidade = document.querySelector('#cidade');
const campoEstado = document.querySelector('#estado');
const campoBairro = document.querySelector('#bairro');

async function buscarCep() {

    const cepDigitado = campoCep.value;

const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;


const response = await fetch(url);
const dados = await response.json();
console.log(dados);


campoLogradouro.value = dados.logradouro;
campoCidade.value = dados.localidade;
campoEstado.value = dados.estado;
campoBairro.value = dados.bairro;

}

botaoBuscar.addEventListener('click', buscarCep);


