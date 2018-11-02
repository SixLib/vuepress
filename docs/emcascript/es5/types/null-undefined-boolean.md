# null, undefined 和布尔值
## null 和 undefined
### 概述
`null`和`undefined`都可以表示"没有"，含义非常相似。将一个变量赋值为`null`和`undefined`，语法效果几乎没有区别。
```javascript
var a = undefined;
// OR
var a = null;
```
> 变量`a`分贝被赋值`undefined`和`null`，效果几乎等价。

在`if`中，他们都会被宗丁转为`false`，相等运算符(`==`)甚至直接报告两者相等。
```javascript
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```
从上面代码可见，两者的行为是何等相似！谷歌公司开发的 JavaScript 语言的替代品Dart语言，就明确规定只有`null`，没有`undefined`！

既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

1995年 JavaScript 诞生时，最初像 Java 一样，只设置了`null`表示"无"。根据 C 语言的传统，`null`可以自动转为`0`。
```javascript
Number(null) // 0
5 + null // 5
```
`null`转为数字时，自动变成0。

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，`null`就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。

其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果`null`自动转为0，很不容易发现错误。

因此，他又设计了一个`undefined`。区别是这样的：`null`是一个表示“空”的对象，转为数值时为`0`；`undefined`是一个表示"此处无定义"的原始值，转为数值时为`NaN`。
```javascript
Number(undefined) // NaN
5 + undefined // NaN
```
### 用法和含义
`null`表示空值。调用函数时，某个参数未设置任何值，这是就可以出传入`null`,表示该参数为空。比如某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那个这个参数就会掺入`null`,表示未发生错误。

**undefined表示未定义。**
```javascript
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```
