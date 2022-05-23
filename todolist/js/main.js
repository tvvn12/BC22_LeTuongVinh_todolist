import Task from "../model/Task.js";
import TaskList from "../model/TaskList.js";
import TaskDone from "../model/TaskDone.js";

let taskList = new TaskList();
let taskDone = new TaskDone();
getLocalStorage();
getlocalStorageTD();

window.getTask = () => {
  let newTask = document.getElementById("newTask").value;
  let task = new Task(newTask);
  return task;
};

document.getElementById("addItem").addEventListener("click", () => {
  let gettask = getTask();
  //   console.log(gettask);
  taskList.addTaskList(gettask);
  render(taskList.arr);
  setLocalStorage();
});

function render(arrName) {
  // console.log(arrName);
  let html = "";

  for (let i in arrName) {
    html += `<li id="${arrName[i].newTask}" class='pl-5'>${arrName[i].newTask} 
    <i onclick="done('${arrName[i].newTask}')" class="fa fa-check-circle circle"></i>
     <i onclick="deleteTask('${arrName[i].newTask}')" class="fa fa-trash-alt trash"></i></li>`;
  }
  document.getElementById("todo").innerHTML = html;
}
function setLocalStorage() {
  let dataToString = JSON.stringify(taskList.arr);
  localStorage.setItem("TASKLIST", dataToString);
}
function getLocalStorage() {
  let data = localStorage.getItem("TASKLIST");
  if (data) {
    let dataJSon = JSON.parse(data);
    taskList.arr = dataJSon;
    render(taskList.arr);
  }
}
window.done = (value) => {
  taskDone.addTaskdone(value);
  setLocalStorageTD();
  renderTaskdone(taskDone.arr);
  taskList.deleteTask(value);
  render(taskList.arr);
  setLocalStorage();
};
function setLocalStorageTD() {
  let dataToString = JSON.stringify(taskDone.arr);
  localStorage.setItem("TASKDONE", dataToString);
}
function getlocalStorageTD() {
  let data = localStorage.getItem("TASKDONE");
  if (data) {
    let dataJSon = JSON.parse(data);
    taskDone.arr = dataJSon;
    renderTaskdone(taskDone.arr);
  }
}
function renderTaskdone(arrName) {
  // console.log(arrName);
  let html = "";

  for (let i in arrName) {
    html += `<li id="${arrName[i]}" class='pl-5'>${arrName[i]} 
    <i  class="fa fa-check-circle circle__done"></i>
     <i onclick="deleteTaskDone('${arrName[i]}')" class="fa fa-trash-alt trash__done"></i>
    </li>`;
  }
  // document.getElementById("completed").style.display = "none";

  document.getElementById("completed").innerHTML = html;
}
window.deleteTaskDone = (task) => {
  taskDone.deleteTaskDone(task);
  renderTaskdone(taskDone.arr);
  setLocalStorageTD();
};
window.deleteTask = (task) => {
  taskList.deleteTask(task);
  render(taskList.arr);
  setLocalStorage();
};

document.getElementById("two").addEventListener("click", () => {
  let sort = taskList.arr.sort((a, b) => {
    // console.log(a);
    // console.log(b);
    let nextTask = a.newTask.toLowerCase();
    let task = b.newTask.toLowerCase();
    if (nextTask > task) {
      return 1; //giữ nguu
    }
    if (nextTask < task) {
      return -1;
    }
    return 1;
  });
  console.log(sort.newTask);
 render(sort);
});
document.getElementById("three").addEventListener("click", () => {
  let sort = taskList.arr.sort((a, b) => {
    // console.log(a);
    // console.log(b);
    let nextTask = a.newTask;
    let task = b.newTask;
    if (nextTask < task) {
      return 1; //giữ nguu
    }
    if (nextTask > task) {
      return -1;
    }
    return 1;
  });
  console.log(sort.newTask);
 render(sort);
});
