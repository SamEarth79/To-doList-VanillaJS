// Selectors
const todoField = document.getElementById("todo-field");
const addButton = document.getElementById("add-btn");
const todoContainer = document.getElementById("todo-container");
const todoList = document.getElementById("todo-list");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event){
    event.preventDefault();

    if(todoField.value==="")
    {
        alert("Please fill the field");
        return;
    }

    addStorage(todoField.value);
    
    const divElement = document.createElement("div");
    {
        divElement.classList.add("todo");
    }

    const liElement = document.createElement("li");
    liElement.innerText=todoField.value;
    divElement.append(liElement);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions-div")

    const doneButton = document.createElement("button");
    doneButton.innerHTML='<i class="fa-solid fa-check"></i>';
    doneButton.classList.add("done-button");
    doneButton.style.color="rgb(232, 121, 249)";
    actionsDiv.append(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-x"></i>';
    deleteButton.classList.add("delete-button");
    deleteButton.style.color="rgb(232, 121, 249)";
    actionsDiv.append(deleteButton);

    divElement.append(actionsDiv);

    todoList.append(divElement);
    todoField.value="";
}

function deleteCheck(event)
{
    event.preventDefault();
    // alert("Yo")
    const item=event.target;
    // console.log(item);
    // console.log(item.classList)
    deleteStorage(item.parentElement.parentElement.parentElement);

    // Delete
    if(item.classList[0]=="delete-button" )
    {
        const todo = item.parentElement.parentElement;
        todo.classList.add("fall");
        setTimeout(function() {
            todo.remove();
        }, 500);
    }

    else if(item.classList[1]=="fa-x")
    {
        const todo = item.parentElement.parentElement.parentElement;
        todo.classList.add("fall");
        setTimeout(function() {
            todo.remove();
        }, 500);
    }

    else if(item.classList[0]=="done-button")
    {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("finished");
    }

    else if(item.classList[1]=="fa-check")
    {
        const todo = item.parentElement.parentElement.parentElement;
        todo.classList.toggle("finished");
    }
}

function addStorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null)
        todos=[];
    else
        todos=JSON.parse(localStorage.getItem("todos"));

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    
}

function deleteStorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null)
        todos=[];
    else
        todos=JSON.parse(localStorage.getItem("todos"));

    let todotext = (todo.children[0].innerText);
    todos.splice(todos.indexOf(todotext), 1);

    localStorage.setItem("todos", JSON.stringify(todos));

}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos")===null)
        todos=[];
    else
        todos=JSON.parse(localStorage.getItem("todos"));

    todos.forEach(todo => {
    const divElement = document.createElement("div");
    {
        divElement.classList.add("todo");
    }

    const liElement = document.createElement("li");
    liElement.innerText=todo;
    divElement.append(liElement);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions-div")

    const doneButton = document.createElement("button");
    doneButton.innerHTML='<i class="fa-solid fa-check"></i>';
    doneButton.classList.add("done-button");
    doneButton.style.color="rgb(232, 121, 249)";
    actionsDiv.append(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-x"></i>';
    deleteButton.classList.add("delete-button");
    deleteButton.style.color="rgb(232, 121, 249)";
    actionsDiv.append(deleteButton);

    divElement.append(actionsDiv);

    todoList.append(divElement);
    });

}