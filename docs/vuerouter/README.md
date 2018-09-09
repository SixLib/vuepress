# vue-router

## &lt;router-link&gt;

**&lt;router-link&gt;** 组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 [`to`](#to) 属性指定目标地址，默认渲染成带有正确链接的 **&lt;a&gt;** 标签，可以通过配置 `tag` 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。

**&lt;router-link&gt;** 比起写死的 **&lt;a href="..."&gt;** 会好一些，理由如下：

- 无论是 HTML5 `history` 模式还是 `hash` 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 `hash` 模式，无须作任何变动。

- 在 HTML5 `history` 模式下，`router-link` 会守卫点击事件，让浏览器不再重新加载页面。

- 当你在 HTML5 `history` 模式下使用 `base` 选项之后，所有的 `to` 属性都不需要写 (基路径) 了。

``` html
<router-link to="/foo">foo</router-link>
```

## &lt;router-link&gt; Props

### to

表示目标路由的链接。当被点击后，内部会立即把`to` 的值传给`router.push()`，所以这个值可以是一个字符串或一个描述目标位置的对象。

```html
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
```

### replace

设置`replace`属性后，会调用`router.splace()`而不是`router.push()`,导航后不会留下`history`。

```html
<router-link :to="{ path: '/abc'}" replace></router-link>
```

### append

设置`append`属性后，则在当前（相对）路径前添加基路径。例如：我们从`/a`导航到相对路径`b`,如果没有配置`append`，则路径为`/b`,配置了`append`，为`/a/b`。

```html
<router-link :to="{ path: 'relative/path'}" append></router-link>
```

### tag

**默认值为 a**。

有时候希望 **&lt;router-link&gt;**渲染成某种标签，例如:&lt;li&gt;。于是我们使用`tag`prop类指定某种标签，同样它还是会监听事件，触发导航。

```html
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 -->
<li>foo</li>
```

### active-class

默认值： `"router-link-active"`

设置链接激活时使用CSS类名。默认值可以通过路由的的构造选项`linkActiveClass`来全局控制。

### exact

默认 false。

**是否激活**默认类名的依据是**inclusive match**（全包含匹配）。如果当前路径是`/a`开头的，那么 &lt;router-link to="/a"&gt; 也会被设置 CSS 类名。

按照这个规则，每个路由都会激活&lt;router-link to="/a"&gt;！想要链接使用 "exact 匹配模式"，则使用 exact 属性：

```html
<!-- 这个链接只会在地址为 / 的时候被激活 -->
<router-link to="/" exact>
```

## &lt;router-view&gt;

&lt;router-view&gt; 组件是一个 functional 组件，渲染路径匹配到的视图组件。&lt;router-view&gt; 渲染的组件还可以内嵌自己的 &lt;router-view&gt;，根据嵌套路径，渲染嵌套组件。

其他属性 (非 router-view 使用的属性) 都直接传给渲染的组件， 很多时候，每个路由的数据都是包含在路由参数中。

因为它也是个组件，所以可以配合 [&lt;transition&gt;](/vuejs/#transition) 和 &lt;keep-alive&gt; 使用。如果两个结合一起用，要确保在内层使用 &lt;keep-alive&gt;：

```html
<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
```

## &lt;router-view&gt; Props

### name

默认值: "default"

如果 &lt;router-view&gt;设置了名称，则会渲染对应的路由配置中 components 下的相应组件。查看 [命名视图](https://router.vuejs.org/zh/guide/essentials/named-views.html) 中的例子。

## Router实例方法

### router.beforeEach

全局前置守卫。

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。

- `to: Route`: 即将要进入的目标 路由对象

- `from: Route`: 当前导航正要离开的路由

- `next: Function`: 一定要调用该方法来 `resolve` 这个钩子。执行效果依赖 `next` 方法的调用参数。

**确保要调用 `next` 方法，否则钩子就不会被 `resolved`。**

### router.beforeResolve

全局解析守卫

### router.afterEach

全局后置守卫