export default class TaskModel{
    DATA_LINK = 'http://localhost:8080/';
    DATA_LINK_ADD = 'http://localhost:8080/add';
    prevSorting = null;
    isRightDirection = true;

    constructor(handleLoadData){
        this.handleLoadData = handleLoadData;
    }

    loadData(){
        fetch(this.DATA_LINK).then(r => r.json()).then(d => {
            this.data = d;            
            this.handleLoadData(d);
        } );
    }

    sortBy = sortType => {
        this.isRightDirection = this.prevSorting === sortType ? !this.isRightDirection : true;
        
        this.prevSorting = sortType;
        const multi = this.isRightDirection ? 1 : -1;

        switch(sortType){
            case 'when' : {
                const callback = (a, b) => multi * (new Date(a.when) - new Date(b.when));
                this.data.sort(callback);
                break;
            }
            case 'name' : {}
            case 'status' : {
                const callback = (a, b) =>  multi * (a.name > b.name ? 1 : -1);
                this.data.sort(callback);
                break;
            }
        }

        return {
            sortType,
            data : this.data,
            direction : this.isRightDirection
        };
    }

    addTask({name, description}){
        const link = `${ this.DATA_LINK_ADD }?name=${ name }&description=${ description }`;
        fetch(link).then(() => this.loadData());
    }
}
