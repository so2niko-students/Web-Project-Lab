export default class TaskModel{
    DATA_LINK = './data.json';

    loadData(callback){
        fetch(this.DATA_LINK).then(r => r.json()).then(d => {
            this.data = d;            
            callback(d);
        } );
    }

    sortBy = sortType => {
        if(sortType == 'when'){

            this.data.sort((a, b) => new Date(a.when) - new Date(b.when));
        }

        return this.data;
    }
}
