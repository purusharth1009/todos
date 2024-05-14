document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");

    // Fetch todos from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            // Iterate through todos and append to the DOM
            data.forEach(todo => {
                const todoItem = document.createElement("div");
                todoItem.classList.add("todo-item");
                todoItem.innerHTML = `
                    <input type="checkbox" ${todo.completed ? "checked" : ""}>
                    <span>${todo.title}</span>
                `;
                todoList.appendChild(todoItem);
            });
        })
        .catch(error => {
            console.error("Error fetching todos:", error);
        });
});

