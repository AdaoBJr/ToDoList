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
function removeAddClassSelected (event){
    let itemClass = document.querySelector('.selected');

    if (!itemClass){
        event.target.classList.add('selected');
        event.target.style.cursor = 'pointer';
    } else {
        itemClass.classList.remove('selected');
        event.target.classList.add('selected');
        event.target.style.cursor = 'pointer';
    }
//Podemos fazer esse mesmo algoritmo de cima de uma forma mais didática aberto em passos: (ainda incompleto)
    // let taskList = document.querySelector('#lista-tarefas');
    // let tasks = document.querySelectorAll('li');
    // let qtidLI = taskList.childNodes.length; // definição da quantidade de itens na lista
    // for (let i = 0; i < qtidLI; i += 1){
    //    tasks[i].classList.remove('selected');
    // }
    //     if (event.target.tagName == 'li'){
    //         event.target.classList.add('selected')
    //     }   
 }
 function mouseOver (event){  // Adiciona a propriedade mouseOver (ponteiro indicador do mouse) ao passar o mouse sobre a tarefa
    let itemClass = document.querySelector('.selected');
    if (!itemClass){
        event.target.style.cursor = 'pointer';
    } else {
        event.target.style.cursor = 'pointer';
    }
 } 
function taskSelected () {
    let taskList = document.querySelector('#lista-tarefas');
    taskList.addEventListener('click', removeAddClassSelected);
    taskList.addEventListener('mouseover', mouseOver);
}

// Adiciona uma linha riscando o(s) item(s) já finalizado
function taskCompleted (){
    let taskList = document.querySelector('#lista-tarefas');
    taskList.addEventListener('dblclick', elementCompleted);
    function elementCompleted (event){
        event.target.classList.toggle('completed'); // Resuloção Baseada no conteúdo do site https://www.w3schools.com/howto/howto_js_toggle_class.asp
    }
}

window.onload = function () {
    taskSelected();
    taskCompleted();
};