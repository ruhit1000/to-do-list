// all selector
const taskInputElement = document.getElementById('taskInput');
const addNewTaskBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addNewTaskBtn.addEventListener('click', () => {
    const newTask = taskInputElement.value;
    taskInputElement.value = '';
    addNewTask(newTask);
});

taskList.addEventListener('click', (event) => {
    const checkbox = event.target.classList.contains('checkbox');
    const targetedElement = event.target;
    if (checkbox) {
        checkTick(targetedElement)
    }
    if (targetedElement.innerText === '×') {
        targetedElement.closest('li').remove();
    }
});