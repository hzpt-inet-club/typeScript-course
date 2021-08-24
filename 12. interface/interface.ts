export{}

//接口最主要是拥有那些成员，并且成员类型是如何的

//定义接口
interface post{
    title:string
    body:string
}

//使用接口
const hello:post = {
    title:'this is title',
    body:'this is body'
}

//这时候我们就需要让post对象中拥有title和body属性
function printPost(post:post){
    console.log(post.title)
    console.log(post.body)
}

//可选成员的特性
interface post1{
    title:string
    body:string
    end?:string //添加?即可,这便是可选成员
}

//可以有end这个成员
const demo1:post1 = {
    title:'1',
    body:'2',
    end:'3'
}

//自然也可以没有end这个成员
const demo2:post1 = {
    title:'1',
    body:'2',
}

//接口的只读属性

interface post2{
    title:string
    body:string
    readonly end:string //在成员的名字前面不在使用readonly关键字就完成了只读属性，一旦赋值就不可修改
}

//动态成员接口
interface post3{
    //key是名字，string是类型
    [key:string]:string
}
