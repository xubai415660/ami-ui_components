## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `ami-icon-iconName`.

:::demo

```html
<i class="ami-icon-edit"></i>
<i class="ami-icon-share"></i>
<i class="ami-icon-delete"></i>
<ami-button type="primary" icon="ami-icon-search">Search</ami-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'ami-icon-' + name"></i>
      <span class="icon-name">{{'ami-icon-' + name}}</span>
    </span>
  </li>
</ul>
