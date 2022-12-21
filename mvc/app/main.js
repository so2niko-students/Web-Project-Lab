import FormTaskController from "./form-task/form-task-controller.js";
import TaskController from "./tasks/tasks-controller.js";

const tasks = new TaskController();
const form = new FormTaskController(tasks.handleCreateTask);