```js
console.log(a)
var a = 12
function fn(){
    console.log(a)
    var a = 13
}
fn()
console.log(a)
// undefined unfined 12
 
// 在当前作用域下（全局/私有/块作用域），如果创建变量使用的是LET/CONST等，一定不能在创建代码前使用这些变量，否则会报错：ReferenceError:Cannot access 'a' before initialization

// let/const虽然没有变量提升，但是词法解析也可以判断是全局还是私有
```

```js
var foo = 1
function bar(){
    if(!foo){
        var foo = 10
    }
    console.log(foo)
}
bar()
// 10

let foo = 1
function bar(){
    if(!foo){
        let foo = 10
    }
    console.log(foo)
}
bar()
// 1

let foo = 1
function bar(){
    if(foo){
        let foo = 10
    }
    console.log(foo)
}
bar()
// 1

let foo = 1
function bar(){
    if(!foo){
        let foo = 10
        console.log(foo)
    }
    console.log(foo)
}
bar()
//10
//1