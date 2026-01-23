document.addEventListener('DOMContentLoaded', () => {

    // SECCIÓN BOTONES
    const newTaskWindow = document.getElementById("new-task-window"); //
    const taskContainer = document.getElementById('task-container'); //
    const taskInput = document.getElementById('task-input'); //

    const showAllBtn = document.getElementById('show_all');
    const finishedTasksBtn = document.getElementById('finished_tasks');
    const pendingTasksBtn = document.getElementById('pending_tasks');
    const cancelBtn = document.getElementById('cancel');
    const saveBtn = document.getElementById('save');
    const newTaskBtn = document.getElementById('new_task');

    let tasks = [];
    let tasksFilter = "all";


    // BOTON PARA QUE SALGA LA VENTANA EMERGENTE
    newTaskBtn.addEventListener('click', () => {
        newTaskWindow.style.display = 'flex'; //
        taskInput.focus();
    });

    // CERRAR VENTANA EMERGENTE
    const closeWindow = () => {
        newTaskWindow.style.display = "none";
        taskInput.value = "";
    }

    // CONFIGURACIÓN DE LOS BOTONES DE LA VENTANA EMERGENTE
    cancelBtn.addEventListener('click', closeWindow); // Boton cancelar

    window.addEventListener('click', (e) => {
        if (e.target === newTaskWindow) closeWindow();
    });

    saveBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return alert("Por favor, introduce una tarea");

        const newTask = {
            id: Date.now(),
            text: taskText,
            state: "Pendiente..."
        };
        tasks.push(newTask);
        closeWindow();
        renderTasks();
    });

    window.taskStatus = (id) => {
        const index = tasks.findIndex(t => t.id === id);
        if (tasks[index].state === "Pendiente...") {
            tasks[index].state = "Completada";
        } else {
            tasks.splice(index, 1);
        }
        renderTasks();
    };

    function renderTasks() {
        taskContainer.innerHTML = `
            <tr>
                <th>Tasks</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        `;

        const showTasks = tasks.filter(t => {
            if (tasksFilter === "Completada") return t.state === "Completada";
            if (tasksFilter === "Pendiente...") return t.state === "Pendiente...";
            return true;
        });

        showTasks.forEach(task => {
            const row = document.createElement('tr');
            const isPending = task.state === "Pendiente...";

            const buttonClass = isPending ? "pendiente" : "completada";
            const buttonText = isPending ? "Completar" : "Eliminar";

            row.innerHTML = `
                <td>${task.text}</td>
                <td class="text-state">${task.state}</td>
                <td>
                    <button class="editBtn"></button>
                    <button class="actionBtn ${buttonClass}" onclick="window.taskStatus(${task.id})">
                        ${buttonText}
                    </button>
                </td>`;

            taskContainer.appendChild(row);
        });
    }

    showAllBtn.addEventListener('click', () => {
        tasksFilter = "all";
        renderTasks();
    });

    finishedTasksBtn.addEventListener('click', () => {
        tasksFilter = "Completada";
        renderTasks();
    });

    pendingTasksBtn.addEventListener('click', () => {
        tasksFilter = "Pendiente...";
        renderTasks();
    });

    renderTasks();
});