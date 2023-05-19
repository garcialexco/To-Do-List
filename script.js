let addButton = document.getElementById('addToDo');
let toDos = document.getElementById('toDos');
let inputField = document.getElementById('toDoInput');

addButton.addEventListener('click', addTodo);

inputField.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        addTodo();
    } else {
        console.log('Hello!');
    }
});

function addTodo() {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDos.appendChild(paragraph);
    inputField.value = '';

    paragraph.addEventListener('click', function(){
        if (paragraph.style.textDecoration === 'line-through') {
            paragraph.style.textDecoration = 'none';
        } else {
            paragraph.style.textDecoration = 'line-through';
        }
    });

    paragraph.addEventListener('dblclick', function(){
        toDos.removeChild(paragraph);
    });
}