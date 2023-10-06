// Array para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask() {
    const newTaskText = document.getElementById("newTask").value;
    if (newTaskText !== "") {
        const task = {
            text: newTaskText,
            completed: false
        };
        tasks.push(task);
        updateTasks();
        document.getElementById("newTask").value = "";
    }
}

// Función para actualizar la lista de tareas en el HTML
function updateTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));
        
        li.appendChild(checkbox);
        taskList.appendChild(li);
    });
}

// Función para marcar una tarea como completada o incompleta
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

updateTasks();
