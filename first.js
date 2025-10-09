const but = document.getElementById("add")
but.addEventListener("click", addTodo)

function addTodo(){
    const text = document.getElementById("input").value
    const todo = document.createElement("div")
    todo.classList.add("todo-element")
    todo.innerHTML= `
    <div>
        <div>
            <button type="checkbox"></button>
        </div>
        <div>
            <label>${text}</label>
        </div>
        <div>
            <button type="checkbox"></button>
        </div>
    </div>
    `
    const listDiv = document.getElementById("list-div");
    listDiv.appendChild(todo);
}