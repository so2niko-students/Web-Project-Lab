import template from "./form-task-template.js";

export default class FormTaskView{
    DOM_MODAL_CONTAINER = document.querySelector('.modal-container');

    constructor(callback){
        this.DOM_MODAL_CONTAINER.insertAdjacentHTML('afterbegin', template);
        this.DOM_MODAL_BTN_SAVE = this.DOM_MODAL_CONTAINER.querySelector('.btn-task-save');

        this.DOM_MODAL_BTN_SAVE.addEventListener('click', callback);

        this.DOM_MODAL_INPUTS = [...this.DOM_MODAL_CONTAINER.querySelectorAll('.input-task')];
    }

    getInputsData = _ => {
        return this.DOM_MODAL_INPUTS.reduce((acc, el) => {
            acc[el.dataset.task] = el.value;
            return acc;
        }, {});
    } 


}