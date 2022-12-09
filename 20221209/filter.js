Array.prototype.myFilter = function(callback){
    const filteredArray = [];

    for(let i = 0; i < this.length; i += 1){
        if(callback(this[i], i, this)){
            filteredArray.push(this[i]);
        }
    }

    return filteredArray;
}

function showName(){
    console.log(Date.now(), this.name);
}

const dog = {
    name : 'Shiny',
    age : 1,
    sex : 'female'
};

showName();

showName.call(dog);

const showNameDog = showName.bind(dog);

showNameDog();


Array.prototype.myFilter = function (checkElement) {
    const returnArr = [];

    for (let i = 0, j = 0; i < this.length; i++) {
        if (checkElement(this[i])) {
            returnArr[j++] = this[i];
        }
    }
    return returnArr;
};