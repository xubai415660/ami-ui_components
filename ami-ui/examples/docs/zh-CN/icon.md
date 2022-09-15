## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `ami-icon-iconName` 来使用即可。例如：

:::demo

```html
<i class="ami-icon-edit"></i>
<i class="ami-icon-share"></i>
<i class="ami-icon-delete"></i>
<ami-button type="primary" icon="ami-icon-search">搜索</ami-button>

```
:::

### 图标集合

#### iconfont在线图标

地址还需在项目中引入 
在 `index.html` 文件中引入 `<link rel="stylesheet" href="/ami/cdn/icon/font-class/iconfont.css"/>`

<ul class="icon-list">
  <li v-for="(item,index) in $fontJson.glyphs" :key="index">
    <span>
      <i  :class="$fontJson.css_prefix_text + item.font_class"></i>
        <span class="icon-name">{{ item.name}}</span><br/>
        <span class="icon-name">{{$fontJson.css_prefix_text + item.font_class}}</span>
    </span>
  </li>
</ul>



#### ami-ui 自带图标
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'ami-icon-' + name"></i>
      <span class="icon-name">{{'ami-icon-' + name}}</span>
    </span>
  </li>
</ul>


