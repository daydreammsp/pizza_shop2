console.log('connected js');

class Pizza {
    constructor(toppings =['cheese']){
        this.toppings = toppings;

    }
pizzaCost(){
    if (this.toppings == 'cheese'){
        return 10 
    }
    else{
        return 10 + ((this.toppings.length +1)* .99)
    }
    
}
}

let newPizza = new Pizza();
console.log(newPizza)
console.log(newPizza.pizzaCost());