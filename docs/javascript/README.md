# javascript

## 构造函数

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    alert(this.name);
  };
}
var person1 = new Person("Kenny", 28, "doctor");
var person2 = new Person("Smith", 23, "Doctor");
```

上面的例子中 `person1` 和 `person2` 都是 `Person` 的实例。这两个实例都有一个 [`constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) （构造函数）属性，该属性（是一个指针）指向 Person。 即：

```js
console.log(person1.constructor == Person); //true
console.log(person2.constructor == Person); //true
```

我们要记住两个概念（构造函数，实例）：
**person1 和 person2 都是 构造函数 Person 的实例**
一个公式：
**实例的构造函数属性（[constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)）指向构造函数。**

## prototype

在 JavaScript 中，函数可以有属性。没个函数都有一个特殊的属性叫作`原型（prototype）`。

```js
var Animal = function(obj) {
  this.type = obj.type;
  this.color = obj.color;
};

Animal.prototype = {
  attribute: "animal"
};
var Cat = new Animal({ type: "Cat", color: "black" });
var Dog = new Animal({ type: "Dog", color: "yellow" });
console.log(Animal.prototype);
console.log(Cat);
console.log(Dog);
```

:::warning 注意
在默认情况下，所有的原型对象都会自动获得一个 `constructor`（构造函数）属性，这个属性（是一个指针）指向 prototype 属性所在的函数.
:::

```js
Cat.constructor == Animal;
Animal.prototype.constructor == Animal;
```
