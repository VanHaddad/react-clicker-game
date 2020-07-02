class Item{
    constructor(name, cost, power, isAutoAttack){
        this._name = name;
        this._cost = cost;
        this._power = power;
        this._isAutoAttack = isAutoAttack;
        this._level = 0;
    }

    get name(){
        return this._name;
    }

    get isAutoAttack(){
        return this._isAutoAttack;
    }

    get level(){
        return this._level;
    }
    set level(level){
        this._level = level;
    }

    get cost(){
        return this._cost;
    }
    set cost(cost){
        this._cost = cost;
    }

    get power(){
        return this._power;
    }
    set power(power){
        this._power = power;
    }
}

export default Item;