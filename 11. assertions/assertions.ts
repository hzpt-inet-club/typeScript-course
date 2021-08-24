export{}

//1. 假定这个nums有一个明确的接口

const nums = [1,2,3,4]

//2. 找到数组中第一个大于0的数字

const res = nums.find(i => i > 0)

//3. 断言res一定为number类型

const num1 = res as number