# 弹性盒子模式

**参考链接：**[CSS 弹性盒子布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)

## 简介

> 在定义方面来说，弹性布局是指通过调整其内元素的宽高，从而在任何显示设备上实现对可用显示空间最佳填充的能力。弹性容器扩展其内元素来填充可用空间，或将其收缩来避免溢出。

> 块级布局更侧重于垂直方向、行内布局更侧重于水平方向，与此相对的，弹性盒子布局算法是方向无关的。虽然块级布局对于单独一个页面来说是行之有效的，但其仍缺乏足够的定义来支持那些必须随用户代理(user agent)不同或设备方向从水平转为垂直等各种变化而变换方向、调整大小、拉伸、收缩的应用程序组件。 弹性盒子布局主要适用于应用程序的组件及小规模的布局，而（新兴的）栅格布局则针对大规模的布局。这二者都是 CSS 工作组为在不同用户代理、不同书写模式和其他灵活性要求下的网页应用程序有更好的互操作性而做出的更广泛的努力的一部分。

### 弹性容器(Flex container)

> 包含着弹性项目的父元素。通过设置  display  属性的值为  flex  或  inline-flex  来定义弹性容器。

### 弹性项目(Flex item)

> 弹性容器的每个子元素都称为弹性项目。弹性容器直接包含的文本将被包覆成匿名弹性单元。

### 轴(Axis)

> 每个弹性框布局包含两个轴。弹性项目沿其依次排列的那根轴称为主轴(main axis)。垂直于主轴的那根轴称为侧轴(cross axis)。

### 方向(Direction)

> 弹性容器的主轴起点(main start)/主轴终点(main end)和侧轴起点(cross start)/侧轴终点(cross end)描述了弹性项目排布的起点与终点。它们具体取决于弹性容器的主轴与侧轴中，由  writing-mode  确立的方向（从左到右、从右到左，等等）。

### 行(Line)

> 根据  flex-wrap  属性，弹性项目可以排布在单个行或者多个行中。此属性控制侧轴的方向和新行排列的方向。

### 尺寸(Dimension)

> 据弹性容器的主轴与侧轴，弹性项目的宽和高中，对应主轴的称为主轴尺寸(main size) ，对应侧轴的称为   侧轴尺寸(cross size)。

## 属性

### align-content

> 浏览器如何在容器的侧轴围绕弹性盒子项目分配空间。**适用于：弹性容器**，下述常用值：

* stretch：拉伸所有行来填满剩余空间。剩余空间平均的分配给每一行。**默认值**
* flex-start：所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。
* flex-end：所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。
* center：所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。
* space-between：所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。
* space-around：所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。
* space-evenly：所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离和相邻两行间距一样。

![align-content](/img/align-content.png)

### flex-flow

> 是 flex-direction 和 flex-wrap 的简写

#### flex-wrap

> 指定 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向。**适用于：弹性容器**，下述常用值：

* nowrap：flex 的元素被摆放到到一行，这可能导致溢出 flex 容器。 cross-start 会根据 flex-direction 的值 相当于 start 或 before。**默认值**
* wrap：flex 元素 被打断到多个行中。cross-start 会根据 flex-direction 的值选择等于 start 或 before。cross-end 为确定的 cross-start 的另一端。
* wrap-reverse：和 wrap 的行为一样，但是 cross-start 和 cross-end 互换。

![flex-wrap](/img/flex-wrap.png)

#### flex-direction

> 指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)。**适用于：弹性容器**，下述常用值：

* row：flex 容器的主轴被定义为与文本方向相同。 主轴起点和主轴终点与内容方向相同。**默认值**
* row-reverse：表现和 row 相同，但是置换了主轴起点和主轴终点
* column：flex 容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
* column-reverse：表现和 column 相同，但是置换了主轴起点和主轴终点

![flex-direction](/img/flex-direction.png)

### justify-content

> 属性定义了浏览器如何分配顺着父容器主轴的弹性元素之间及其周围的空间。**适用于：弹性容器**，下述常用值：

* flex-star：从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。**默认值**
* flex-end：从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
* center：伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
* space-between：在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
* space-around：在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
* space-evenly；在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离和相邻元素之间距离一样。

![justify-content](/img/justify-content.png)

### align-items

> 属性以与 justify-content 相同的方式在侧轴方向上将当前行上的弹性元素对齐。**适用于：弹性容器**，下述常用值：

* stretch：弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。**默认值**
* flex-start：元素向侧轴起点对齐。
* flex-end：元素向侧轴终点对齐。
* center：元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
* baseline：所有元素向基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。

![align-items](/img/align-items.png)

### align-self

> 会对齐当前 flex 行中的 flex 元素，并覆盖 align-items 的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。**适用于：弹性项目**，下述常用值：

* auto：设置为父元素的 align-items 值，如果该元素没有父元素的话，就设置为 stretch。**默认值**
* flex-start：flex 元素会对齐到 cross-axis 的首端。
* flex-end：flex 元素会对齐到 cross-axis 的尾端。
* center：flex 元素会对齐到 cross-axis 的中间，如果该元素的 cross-size 的尺寸大于 flex 容器，将在两个方向均等溢出。
* baseline：所有的 flex 元素会沿着基线对齐。
* stretch：flex 元素将会基于容器的宽和高，按照自身 margin box 的 cross-size 拉伸。

![align-self](/img/align-self.png)

### flex

> 规定了弹性元素如何伸长或缩短以适应 flex 容器中的可用空间。这是一个简写属性，可以同时设置 flex-grow, flex-shrink 与 flex-basis。**适用于：弹性项目**，下述常用值：

* auto：元素会根据自身的宽度与高度来确定尺寸，但是会自行伸长以吸收 flex 容器中额外的自由空间，也会缩短至自身最小尺寸以适应容器。这相当于将属性设置为 "flex: 1 1 auto"。
* initial：属性默认值， 元素会根据自身宽高设置尺寸。它会缩短自身以适应容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应容器 。相当于将属性设置为"flex: 0 1 auto"。
* none：元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"flex: 0 0 auto"。
* positive-number：元素会被赋予一个容器中自由空间的指定占比。这相当于设置属性为"flex: 1 0"。
* 默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的 min-width 与 min-height 属性。

#### flex-grow

> 定义弹性盒子项（flex item）的拉伸因子。**适用于：弹性项目**，值为 number，负值无效。

![flex-grow](/img/flex-grow.png)

#### flex-shrink

> 指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。**适用于：弹性项目**，值为 number，负值无效。

![flex-shrink](/img/flex-shrink.png)

#### flex-basis

> 指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing 来改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的宽或者高（取决于主轴的方向）的尺寸大小。**适用于：弹性项目**：

* auto：项目的内容大小由 width 属性决定
* number：项目的内容大小由 flex-basis 属性决定

![flex-basis](/img/flex-basis.png)

### order

> 属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。

![order](/img/order.png)
