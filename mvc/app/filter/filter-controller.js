import Publisher from "../publisher.js";
import FilterModel from "./filter-model.js";
import FilterView from "./filter-view.js";

export default class FilterController{
    constructor(){
        this.view = new FilterView(this.handleChangeFilter);
        this.model = new FilterModel();

        this.loadAndRenderStatuses();
    }

    loadAndRenderStatuses = async () => {
        const statuses = await this.model.loadStatuses();
        this.view.render(statuses);
    }

    handleChangeFilter = ev => {
        console.log(ev.target.value);
        Publisher.notify('FILTER_STATUS', ev.target.value);
    }
}