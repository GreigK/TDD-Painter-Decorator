const Decorator = function(stock){
    this.stock = [];
}

Decorator.prototype.addPaintStock = function(paint){
    return this.stock.push(paint)
}

Decorator.prototype.litresInStock = function(){
    let total = 0;
    for(let index = 0; index < this.stock.length; index++){
        cans = this.stock[index]
        total += paint.litre
    }
    return total
}

module.exports = Decorator;