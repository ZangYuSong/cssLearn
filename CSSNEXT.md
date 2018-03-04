# postcss-cssnext features

翻译整理的时间：2018 年 3 月 4 日

[postcss-cssnext 官网](http://cssnext.io/)

## automatic vendor prefixes 自动添加供应商前缀

> Vendor prefixes are automatically added (and removed if deprecated/useless depending on your browser scope) using autoprefixer.

> 使用 autoprefixer 插件自动添加供应商前缀（并根据您的浏览器范围将其删除（如果已弃用/无用，则取决于您的浏览器范围）。也就是说 postcss-nextcss 集成了 autoprefixer 插件。

```json
// 在 package.json 中添加 browserslist 的配置
{
  "browserslist": ["> 1%", "last 2 versions"]
}
```

[参考：autoprefixer](https://github.com/postcss/autoprefixer)

## custom properties & var() 自定义属性

> The current transformation for custom properties aims to provide a future-proof way of using a limited to :root selector of the features provided by native CSS custom properties.

> 使用一种受 :root 限制的选择器来提供一种面向未来的方式实现自定义属性的转换，该选择器由本地 CSS 自定义属性提供。

```css
:root {
  --success: #28a745;
}

.text-success {
  color: var(--success);
}

/* 转换之后 */
.text-success {
  color: #28a745;
  background-color: #fff;
}
```

[Plugin documentation](https://github.com/postcss/postcss-custom-properties)

## custom properties set & @apply 自定义属性集

> Allows you to store a set of properties in a named custom property, then reference them in other style rules.

> 允许您将一组属性存储在指定的定制属性中，然后在其他样式规则中引用它们。

> You are using @apply rule and custom property sets.
> This feature won't be included in the next major release of postcss-cssnext.
> This most likely won't get any more support from browser vendors as the spec is yet considered deprecated and alternative solutions are being discussed.

> 您正在使用@apply 规则和自定义属性集。该功能将不会包含在 postcss-cssnext 的下一个主要版本中。这很可能不会得到来自浏览器供应商的更多支持，因为该规范尚未被认可，并且正在讨论替代解决方案。

```css
:root {
  --danger-theme: {
    color: #dc3545;
    background-color: #fff;
  }
}

.test-danger {
  @apply --danger-theme;
}

/* 转换之后 */
.test-danger {
  color: #dc3545;
  background-color: #fff;
}
```

[Plugin documentation](https://github.com/pascalduez/postcss-apply)

## reduced calc() 简化 calc()

> Allows you to use safely calc with custom properties by optimizing previously parsed var() references.

> 允许您通过优化先前解析的 var()引用来安全地使用自定义属性的 calc。

```css
:root {
  --font-size: 1rem;
}

h1 {
  font-size: calc(var(--font-size) * 2);
}

/* 转换之后 */
h1 {
  font-size: 32px;
  font-size: 2rem;
}
```

[Plugin documentation](https://github.com/postcss/postcss-calc)

## custom media queries 定制媒体查询

> A nice way to have semantic media queries

> Allows to replace min-/max- with <= & >= (syntax easier to read)

> 定义一个语义化的媒体查询的好方法

> 允许用 <= 和 >= 来替换 min- 和 max-（语法更易读）

```css
@custom-media --small-viewport (max-width: 30em);
@custom-media --only-medium-screen (width >= 500px) and (width <= 1200px);
@media (--small-viewport) {
  font-size: 16px;
}
@media (--only-medium-screen) {
  font-size: 18px;
}

/* 转换之后 */
@media (max-width: 30em) {
  font-size: 16px;
}

@media (min-width: 500px) and (max-width: 1200px) {
  font-size: 18px;
}
```

[Plugin documentation](https://github.com/postcss/postcss-media-minmax)

## custom selectors 自定义选择器

```css
@custom-selector :--button button, .button;
@custom-selector :--enter :hover, :focus;

:--button {
  font-size: 16px;
  padding: 0 20px;
  height: 32px;
  border: 1px solid #ccc;
}
:--button:--enter {
  border: 1px solid #666;
  outline: none;
}

/* 转换之后 */
button,
.button {
  font-size: 16px;
  padding: 0 20px;
  height: 32px;
  border: 1px solid #ccc;
}
button:hover,
.button:hover,
button:focus,
.button:focus {
  border: 1px solid #666;
  outline: none;
}
```

[Plugin documentation](https://github.com/postcss/postcss-custom-selectors)

## nesting 嵌套

```js
a {
  & span {
    color: white;
  }

  @nest span & {
    color: blue;
  }

  @media (min-width: 30em) {
    color: yellow;
  }
}

/* 转换之后 */
a span {
  color: white;
}

span a {
  color: blue;
}

@media (min-width: 30em) {

  a {
    color: yellow;
  }
}
```

[Plugin documentation](https://github.com/jonathantneal/postcss-nesting)

## image-set() function

> Allows you to set different images for each kind of resolution of user device.

> 允许您为每种用户设备的分辨率设置不同的图像。

```css
.foo {
  background-image: image-set(
    url(img/test.png) 1x,
    url(img/test-2x.png) 2x,
    url(my-img-print.png) 600dpi
  );
}

/* 转换之后 */
.foo {
  background-image: url(img/test.png);
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .foo {
    background-image: url(img/test-2x.png);
  }
}

@media (-webkit-min-device-pixel-ratio: 6.25), (min-resolution: 600dpi) {
  .foo {
    background-image: url(my-img-print.png);
  }
}
```

[Plugin documentation](https://github.com/SuperOl3g/postcss-image-set-polyfill)

## color() function

```css
a {
  color: color(red alpha(-10%));
}

a:hover {
  color: color(red blackness(80%));
}

/* 转换之后 */
a {
  color: rgba(255, 0, 0, 0.9);
}

a:hover {
  color: rgb(51, 0, 0);
}
```

[Plugin documentation](https://github.com/postcss/postcss-color-function)

## hwb() function

> Similar to hsl() but easier for humans to work with (transpiled to: rgba()).

> 与 hsl()类似，但更容易与人合作（转译为：rgba()）。

```css
body {
  color: hwb(90, 0%, 0%, 0.5);
}
/* 转换之后 */
body {
  color: rgba(128, 255, 0, 0.5);
}
```

[Plugin documentation](https://github.com/postcss/postcss-color-hwb)

## gray() function

> Allows you to use more than 50 shades of gray (transpiled to: rgba()). For the first argument, you can use a number between 0 and 255 or a percentage.

> 允许您使用超过 50 个灰色阴影（转换为：rgba()）。 对于第一个参数，您可以使用 0 到 255 之间的数字或百分比。

```css
.foo {
  color: gray(85);
}

.bar {
  color: gray(10%, 50%);
}
/* 转换之后 */
.foo {
  color: rgb(85, 85, 85);
}

.bar {
  color: rgba(26, 26, 26, 0.5);
}
```

[Plugin documentation](https://github.com/postcss/postcss-color-gray)

## rebeccapurple color

> Allows you to use the new color keyword.

> 允许你使用新的颜色关键字。

```css
body {
  color: rebeccapurple;
}
/* 转换之后 */
body {
  color: #639;
}
```

[Plugin documentation](https://github.com/postcss/postcss-color-rebeccapurple)

## font-variant property font-variant 属性

> font-variant are transformed to font-feature-settings. You might take a look at the support of font feature settings.

> font-variant 被转换为 font-feature-settings。 您可以查看字体功能设置的[支持](https://caniuse.com/#feat=font-feature)。

```css
h2 {
  font-variant-caps: small-caps;
}
table {
  font-variant-numeric: lining-nums;
}
/* 转换之后 */
h2 {
  -webkit-font-feature-settings: "c2sc";
  font-feature-settings: "c2sc";
  font-variant-caps: small-caps;
}
table {
  -webkit-font-feature-settings: "lnum";
  font-feature-settings: "lnum";
  font-variant-numeric: lining-nums;
}
```

[Plugin documentation](https://github.com/postcss/postcss-font-variant)

## :any-link pseudo-class

```css
nav :any-link {
  background-color: yellow;
}
/* 转换之后 */
nav :link,
nav :visited {
  background-color: yellow;
}
```

[Plugin documentation](https://github.com/jonathantneal/postcss-pseudo-class-any-link)

## :matches pseudo-class

```css
p:matches(:first-child, .special) {
  color: red;
}
/* 转换之后 */
p:first-child,
p.special {
  color: red;
}
```

[Plugin documentation](https://github.com/postcss/postcss-selector-matches)

## :not pseudo-class

> Allows you to use :not() level 4 (which allows multiples selector). Transformed to :not() level 3 (which allow only one selector)`.

> 允许使用 css4 的 :not()（允许多选择器）。 转换为 css3 的 :not()（只允许一个选择器）`。

```css
p:not(:first-child, .special) {
  color: red;
}
/* 转换之后 */
p:not(:first-child):not(.special) {
  color: red;
}
```

[Plugin documentation](https://github.com/postcss/postcss-selector-NOT)

## hsl() function (functional-notation)

> Allows you to use its new syntax consisting of space-separated arguments and an optional slash-separated opacity.

> hsl() now accepts angles (deg, grad, rad, turn) as well as numbers for hues and an optional percentage or number for alpha value. So, hsl() and hsla() are now aliases of each other too.

> 允许您使用由空格分隔的参数和可选的斜线分隔的不透明度组成的新语法。

> hsl() 现在接受角度（deg，grad，rad，turn）以及色调的数字和可选的 alpha 值的百分比或数字。 所以，hsl() 和 hsla() 现在也是彼此的别名。

```css
div {
  color: hsl(90deg 90% 70%);
  background-color: hsl(300grad 25% 15% / 70%);
}
/* 转换之后 */
div {
  color: hsl(90, 90%, 70%);
  background-color: hsla(270, 25%, 15%, 0.7);
}
```

[Plugin documentation](https://github.com/dmarchena/postcss-color-hsl)

## system-ui font-family

> Allows you to use system-ui generic font-family. The current transformation provides a practical font-family list as fallback.

> 允许您使用 system-ui 通用字体系列。 目前的转换提供了一个实用的字体家族列表作为后备。

```css
body {
  font-family: system-ui;
}
/* 转换之后 */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue;
}
```

[Plugin documentation](https://github.com/JLHwung/postcss-font-family-system-ui)

## @todo

Any omissions of the CSS specifications (even in draft) that are subject to be handled by cssnext are not intentional. You can take a look at the list of features that are waiting to be implemented. Feel free to work on a feature ready to be added, or open a new issue if you find something that should be handled. Keep in mind that, as of right now, this project is intended to support new CSS syntax only.

CSS 规范中的任何遗漏（即使在草稿中）都可以通过 cssnext 来处理，这不是故意的。 您可以查看正在等待实施的功能列表。 如果您发现需要处理的内容，请随时准备添加功能，或者打开新的问题。 请记住，截至目前，该项目仅用于支持新的 CSS 语法。
