//Cria Novos Itens na Lista de Tarefas

//Adiciona Evento Click no Botão com a Captura da informação do input
let btnAddItem = document.querySelector('#criar-tarefa');
btnAddItem.addEventListener('click', insertItemsList);

function insertItemsList (){
    let textInput = document.querySelector('#texto-tarefa');
    let localOl = document.querySelector('#lista-tarefas');
    
    if (textInput.value != '') {
        let listItems = document.createElement('li');
        listItems.innerHTML = textInput.value;
        localOl.appendChild(listItems);
        textInput.value = '';
    }   
}

//Adiciona o Background cinza no item clicado

//Adiciona a classe selected no item clicado e retira dos demais
function removeAddClassSelected (){
    let itemClass = document.querySelectorAll("li");
    for (let i = 0; i < colorClass.length; i += 1){
        colorClass[i].addEventListener("click",removeAddSelected);
     }
    function removeAddSelected(){
        for (let i = 0; i < colorClass.length; i += 1){
            colorClass[i].classList.remove("selected");
        }
        this.classList.add("selected");
    }
 }
    




window.onload = function () {
    
};