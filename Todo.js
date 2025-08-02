
let inputBox = document.getElementById("inputBox");
let addButton = document.getElementById("addButton");
let todolist = document.getElementById("todolist");

let editTodo = null;

const addTodo = () =>{
    const inputText = inputBox.value.trim();

    if(inputText.length<=0){
        alert("You must write something");
        return;
    }

    //adding functionality for edit button
    if(addButton.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addButton.value = "Add";
        inputBox.value = "";
        editTodo = null;
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = inputText;
    li.appendChild(span);

     //Creating Edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    //Creating Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todolist.appendChild(li);
    inputBox.value = "";
}

const updateTodo = (e)=>{
    if(e.target.innerHTML === "Delete"){
        todolist.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addButton.value="Edit";
        editTodo = e;
    }
}

addButton.addEventListener("click",addTodo);
todolist.addEventListener("click", updateTodo); 