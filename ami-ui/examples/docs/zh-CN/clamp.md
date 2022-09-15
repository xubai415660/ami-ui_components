## Clamp 文字显示

多行文本展开收起

### 基础用法
在使用ami-clamp组件`autoresize`属性时必须指定宽高，否则会一直渲染，虽然做了防抖但是依旧会造成不必要的性能开销
:::demo `width`宽度 

```html
<ami-clamp autoresize :showtip="false" :maxLines="maxLines" :width="400" :text="text"></ami-clamp>
<script>
  export default {
    data(){
      return{
        text:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时",
        maxLines:2,  //最大行数
      }
    }
  }
</script>
```
:::


### 最大行数
`maxLines`控制行数，最大的行数
:::demo `maxLines`控制行数，最大的行数

```html

<ami-clamp autoresize :showtip="false" :maxLines="maxLines" :width="400" :text="text"></ami-clamp>
<script>
  export default {
    data() {
      return{
        text:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时",
        maxLines:3,  //最大行数
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>
```
:::


### 插槽
`expanded`属性 控制文字展开（收起）
:::demo `before`文字前显示，`after`文字后显示

```html

<ami-clamp autoresize :maxLines="maxLines" :width="600" :text="text" :expanded="expanded">
  <ami-button slot="before" type="primary" size="mini" round>推荐</ami-button>
  <div slot="after">
    <ami-button type="text" @click="clickToggle()">{{expanded ? "收起" : "展开"}}</ami-button>
  </div>
</ami-clamp>
<script>
  export default {
    data() {
      return{
        text:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时",
        maxLines:3,  //最大行数
        expanded:false
      }
    },
    methods: {
      clickToggle() {
        this.expanded = !this.expanded;
      }
    }
  }
</script>
```
:::

### 显示主题色
可以通过`effect`主题颜色，
在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
:::demo `effect`主题颜色，`dark`默认，`light` 白色。`placement`属性值为：`方向-对齐位置`;四个方向：`top`、`left`、`right`、`bottom`;三种对齐位置:`start`, `end`。

```html

<ami-clamp :maxLines="maxLines" :expanded="expanded" :width="600" :text="text" placement="top" effect="light">
  <ami-button slot="before" type="primary" size="mini" round>推荐</ami-button>
  <div slot="after">
    <ami-button type="text" @click="clickToggle()">{{expanded ? "收起" : "展开"}}</ami-button>
  </div>
</ami-clamp>
<script>
  export default {
    data() {
      return{
        text:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动另一方面，当与现代化的工具链以及各种支持类库结合使用时",
        maxLines:3,  //最大行数
        expanded:false,
      }
    },
    methods: {
      clickToggle() {
        this.expanded = !this.expanded;
      }
    }
  }
</script>
```
:::


### Attributes
| 参数        | 说明         | 类型      | 可选值                 | 默认值 |
|-----------|------------|----------|---------------------|--|
| text   | 文本 | String | —                   | 空 |
| maxLines  | 最大行数 | Number | —       | — |
| expanded  | 扩展(显示全部)         | boolean |true / false                   | false |
| showtip      | 显示提示      | boolean | 	—        | false |
| ellipsis      | 省略符号(可自己选择符号)      | String | 	—        | ... |
| effect      | 默认提示的主题      | String | 	dark / light       | dark |
| placement | 文字显隐的出现位置    | String   | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
| width      | 宽度      | Number | 	—        | 	— |
| autoresize      | 自动调整大小      | boolean | 	—        | false |


### Clamp slot
| name  | 说明                                
|-------|-----------------------------------|------|
| before | 文字之前显示内容
| after | 文字之后显示内容