# vuejs

## 全局 API

### Vue.nextTick

:::tip 说明
在下次`DOM`更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的`DOM`。
:::

```js
//修改数据
vm.msg = "message";
//DOM 还没有更新

Vue.nextTick(function() {
  //DOM更新了
});

//作为一个Promise使用
Vue.nextTick().then(function() {
  //DOM更新了
});
```

### Vue.filter

:::tip 说明
**过滤器**：Vue.js 允许自定义过滤器，可用于一些常见的文本格式化。过滤起可用在两个地方：**花括号插值**和`v-bind`**表达式**。过滤起器应该被添加在 Javascript 表达式的尾部，由`|`符号指示。
:::

```html
// 在花括号中
{{message | capitalize}}

// 在 v-bind 中
<div v-bind:id="rawId | formatId"></div>
```

你可以在一个组件的选项中定义本地的过滤器：

```js
filter:{
  capitalize: function(val){
    if(!val) return "";
    val = val.toString();
    return val.charAt(0).toUpperCase()+val.slice(1)
  }
}
```

或者在创建 Vue 实例之前全局定义本地过滤器：

```js
Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
```

:::tip 示例
&nbsp;
<vuejs-filter/>
:::

## 选项/数据

### computed

:::tip 说明
**计算属性**将被混入到`Vue`实例中。所有`getter`和`setter`的`this`上下文自动绑定为`Vue`实例。

如果为一个 **计算属性** 使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，则`this`不会只想这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。
:::

```js
computed: {
  aDouble: vm => vm.a * 2;
}
```

计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意如果某个依赖（比如非响应式属性）在实例范畴之外，则计算属性是 **不会** 被更新的。

```js
var vm = new Vue({
  data: {
    a: 1
  },
  computed: {
    //仅读取
    aDouble: function() {
      return this.a * 2;
    },
    //读取和设置
    aPlus: {
      get: function() {
        return this.a + 1;
      },
      set: function(v) {
        this.a = v - 1;
      }
    }
  }
});
```

### watch

:::tip 说明
一个第一项，键是需要观察的对象，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例会在初始化时调用`vm.$watch`,遍历对象的每一个属性。
:::

```js
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function(newVal, oldVal) {
      console.log("new:%s,old:%s", newVal, oldVal);
    },
    //方法名
    b: "someMethod",
    //深度watch
    c: {
      handler: function(newVal, oldVal) {
        console.log("new:%s,old:%s", newVal, oldVal);
      },
      deep: true
    },
    //该回调将会在侦听开始之后被立即调用
    d: {
      handler: function(newVal, oldVal) {
        console.log("new:%s,old:%s", newVal, oldVal);
      },
      immediate: true
    },
    e: [
      function handler1(newVal, oldVal) {
        /*...*/
      },
      function handler2(newVal, oldVal) {
        /*...*/
      }
    ],
    //监听vm.e.f的value:{g:5}
    "e.f": function(newVal, oldVal) {
      /*...*/
    }
  }
});
vm.a = 2;
```

:::warning 警告
**注意：不应使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)来定义`watcher`函数**，箭头函数绑定了父级作用域的上下文，所以`this`不会按照期望指向 Vue 实例。
:::

```js
//this.myMethod将是undefined
message: val => this.myMethod(val);
```

