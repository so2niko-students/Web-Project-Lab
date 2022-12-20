export default class TaskView{
    DOM_TASK_TABLE = document.querySelector('.task-table');

    constructor(callback){
        this.DOM_TASK_TABLE.addEventListener('click', callback);
    }

    render = d => {
        const str = `
        <thead>
            <tr>
                <th>#</th>
                <th data-sort="when">When</th>
                <th data-sort="name">Name</th>
                <th data-sort="status">Status</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
        ${ d.map(this.renderTaskRow).join('') }
        </tbody>`;
        this.DOM_TASK_TABLE.innerHTML = '';
        this.DOM_TASK_TABLE.insertAdjacentHTML('afterbegin', str);
    }

    renderTaskRow = ({ when, name, status, description }, i) => {
        return `
        <tr>
                <td>${ i + 1 }</td>
                <td>${ when }</td>
                <td>${ name }</td>
                <td>${ status }</td>
                <td>${ description }</td>
            </tr>`
    }
}