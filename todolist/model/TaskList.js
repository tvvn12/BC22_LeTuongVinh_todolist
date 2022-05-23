class TaskList{
    constructor(){
        this.arr=[];
    }
    addTaskList(task){
        this.arr.push(task);
    }
    deleteTask = (task) => {
        let taskToDel = this.arr;
       let deleteTask = taskToDel.filter(taskDel => taskDel.newTask === task);
      //  console.log(deleteTask);
        taskToDel.splice(deleteTask,1);
      
      };
      
}
export default TaskList