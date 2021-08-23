export{}

//枚举类型,枚举会污染编译之后代码。变成一个双向的键值对对象。

/**
 * 使用对象模拟枚举
 */
const text_status1 = {
    drafr:0,
    Unpublished: 1,
    Published: 2
}

/**
 * 在typeScript中可以使用枚举对象
 * 数字枚举
 */
enum text_status2  {
    drafr = 0,
    Unpublished = 1,
    Published = 2
}

/**
 * 字符串枚举
 */
enum text_status3 {
    drafr = 'drafr',
    Unpublished = 'Unpublished',
    Published = 'Published'
}

/**
 * 使用枚举
 */
const text = {
    title: 'hello INet',
    content: 'This is xiaoXunYao typescript learning notes',
    // status: text_status1.drafr
    // status: text_status2.drafr
    status:text_status3.drafr
}