class Plant {
    constructor(name, height, age) {
        this.name = name;
        this.height = height;
        this.age = age;
    }

    grow() {
        this.height = this.height + 0.1;
        //console.log(´${this.height}´);
        console.log(`Я выросла до: ${this.height} метров`);
    }
}

class Rosa extends Plant {
    constructor(name, age, height, color, numb) {
        super(name, height, age);
        this.color = color;
        this.numb=numb;
    }
}

let rosa = new Rosa("Чайная", 1, 1, "red",4);
console.log(`Я роза : ${rosa.name} и ${rosa.color} цвета`);
rosa.grow();
switch (rosa.numb)
{
    case 1:
        console.log(`У меня  : ${rosa.numb} бутон`);   
        break;
    case 2,3,4:
        console.log(`У меня  : ${rosa.numb} бутона`); 
        break;      
     default:
        console.log(`У меня  : ${rosa.numb} бутонов`); 
}

