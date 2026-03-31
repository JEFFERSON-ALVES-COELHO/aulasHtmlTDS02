const botaoVermelho = document.getElementById("btnRed");
const botaoVerde = document.getElementById("btnGreen");
const botaoAzul = document.getElementById("btnBlue");
const botaoAmarelo = document.getElementById("btnYellow");
const botaoHide = document.querySelector("#btnHide"); //Pegar por ID -> Utilizar # antes do nome do ID
const titulo = document.querySelector("#titulo"); //Pegar por ID -> Utilizar # antes do nome do ID
const botaoTema = document.querySelector("#btnTema"); 

function alterarCor(cor){
    document.body.style.backgroundColor = cor;

}

botaoVermelho.addEventListener('click', () => alterarCor("red"));
botaoVerde.addEventListener('click', () => alterarCor("green"));
botaoAzul.addEventListener('click', () => alterarCor("blue"));
botaoAmarelo.addEventListener('click', () => alterarCor("yellow"));

botaoHide.addEventListener('click', () => {
    //classList.add -> Adiciona uma classe ao elemento.
    //titulo.classList.add('invisivel');

    //ClassList.toggle -> Se a classe existir, ele remove. Se a classe não existir, ele adiciona.
    titulo.classList.toggle('invisivel');

//if(botoaHide).textContent == "Esconder título") {
  //botaoHide.textContent = "Mostrar título"
//} else {

  //  botaoHide.textContent = "Esconder título"
//}

//if ternário
botaoHide.textContent =
botaoHide.textContent ==
"Esconder título" ? 
"Mostrar título" : 
"Esconder título";


});


botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('temaEscuro')

    if(botaoTema.textContent == "Tema escuro") {
        botaoTema.textContent = "Tema claro"
    } else {
        botaoTema.textContent = "Tema escuro"
    }
});