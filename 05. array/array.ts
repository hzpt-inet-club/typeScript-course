export{}

// 数组类型

const a:Array<string> = ['1','2','3']

const b:string[] = ['1','2','3']

// 数组类型运用

/**
 * 数组中所有的数字总和
 * @param array number类型的数组
 * @returns 数组中所有的数字总和
 */
function sum (... array:number[]){
    return array.reduce((prev,curr) => (prev + curr) , 0 )
}

console.log(sum(1,2,3,4)) // 