Array.prototype.customEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i], i, this)){
            return false;
        }
    }
    return true;
}