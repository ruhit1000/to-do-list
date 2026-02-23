function addNewTask(task) {
    const list = document.createElement('li');
    list.className = "flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 group hover:bg-slate-100 transition"
    list.innerHTML = `
    <div class="flex items-center gap-3">
        <input type="checkbox"
            class="checkbox w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer">
        <span class="text-slate-700">${task}</span>
    </div>
    <button
        class="btn-delete text-slate-400 hover:text-rose-500 font-bold text-xl px-2 opacity-0 group-hover:opacity-100 transition"
        aria-label="Delete">
        &times;
    </button>
    `
    taskList.prepend(list);
};

function checkTick(checkboxElement) {
    const listElement = checkboxElement.parentElement.parentElement;
    const taskElement = checkboxElement.nextElementSibling;
    if (checkboxElement.checked) {
        listElement.classList.add('opacity-60')
        taskElement.className = ''
        taskElement.classList.add('text-slate-500', 'line-through')
    } else {
        listElement.classList.remove('opacity-60');
        taskElement.className = ''
        taskElement.classList.add('text-slate-700')
    }
}