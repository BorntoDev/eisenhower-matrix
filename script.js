function addTask(quadrantId) {
  const inputEl = document.getElementById(`${quadrantId}-input`);
  const taskText = inputEl.value.trim();

  if (taskText) {
    const taskListEl = document.getElementById(quadrantId);
    const newTaskLi = document.createElement("li");
    newTaskLi.textContent = taskText;
    newTaskLi.addEventListener("click", removeTask);
    taskListEl.appendChild(newTaskLi);
    inputEl.value = "";

    const taskData = { quadrantId, taskText };
    writeDataToFile(taskData);
  }
}

function removeTask(event) {
  const taskLi = event.target;
  taskLi.parentNode.removeChild(taskLi);
  const taskData = readDataFromFile();
  const updatedTaskData = taskData.filter(
    (task) => task.taskText !== taskLi.textContent
  );
  writeDataToFile(updatedTaskData);
}
