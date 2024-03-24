
const inputBox= document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


const addTodo = () =>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You must write something!!")
        return false;
    }

    const li = document.createElement('li');
    const p = document.createElement('p');

    p.innerHTML= inputText;
    li.appendChild(p);
    todoList.appendChild(li);

    inputBox.value="";//Empty todo box after adding


    

}
addBtn.addEventListener('click',addTodo);

