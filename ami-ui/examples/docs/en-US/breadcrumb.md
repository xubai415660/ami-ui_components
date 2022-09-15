## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `ami-breadcrumb`, each `ami-breadcrumb-item` is a tag that stands for every level starting from homepage.
This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<ami-breadcrumb separator="/">
  <ami-breadcrumb-item :to="{ path: '/' }">homepage</ami-breadcrumb-item>
  <ami-breadcrumb-item><a href="/">promotion management</a></ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion list</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion detail</ami-breadcrumb-item>
</ami-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<ami-breadcrumb separator-class="ami-icon-arrow-right">
  <ami-breadcrumb-item :to="{ path: '/' }">homepage</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion management</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion list</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion detail</ami-breadcrumb-item>
</ami-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





