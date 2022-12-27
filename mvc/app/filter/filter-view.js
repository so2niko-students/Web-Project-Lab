export default class FilterView{
    DOM_FILTER_MENU = document.querySelector('.filter-menu');

    constructor(handleCallback){
        this.handleCallback = handleCallback;
    }

    render(statuses){
        const select = this.getFilterHTML(statuses);

        this.DOM_FILTER_MENU.insertAdjacentHTML('afterbegin', select);

        this.DOM_FILTER_MENU.querySelector('.filter-status').addEventListener('input', this.handleCallback);
    }

    getFilterHTML = statuses => {
        const options = statuses.reduce((acc, { value, key }, i) => {
            const selected = !i ? 'selected' : '';
            return `${ acc }<option value="${ key }" ${ selected }>${ value }</option>`;
        }, '');
        
        return `<select class="form-select filter-status">${ options }</select>`;
    }
    
}