const form = document.getElementById("tasks__form");
form.addEventListener("submit", addingTask, true);


function addingTask (e) {
    e.preventDefault();
    let input = document.getElementById("task__input");
    let text = input.value.trim();
    if (text) {
        input.value = "";

        let task = document.createElement("div");
        task.classList.add("task");

        let taskTitle = document.createElement("div");
        taskTitle.classList.add("task__title");
        taskTitle.textContent = text;
        task.append(taskTitle);

        let taskRemove = document.createElement("a");
        taskRemove.href = "#";
        taskRemove.classList.add("task__remove");
        taskRemove.innerHTML = "&times;";
        task.append(taskRemove);

        taskRemove.addEventListener("click", deletingTask, true);

        const tasksList = document.getElementById("tasks__list");
        tasksList.append(task);
    };
};

function deletingTask (e) {
    e.preventDefault();
    e.target.closest(".task").remove();
};