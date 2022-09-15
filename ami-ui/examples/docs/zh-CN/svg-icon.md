## SvgIcon svg图标



### 基础用法
### 使用方法

直接通过设置类名为 `name` 来使用即可。例如：

:::demo

```html
<ami-svg-icon name="ami-icon-svg-excel"></ami-svg-icon>
<ami-svg-icon name="ami-icon-svg-pdf"></ami-svg-icon>
<ami-svg-icon name="ami-icon-svg-word"></ami-svg-icon>

```
:::

### 图标集合
<div class="svg-icon">
  <div v-for="i in $iconfont" :key="i.name">
    <h1 class="svg-icon-title">{{i.description}}</h1>
    <div class="svg-icon-list">
      <div class="icon-list-li" v-for="item in i.glyphs" :key="item.font_class">
        <div class="svg-icon-svg">
          <ami-svg-icon class="svg-icon-icon" :name="'ami-icon-svg-'+item.font_class"></ami-svg-icon>
          <div class="svg-icon-name">{{'ami-icon-svg-' + item.font_class}}</div>
        </div>
      </div>
    </div>
  </div>
</div>