[参考实例方法/数据 - vm.$watch](#vm-watch)

## 实例属性

### vm.$watch

:::tip 说明
观察 Vue 实例变化额一个表达式或计算属性函数。回调函数的得到的参数为 **新值** 和 **旧值** 。表达式只接受监督的键路径。对于更复杂的表达式，用函数取代。
:::

:::warning 注意
在变异（不是替换）一个对象或数组时，旧值将于新值相同，因为他们的引用指向同一个对象或数组。Vue 不会保留变异之前  值得副本。
:::

#### 选项

|      属性 | 说明                         |
| --------: | :--------------------------- |
|      deep | 为了发现对象内部值的变化     |
| immediate | 立即以表达式的当前值触发回调 |

- deep

:::tip 说明
为了发现对象内部值的变化，可以在选项参数中指定 deep: true 。注意监听数组的变动不需要这么做。
:::

- immediate

:::tip 说明
在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调.
:::

## 指令

### v-text

:::tip 说明
更新元素的`textContent`。如果要更新部分`textContent`,需要使用{{`Mustcache`}}插件。
:::

```html
<span v-text="msg"></span>
<span>{{msg}}</span>
```

### v-html

:::tip 说明
更新元素的`innerHTML`。**内容按普通 html 插入 - 不会作为 Vue 模板进行编译**。如果试图使用`v-html`组合模板，可以重新考虑是否使用 t 通过使用组件来替代。
:::

:::warning 警告
在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 攻击。只在可信内容上使用`v-html`，**永不**用在用户提交的内容上。
:::
:::tip 示例
&nbsp;
:::

```html
<div v-html="html"></div>
```

### v-show

:::tip 说明
根据表达式的真假值，切换元素的`display`CSS 属性。当条件变化时，该指令触发过渡效果。
:::

```html
<div id="app">
  <span v-show="isShow">这是一个v-show: {{isShow}}</span>
</div>
```

```js
var vm = new Vue({
  el: "#app",
  data: {
    isShow: true | false
  }
});
```

### v-if、v-else、v-else-if

:::tip 说明
`v-if`条件指令，根据表达式的真假条件渲染元素。在切换时元素及它的数据绑定、组件销毁或重建。如果元素是`<template>`，将提出他的内容作为条件块。

`v-else`、`v-else-if`的前一个兄弟元素必须是`v-if`或`v-else-if`。
:::

:::tip 示例
&nbsp;
:::

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

### v-for

:::tip 说明
基本源数据多次渲染元素或模板块。此指令的值必须使用特定的语法`alias in expression`，为当前元素遍历元素提供别名。
:::

```html
<div v-for="item in items">{{item.text}}</div>
```

另外也可以为数组索引指定别名（或用于对象的键）：

```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```

`v-for`默认行为试着不改变整体，而是替换元素。 迫使其重新排序的元素，需要提供一个`key`的特殊属性：

```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```

### v-on

:::tip 说明
可缩写`@`。绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

用在普通元素上时，只能监听原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。

在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 $event 属性：v-on:click="handle('ok', $event)"。

从 2.4.0 开始，v-on 同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的。
:::

- 修饰符

  - `.stop` - 调用 `event.stopPropagation()`。

  - `.prevent` - 调用 `event.preventDefault()`。

  - `.capture` - 添加事件侦听器时使用 capture 模式。

  - `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。

  - `.{keyCode | keyAlias}`- 只当事件是从特定键触发时才触发回 调。

  - `.native` - 监听组件根元素的原生事件。

  - `.once` - 只触发一次回调。

  - `.left` - (2.2.0) 只当点击鼠标左键时触发。

  - `.right` - (2.2.0) 只当点击鼠标右键时触发。

  - `.middle` - (2.2.0) 只当点击鼠标中键时触发。

  - `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

:::tip 示例
&nbsp;
:::

```html
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">

<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

在子组件上监听自定义事件 (当子组件触发“my-event”时将调用[事件处理器](https://cn.vuejs.org/v2/guide/events.html))：

```html
<my-component @my-event="handleThis"></my-component>

<!-- 内联语句 -->
<my-component @my-event="handleThis(123, $event)"></my-component>

<!-- 组件中的原生事件 -->
<my-component @click.native="onClick"></my-component>
```

### v-bind

:::tip 说明
缩写`@`。动态地绑定一个或多个特性，或一个组件 prop 到表达式。

在绑定 class 或 style 特性时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。

在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。

没有参数时，可以绑定到一个包含键值对的对象。注意此时 class 和 style 绑定不支持数组和对象。
:::

:::tip 示例
&nbsp;
:::

```html
<!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">

<!-- 缩写 -->
<img :src="imageSrc">

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>

<!-- 通过 $props 将父组件的 props 一起传给子组件 -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

### v-model

:::tip 说明
在表单控件或者组件上创建双向绑定。细节请看下面的教程链接。
:::

- 修饰符：

  - .lazy - 取代 input 监听 change 事件

  - .number - 输入字符串转为数字

  - .trim - 输入首尾空格过滤

:::tip 示例
&nbsp;
:::

```html
<div id="app">
    <input v-model="message"/>
    <p>{{message}}</p>
</div>
```

```js
var vm = new Vue({
  el: "#app",
  data: {
    message: "message"
  }
});
```

### v-pre

::: tip 说明
跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
:::

:::tip 示例
&nbsp;
:::

```html
<span v-pre>{{ this will not be compiled }}</span>
```

### v-once

::: tip 说明
只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
:::

:::tip 示例
&nbsp;
:::

```html
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

## 内置的组件

### transition

::: tip 说明
&lt;transition&gt; 元素作为单个元素/组件的过渡效果。&lt;transition&gt;只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在检测过的组件层级中。
:::

```html
<!-- 简单元素 -->
<transition>
  <div v-if="ok">toggled content</div>
</transition>

<!-- 动态组件 -->
<transition name="fade" mode="out-in" appear>
  <component :is="view"></component>
</transition>

<!-- 事件钩子 -->
<div id="transition-demo">
  <transition @after-enter="transitionComplete">
    <div v-show="ok">toggled content</div>
  </transition>
</div>
```

```js
new Vue({
  ...
  methods: {
    transitionComplete: function (el) {
      // 传入 'el' 这个 DOM 元素作为参数。
    }
  }
  ...
}).$mount('#transition-demo')
```

## 生命周期

::: tip 说明
生命周期总体分为八个部分：实例初始化前\后、挂载`DOM`前\后、数据更新前\后、实例销毁前\后
:::
|生命周期钩子|说明|
|-:|:-|
|[beforeCreate](#beforecreate)|实例初始化之后|
|[created](#created)|实例创建完成之后|
|[beforeMount](#beforemount)|挂载 DOM 之前|
|[mounted](#mounted)|挂载 DOM 之后|
|[beforeUpdate](#beforeupdate)|更新数据之前|
|[updated](#updated)|更新数据之后|
|[beforeDestroy](#beforedestroy)|销毁实例之前|
|[destroyed](#destroyed)|销毁实例之后|

![image](https://cn.vuejs.org/images/lifecycle.png)

### beforeCreate

:::tip 说明
`beforeCreate`调用在实例初始化之后，**数据观测（data observer）** 和 **even/watcher 事件配置** 之前。
:::

### created

:::tip 说明
`created`在实例初始化完成之后立即调用。**数据观测（data observer）** 属性和方法的运算， **event/watcher** 事件回调都已完成。

但是挂载阶段还没有开始，`$el`属性目前还不可见。
:::

### beforeMount

::: tip 说明
`beforeMount`在挂载开始之前被调用。相关的`render`函数首次被调用。

**该钩子在服务器渲染期间不被调用。**
:::

### mounted

::: tip 说明
`mounted`在挂载完成之后被调用，此时的`el`被新创建的`vm.$el`替换。如果`root`实例挂载了一个文档内元素，当`mounted`被调用时，`vm.$el`也在文档内。

注意：`mounted`被调用时不承诺所有子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕，可以用[vm.$nextTick](#vue-nexttick)替换掉`mounted`.

**该钩子在服务器渲染期间不被调用。**
:::

```js
mounted(){
    this.$nextTick(function(){
        //视图渲染完毕之后的回调
    })
}
```

### beforeUpdate

:::tip 说明
数据更新时调用，发生在虚拟`DOM`打补丁之前。这里适用于数据更新之前访问现有的`DOM`，比如手动移除已添加的事件监听器。

**该钩子在服务器渲染期间不被调用。**
:::

### updated

:::tip 说明
由于数据更改导致的虚拟`DOM`重新渲染和打补丁，在这之后调用该钩子。

现在可以可以执行依赖`DOM`的操作，但是在大多情况下应该避免爱此期间更改状态。如果相应的状态改变，通常最好使用[计算属性(computed)](#computed)或[watcher](#watch)取而代之。
:::

### beforeDestroy

:::tip 说明
实例销毁之前调用。在这一步，实例仍然完全可用。

**该钩子在服务器渲染期间不会被调用。**
:::

### destroyed

:::tip 说明
Vue 实例销毁后调用。调用后，实例指示的所有哪个是都会被解绑，所有的时间监听器会被移除，所有的子实例也会被销毁。

**该钩子在服务器渲染期间不会被调用。**
:::
