document.addEventListener("DOMContentLoaded", () => {
    const clients = ["Айгерим", "Ернар", "Сабина"];
    const tasks = ["Позвонить клиенту", "Отправить тур-предложение", "Подготовить отчет"];

    const clientList = document.getElementById("client-list");
    const taskList = document.getElementById("task-list");

    clients.forEach(client => {
        const li = document.createElement("li");
        li.textContent = client;
        clientList.appendChild(li);
    });

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
});