## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<ami-badge :value="12" class="item">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge :value="3" class="item">
  <ami-button size="small">replies</ami-button>
</ami-badge>
<ami-badge :value="1" class="item" type="primary">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge :value="2" class="item" type="warning">
  <ami-button size="small">replies</ami-button>
</ami-badge>

<ami-dropdown trigger="click">
  <span class="ami-dropdown-link">
    Click Me<i class="ami-icon-caret-bottom ami-icon--right"></i>
  </span>
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item class="clearfix">
      comments
      <ami-badge class="mark" :value="12" />
    </ami-dropdown-item>
    <ami-dropdown-item class="clearfix">
      replies
      <ami-badge class="mark" :value="3" />
    </ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<ami-badge :value="200" :max="99" class="item">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge :value="100" :max="10" class="item">
  <ami-button size="small">replies</ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<ami-badge value="new" class="item">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge value="hot" class="item">
  <ami-button size="small">replies</ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<ami-badge is-dot class="item">query</ami-badge>
<ami-badge is-dot class="item">
  <ami-button class="share-button" icon="ami-icon-share" type="primary"></ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
