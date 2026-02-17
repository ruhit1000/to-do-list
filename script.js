// 1. Selection of DOM Elements
const newTaskInput = document.getElementById('taskInput');
const newBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const bothList = document.getElementsByClassName('list');

// Logic for "Add button" handler
newBtn.addEventListener('click', () => {
    const newTask = newTaskInput.value;
    if (newTask.trim().length === 0) {
        alert('Please input your task!');
        newTaskInput.value = ''
        return;
    }
    const newList = document.createElement('li');
    newList.setAttribute('class', 'flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 group hover:bg-slate-100 transition');
    newList.innerHTML = `
                <div class="flex items-center gap-3">
                    <input type="checkbox"
                        class="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer">
                    <span class="text-slate-700">${newTask}</span>
                </div>
                <button
                    class="btn-delete text-slate-400 hover:text-rose-500 font-bold text-xl px-2 opacity-0 group-hover:opacity-100 transition"
                    aria-label="Delete">
                    &times;
                </button>
    `
    taskList.appendChild(newList);
    newTaskInput.value = '';
})

// Logic for "delete button" handler
for (const list of bothList) {
    list.addEventListener('click', (event) =>{
        if (event.target.innerText === '×') {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
    })
}