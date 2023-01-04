export default class SearchView{
    DOM_INPUT = document.querySelector('.input-search');

    constructor(handleSearch){
        this.DOM_INPUT.addEventListener('input', handleSearch);

    }

    get searchValue(){
        return this.DOM_INPUT.value;
    }

}