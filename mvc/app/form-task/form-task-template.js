const template = `<button
type="button"
class="btn btn-primary"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
>
Create task
</button>
<div
class="modal fade"
id="exampleModal"
tabindex="-1"
aria-labelledby="exampleModalLabel"
aria-hidden="true"
>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Create a task</h1>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <div class="input-group input-group-sm mb-3">
          <span class="input-group-text">Name</span>
          <input type="text" class="form-control input-task" aria-label="task name" data-task="name">
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text">Description</span>
          <input type="text" class="form-control input-task" aria-label="task Description" data-task="description">
        </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary btn-task-cancel"
        data-bs-dismiss="modal"
      >
        Cancel
      </button>
      <button 
        type="button" 
        class="btn btn-primary btn-task-save"
        >
            Save Task
        </button>
    </div>
  </div>
</div>
</div>`;

export default template;