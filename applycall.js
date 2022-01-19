
// 函数借用 or 称为 函数委托
// 例子一
function fun() {
    this.a = 10;
}

function fun2(n, m) {
    this.a = n + m;
}

const xiaomi = {
    a: 1,
    b: 2,
}

const xiaohong = {
    a: 10,
    b: 11,
}

fun.call(xiaomi);
fun.apply(xiaohong);
fun2.call(xiaomi, 4, 5);
fun2.apply(xiaohong, [6, 7]);
console.log(xiaomi.a);
console.log(xiaohong.a);



// 例子二
function sum() {
    var _sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        _sum += arguments[i];
    }
    return _sum;
}

function average() {
    const _sum = sum.apply(null, arguments); // **sum函数没有this 所以第一个参数为null**， ***另外arguments 在apply中会自动展开打散***
    return _sum / arguments.length;
}


console.log('apply高级:',average(4, 5, 6, 7, 87, 100));


// 例子三
const arr = [23,44,55,901,123,23,-1,34];
console.log('max借用es6:',Math.max(...arr));
console.log('fun proxy:',Math.max.apply(null,arr)); // ***自动打散数组***