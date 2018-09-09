(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("默认 false。")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v('按照这个规则，每个路由都会激活<router-link to="/a">！想要链接使用 "exact 匹配模式"，则使用 exact 属性：')]),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("<router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。")]),t._v(" "),a("p",[t._v("其他属性 (非 router-view 使用的属性) 都直接传给渲染的组件， 很多时候，每个路由的数据都是包含在路由参数中。")]),t._v(" "),a("p",[t._v("因为它也是个组件，所以可以配合 "),a("router-link",{attrs:{to:"/vuejs/#transition"}},[t._v("<transition>")]),t._v(" 和 <keep-alive> 使用。如果两个结合一起用，要确保在内层使用 <keep-alive>：")],1),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),a("p",[t._v('默认值: "default"')]),t._v(" "),a("p",[t._v("如果 <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件。查看 "),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/named-views.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("命名视图"),a("OutboundLink")],1),t._v(" 中的例子。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("全局前置守卫。")]),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),a("p",[t._v("全局解析守卫")]),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("全局后置守卫")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-router")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-link","aria-hidden":"true"}},[this._v("#")]),this._v(" <router-link>")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("<router-link>")]),t._v(" 组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 "),a("a",{attrs:{href:"#to"}},[a("code",[t._v("to")])]),t._v(" 属性指定目标地址，默认渲染成带有正确链接的 "),a("strong",[t._v("<a>")]),t._v(" 标签，可以通过配置 "),a("code",[t._v("tag")]),t._v(" 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("<router-link>")]),this._v(" 比起写死的 "),s("strong",[this._v('<a href="...">')]),this._v(" 会好一些，理由如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("无论是 HTML5 "),a("code",[t._v("history")]),t._v(" 模式还是 "),a("code",[t._v("hash")]),t._v(" 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 "),a("code",[t._v("hash")]),t._v(" 模式，无须作任何变动。")])]),t._v(" "),a("li",[a("p",[t._v("在 HTML5 "),a("code",[t._v("history")]),t._v(" 模式下，"),a("code",[t._v("router-link")]),t._v(" 会守卫点击事件，让浏览器不再重新加载页面。")])]),t._v(" "),a("li",[a("p",[t._v("当你在 HTML5 "),a("code",[t._v("history")]),t._v(" 模式下使用 "),a("code",[t._v("base")]),t._v(" 选项之后，所有的 "),a("code",[t._v("to")]),t._v(" 属性都不需要写 (基路径) 了。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/foo"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("foo"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-link-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-link-props","aria-hidden":"true"}},[this._v("#")]),this._v(" <router-link> Props")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"to"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to","aria-hidden":"true"}},[this._v("#")]),this._v(" to")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("表示目标路由的链接。当被点击后，内部会立即把"),s("code",[this._v("to")]),this._v(" 的值传给"),s("code",[this._v("router.push()")]),this._v("，所以这个值可以是一个字符串或一个描述目标位置的对象。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 字符串 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("home"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 渲染结果 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("home"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 使用 v-bind 的 JS 表达式 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("home"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 不写 v-bind 也可以，就像绑定别的属性一样 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("home"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 同上 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("home"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" }"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 命名的路由 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ name: "),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("user"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", params: { userId: 123 }}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("User"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 带查询参数，下面的结果为 /register?plan=private --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("register"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", query: { plan: "),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("private"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" }}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Register"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"replace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace","aria-hidden":"true"}},[this._v("#")]),this._v(" replace")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("设置"),a("code",[t._v("replace")]),t._v("属性后，会调用"),a("code",[t._v("router.splace()")]),t._v("而不是"),a("code",[t._v("router.push()")]),t._v(",导航后不会留下"),a("code",[t._v("history")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/abc"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"append"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#append","aria-hidden":"true"}},[this._v("#")]),this._v(" append")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("设置"),a("code",[t._v("append")]),t._v("属性后，则在当前（相对）路径前添加基路径。例如：我们从"),a("code",[t._v("/a")]),t._v("导航到相对路径"),a("code",[t._v("b")]),t._v(",如果没有配置"),a("code",[t._v("append")]),t._v("，则路径为"),a("code",[t._v("/b")]),t._v(",配置了"),a("code",[t._v("append")]),t._v("，为"),a("code",[t._v("/a/b")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ path: "),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("relative/path"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag","aria-hidden":"true"}},[this._v("#")]),this._v(" tag")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("默认值为 a")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有时候希望 **<router-link>**渲染成某种标签，例如:<li>。于是我们使用"),s("code",[this._v("tag")]),this._v("prop类指定某种标签，同样它还是会监听事件，触发导航。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/foo"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("li"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("foo"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 渲染结果 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("foo"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"active-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#active-class","aria-hidden":"true"}},[this._v("#")]),this._v(" active-class")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("默认值： "),s("code",[this._v('"router-link-active"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("设置链接激活时使用CSS类名。默认值可以通过路由的的构造选项"),s("code",[this._v("linkActiveClass")]),this._v("来全局控制。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"exact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exact","aria-hidden":"true"}},[this._v("#")]),this._v(" exact")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("是否激活")]),this._v("默认类名的依据是"),s("strong",[this._v("inclusive match")]),this._v("（全包含匹配）。如果当前路径是"),s("code",[this._v("/a")]),this._v('开头的，那么 <router-link to="/a"> 也会被设置 CSS 类名。')])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 这个链接只会在地址为 / 的时候被激活 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("exact")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-view","aria-hidden":"true"}},[this._v("#")]),this._v(" <router-view>")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-view-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-view-props","aria-hidden":"true"}},[this._v("#")]),this._v(" <router-view> Props")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[this._v("#")]),this._v(" name")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router实例方法","aria-hidden":"true"}},[this._v("#")]),this._v(" Router实例方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"router-beforeeach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-beforeeach","aria-hidden":"true"}},[this._v("#")]),this._v(" router.beforeEach")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 "),s("strong",[this._v("等待中")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("code",[t._v("to: Route")]),t._v(": 即将要进入的目标 路由对象")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("from: Route")]),t._v(": 当前导航正要离开的路由")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("next: Function")]),t._v(": 一定要调用该方法来 "),a("code",[t._v("resolve")]),t._v(" 这个钩子。执行效果依赖 "),a("code",[t._v("next")]),t._v(" 方法的调用参数。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("确保要调用 "),s("code",[this._v("next")]),this._v(" 方法，否则钩子就不会被 "),s("code",[this._v("resolved")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"router-beforeresolve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-beforeresolve","aria-hidden":"true"}},[this._v("#")]),this._v(" router.beforeResolve")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"router-aftereach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-aftereach","aria-hidden":"true"}},[this._v("#")]),this._v(" router.afterEach")])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);