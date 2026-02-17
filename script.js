const newTaskInput = document.getElementById('taskInput');
const newBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

newBtn.addEventListener('click', () => {
    const newTask = newTaskInput.value;
    const newList = document.createElement('li');
    newList.setAttribute('class', 'flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 group hover:bg-slate-100 transition');
    newList.innerHTML = `
                <div class="flex items-center gap-3">
                    <input type="checkbox"
                        class="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer">
                    <span class="text-slate-700">${newTask}</span>
                </div>
                <button
                    class="text-slate-400 hover:text-rose-500 font-bold text-xl px-2 opacity-0 group-hover:opacity-100 transition"
                    aria-label="Delete">
                    &times;
                </button>
    `
    taskList.appendChild(newList);
})