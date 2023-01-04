import FormTaskView from "./form-task-view.js";
import Publisher from "../publisher.js";
import { FormTaskModel } from "./form-task-model.js";

export default class FormTaskController{
    constructor(){
        this.view = new FormTaskView(this.handleSaveTask);
        this.model = new FormTaskModel();
    }

    handleSaveTask = _ => {
        this.view.closeOffValidation();
        const data = this.view.getInputsData();
        const isValidData = this.model.checkData(data);
        if(isValidData.total){
            this.view.closeModal();
            Publisher.notify('ON_CREATE_NEW_TASK', data);
        }else{
            this.view.showInValid(isValidData);
        }
        console.log(data, isValidData);        
    }   
}