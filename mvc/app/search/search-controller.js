import Publisher from "../publisher.js";
import SearchView from "./search-view.js";

export default class SearchController{
    constructor(){
        this.view = new SearchView(this.handleSearch);
    }

    handleSearch = () => {
        const searchVal = this.view.searchValue;
        Publisher.notify('SEARCH', searchVal);
    }
}