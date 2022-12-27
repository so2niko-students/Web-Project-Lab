import Publisher from "../publisher.js";
import TaskModel from "./tasks-model.js";
import TaskView from "./tasks-view.js";

export default class TaskController {
  constructor() {
    this.model = new TaskModel(this.handleLoadData);
    this.view = new TaskView(this.handleClick);

    this.model.loadData();
    Publisher.subscribe('ON_CREATE_NEW_TASK', this.handleCreateTask);
    Publisher.subscribe('FILTER_STATUS', this.handleFilterStatus);
  }

  handleLoadData = (d) => {
    this.view.render(d);
  }

  handleClick = (ev) => {
    const sort = ev.target.dataset.sort;
    if (sort) {
        const {data, sortType, direction} = this.model.sortBy(sort);
        this.view.render(data, sortType, direction);
    }
  }

  handleCreateTask = task => {
    console.log(task);
    this.model.addTask(task);
  }

  handleFilterStatus = status => {
    console.log('filter', status);
  }

}
