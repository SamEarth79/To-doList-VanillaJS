// Selectors
const todoField = document.getElementById("todo-field");
const addButton = document.getElementById("add-btn")
const todoContainer = document.getElementById("todo-container")
const todoList = document.getElementById("todo-list")

// Event Listeners
addButton.addEventListener("click", addTodo)

// Functions
function addTodo(event){
    event.preventDefault();
    
    const divElement = document.createElement("div");
    {
        divElement.classList.add("todo");
    }

    const liElement = document.createElement("li");
    liElement.innerText="yo";
    divElement.append(liElement);

    const actionsDiv = document.createElement("div");

    const doneButton = document.createElement("button");
    doneButton.innerHTML='<i class="fa-solid fa-check"></i>'
    doneButton.classList.add("done-button")
    actionsDiv.append(doneButton)

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-x"></i>'
    deleteButton.classList.add("delete-button")
    actionsDiv.append(deleteButton)

    divElement.append(actionsDiv)

    todoList.append(divElement);
}