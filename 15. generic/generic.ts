export{}

//不使用泛型
function identity1(arg: number): number {
    return arg;
}

//使用泛型
function identity2<T>(arg: T): T {
    return arg;
}