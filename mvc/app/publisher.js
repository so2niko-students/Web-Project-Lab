export default class Publisher{
    static #listeners = {};

    static #isEvent = (event) => {
        if(!Publisher.#listeners[event]){
            Publisher.#listeners[event] = [];
        }
    }

    static subscribe = (event, callback) => {
        Publisher.#isEvent(event);

        Publisher.#listeners[event].push(callback);
    }    

    static unsubscribe = () => {

    }

    static notify = (event, data) => {
        Publisher.#isEvent(event);

        Publisher.#listeners[event].forEach(callback => callback(data));
    }

}