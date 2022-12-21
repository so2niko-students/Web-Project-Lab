import FormTaskView from "./form-task-view.js";

export default class FormTaskController{
    constructor(handleCreateTask){
        this.view = new FormTaskView(this.handleSaveTask);
        this.handleCreateTask = handleCreateTask;
    }

    handleSaveTask = _ => {
        const data = this.view.getInputsData();
        this.handleCreateTask(data);
    }   
}