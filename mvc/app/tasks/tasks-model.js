export default class TaskModel{
    #DATA_LINK = 'http://localhost:8080/';
    #DATA_LINK_ADD = 'http://localhost:8080/add';
    #prevSorting = null;
    #isRightDirection = true;
    #filteredData = null;
    #statuses = [];
    #data = [];


    constructor(handleLoadData){
        this.handleLoadData = handleLoadData;
    }

    loadData(){
        fetch(this.#DATA_LINK).then(r => r.json()).then(d => {
            this.#data = d;            
            this.handleLoadData(d);
        } );
    }

    sortBy = sortType => {
        this.#isRightDirection = this.#prevSorting === sortType ? !this.#isRightDirection : true;
        
        this.#prevSorting = sortType;

        return this.#sort();
    }

    #sort = () => {    
        const multi = this.#isRightDirection ? 1 : -1;

        if(!this.#filteredData){
            this.#filteredData = [...this.#data];
        }

        switch(this.#prevSorting){
            case 'when' : {
                const callback = (a, b) => multi * (new Date(a.when) - new Date(b.when));
                this.#filteredData.sort(callback);
                break;
            }
            case 'name' : {}
            case 'status' : {
                const callback = (a, b) =>  multi * (a.name > b.name ? 1 : -1);
                this.#filteredData.sort(callback);
                break;
            }
        }

        return {
            sortType : this.#prevSorting,
            data : this.#filteredData,
            direction : this.#isRightDirection
        };
    }

    addTask({name, description}){
        const link = `${ this.#DATA_LINK_ADD }?name=${ name }&description=${ description }`;
        fetch(link).then(() => this.loadData());
    }

    filterBy = filterStatus => {
        if(filterStatus === 'all'){
            this.#filteredData = [...this.#data];
        }else{
            const statusName = this.#statuses.find(({ key }) => key === filterStatus).value;
            this.#filteredData = this.#data.filter(({ status }) => statusName === status);
        }
        
        return this.#sort();
    }

    searchBy = searchVal => {
        const search = searchVal.trim();

        if(search != ''){
            const regSearch = new RegExp(search, 'im');
            //! Search functionality cancel filter functionality v.1
            this.#filteredData = this.#data.filter(({name, description}) => {
                const text = `${ name }${ description }`;
                return regSearch.test(text);
            });
        }else{
            this.#filteredData = [...this.#data];
        }
        
        return this.#sort();
    }

    set statuses(statuses){
        this.#statuses = statuses;
    }
}
