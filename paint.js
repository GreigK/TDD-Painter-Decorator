const Paint = function(litre){
    this.litre = litre;
}

Paint.prototype.isCanEmpty = function(){
    let result;
    if(this.litre === 0){
        result = true
    }else{
        result = false
    }
    return result;
};

Paint.prototype.checkIfEmpty = function(){
    return this.litre = 0;

}




module.exports = Paint;