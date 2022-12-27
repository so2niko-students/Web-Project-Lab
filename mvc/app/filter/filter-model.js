export default class FilterModel{
    DATA_LINK_STATUSES = 'http://localhost:8080/statuses';
    optionAll = {
        key : 'all',
        value : 'All'
    };

    loadStatuses = async () => {
        const res = await fetch(this.DATA_LINK_STATUSES);
        this.statuses = await res.json();

        this.statuses.unshift(this.optionAll);

        return this.statuses;
    }
}