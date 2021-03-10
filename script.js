//Cria Novos Itens na Lista de Tarefas
//Adiciona Evento Click no Botão com a Captura da informação do input
let btnAddItem = document.querySelector('#criar-tarefa');
btnAddItem.addEventListener('click', insertItemsList);

function insertItemsList (){
    let textInput = document.querySelector('#texto-tarefa');
    let localOl = document.querySelector('#lista-tarefas');
    
    if (textInput.value != ' ') {
        let listItems = document.createElement('li');
        listItems.innerHTML = textInput.value;
        localOl.appendChild(listItems);
        textInput.value = ' ';
    }
    
}
    




window.onload = function () {
    
};