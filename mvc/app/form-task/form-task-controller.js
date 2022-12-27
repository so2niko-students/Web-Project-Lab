import FormTaskView from "./form-task-view.js";
import Publisher from "../publisher.js";

export default class FormTaskController{
    constructor(){
        this.view = new FormTaskView(this.handleSaveTask);
    }

    handleSaveTask = _ => {
        const data = this.view.getInputsData();
        Publisher.notify('ON_CREATE_NEW_TASK', data);
    }   
}