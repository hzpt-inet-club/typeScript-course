export{}

// 类的基础使用

//定义一个类
class Persion{
    name : string
    age : number
    constructor(name : string,age : number){
        this.name = name
        this.age = age
    }

    sayHello():void{
        console.log(`hello , ${this.name}`)
    }
}

// 类的成员访问修饰符

//定义一个类
class dog{
    public name : string //将name属性变成共有属性
    private age : number //将age变成私有属性,只能在内部访问
    protected init : string //将init变成保护属性，只能在内部访问
    constructor(name : string,age : number,init : string){
        this.name = name
        this.age = age
        this.init = init
    }

    sayHello():void{
        console.log(`hello , ${this.name}`)
    }
}

// 类的继承

class cat extends dog {
    constructor(name:string , age:number){
        super(name,age,"1");
    }
}

//类的只读属性

class persion2{
    // 加上 readonly 即可
    private readonly name : string 
    private readonly age : number
    constructor(name : string,age : number){
        this.name = name
        this.age = age
    }

    sayHello():void{
        console.log(`hello , ${this.name}`)
    }
}