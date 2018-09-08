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
更新元素的`innerHTML`。**内容按普通html插入 - 不会作为Vue模板进行编译**。如果试图使用`v-html`组合模板，可以重新考虑是否使用t通过使用组件来替代。
:::

:::warning 警告
在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 攻击。只在可信内容上使用`v-html`，**永不**用在用户提交的内容上。
:::

### v-show

### v-if、v-else、v-else-if

### v-for

### v-on

### v-bind

### v-model

### v-pre

### v-once

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