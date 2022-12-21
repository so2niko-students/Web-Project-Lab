export default class TaskView{
    DOM_TASK_TABLE = document.querySelector('.task-table');

    constructor(callback){
        this.DOM_TASK_TABLE.addEventListener('click', callback);
    }

    render = (d, sortType, direction) => {
        const str = `
        <thead>
            <tr>
                <th>#</th>
                ${ this.renderHeaders(sortType, direction) }
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
        ${ d.map(this.renderTaskRow).join('') }
        </tbody>`;
        this.DOM_TASK_TABLE.innerHTML = '';
        this.DOM_TASK_TABLE.insertAdjacentHTML('afterbegin', str);
    }
    
    renderHeaders = (sortType, direction) => {
        const headers = [
            {key : 'when', description : 'When'},
            {key : 'name', description : 'Name'},
            {key : 'status', description : 'Status'}
        ];

        const dir = direction ? '▼' : '▲'; 

        return headers.map(({key, description}) => `<th data-sort="${ key }">${ description }${ sortType == key ? dir : '' }</th>`).join('');
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