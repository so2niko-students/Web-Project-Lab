import TaskModel from "./tasks-model.js";
import TaskView from "./tasks-view.js";

export default class TaskController {
  constructor() {
    this.model = new TaskModel();
    this.view = new TaskView(this.handleClick);

    this.model.loadData(this.handleLoadData);
  }

  handleLoadData = (d) => {
    this.view.render(d);
  };

  handleClick = (ev) => {
    const sort = ev.target.dataset.sort;
    if (sort) {
        const d = this.model.sortBy(sort);
        this.view.render(d);
    }
  };
}
