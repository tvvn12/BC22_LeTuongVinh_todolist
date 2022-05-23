class TaskDone {
  constructor() {
    this.arr = [];
  }
  addTaskdone(taskDone) {
    this.arr.push(taskDone);
    // console.log(this.arr);
  }
  deleteTaskDone(taskDone){
    let taskToDel = this.arr;
    let deleteTask = taskToDel.filter(taskDel => taskDel === taskDone);
   //  console.log(deleteTask);
     taskToDel.splice(deleteTask,1);

  }
}
export default TaskDone;
