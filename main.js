let counter = 0;
const taskList = document.querySelector("ul");

document.querySelector("form").addEventListener("submit", function (ev) {
    document.querySelector(".errorMessage").classList.remove("active");
    ev.preventDefault();
    const inputText = document.querySelector("input").value;
    if (inputText.length == 0) {
        setTimeout(() => {
            document.querySelector(".errorMessage").classList.add("active");
        }, 20)
        return;
    }
    const newTask = document.createElement("li");
    newTask.classList.add("todo-task");
    const thrashCan = document.createElement("i");
    thrashCan.className = "material-symbols-rounded";
    thrashCan.textContent = "delete";
    thrashCan.classList.add("thrashCan");
    newTask.appendChild(document.createTextNode(inputText));
    thrashCan.onclick = function () {
        newTask.parentNode.removeChild(newTask);
    }
    newTask.appendChild(thrashCan);
    taskList.appendChild(newTask);
    document.querySelector("input").value = "";
});

taskList.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        if (ev.target.classList.toggle("checked")) {
            ++counter;
        } else {
            --counter;
        }
        document.querySelector("p").innerText = counter + " completed";

    }
}, false);


