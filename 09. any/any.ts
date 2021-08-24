export{}

/**
 * any 在TypeScript中不会检查，尽量少用
 */

function stringify(value:any){
    return JSON.stringify(value)
}

let a:any = 'string'

let b:any = false