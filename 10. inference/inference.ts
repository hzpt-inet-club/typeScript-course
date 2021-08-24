export{}

//1. 首先我们定一个一个参数，但是不直接赋予对应的类型

//这时候已经将a变量设置为number
let a = 18 // let a: number

//2. 再将a的值变为其他类型

//会产生类型错误的问题
a = "string" //Type 'string' is not assignable to type 'number'.