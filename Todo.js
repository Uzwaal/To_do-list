
let inputBox = document.getElementById("inputBox");
let addButton = document.getElementById("addButton");
let todolist = document.getElementById("todolist");


const addTodo = () =>{
    const inputText = inputBox.value.trim();

    if(inputText.length<=0){
        alert("You must write something");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputText;
    todolist.appendChild(li);
    inputBox.value = "";
}

addButton.addEventListener("click",addTodo);