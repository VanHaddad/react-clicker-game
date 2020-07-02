class Enemy{
    constructor(health, value){
        this._health = health;
        this._currentHealth = health;
        this._value = value;
    }

    IsDead(){
        return this._currentHealth <= 0;
    }

    DamageEnemy(damage){
        this._currentHealth -= damage;
    }

    set value(value){
        this._value = value;
    }
    get value(){
        return this._value;
    }

    set health(health){
        this._health = health;
    }
    get health(){
        return this._health
    }

    set currentHealth(health){
        this._currentHealth = health
    }
    get currentHealth(){
        return this._currentHealth;
    }
}

export default Enemy;