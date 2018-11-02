# 概述
## 简介
JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。（ES6 又新增了第七种 Symbol 类型的值。）
* 数值(number):整数和小数（比如1和3.14）
* 字符串(string):文本(比如 `helloworld`)
* 布尔值(boolean):表示真伪的特殊值，`true`为真，`false`为假
* `undefined`:表示未定义或不存在，即由于目前没有定义，所以此处暂时没有任何值
* `null`:表示空值，即此处的值为空。
* 对象(object):各种值组成的集合。
通常数值、字符串、布尔值 合称为原始类型(primitive type)的值，是最基本的数据类型。对象则成为合成类型(complex type)的值，往往一个对象是多个原始数据类型的值的合成，可看作是存放各种值的容器。`undefined`和`null`,可以被视为两个特殊的值。
对象是最复杂的数据类型，有可以分为三个子类型。
* 狭义的对象(object)
* 数组(array)
* 函数(function)
狭义的对象和数组是两个不同的数据组合方式，除非特别声明，一般*对象*都特指狭义的对象。
函数是处理数据的方法，JavaScript把`function`当成了一个数据类型，可以赋值给变量，给开发过程带来了很大的灵活性，也为JavaScript的"函数式编程"奠定了基础。
# typeof 运算符
JavaScript 有三种方法可以用来确定一个值到底是什么类型。
* `typeof`运算符
* `instanceof`运算符
* `Object。prototype.toString`方法
> 此处只介绍`typeof`运算符
`typeof`能够返回一个值的数据类型。
数值、字符串、布尔值分别返回 `number`、`string`、`boolean`。
```javascript
typeof 123 // number
typeof '123' // string
typeof true // boolean
```
函数返回`function`
```javascript
function f(){}
typeof f // function
```
`undefined`返回`undefined`
```javascript
typeof undefined // undefined
```
利用这一点可以检查变量是否声明，而不报错。
```javascript
a
// ReferenceError: a is not defined

typeof a 
// undefined
```
实际编程中，常应用这一特点做判断语句。
```javascript
// error
if (a){
  // ...
}
// ReferenceError: a is not defined

//正确做法
if (typeof a === 'undefined') {
  // ...
}
```
对象放回`object`
```javascript
typeof window // object
typeof {} //object
typeof [] //object
```
空数组(`[]`)的类型也是`object`,这表示在JavaScript内部，数组在本质上只是一个特殊的对象。
`instranceof`运算符可以区分数组和对象的。
```javascript
var obj = {};
var arr = [];
obj instranceof Array // false
arr instranceof Array // true
```
`null`返回`object`。
```javascript
typeof null // object
```
`null`的类型是 `object`,这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑`null`，只把它当作`object`的一种特殊值。后来`null`独立出来，作为一种单独的数据类型，为了兼容以前的代码，`typeof null`返回`object`就没法改变了。