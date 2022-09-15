## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
  <ami-link href="https://element.eleme.io" target="_blank">default</ami-link>
  <ami-link type="primary">primary</ami-link>
  <ami-link type="success">success</ami-link>
  <ami-link type="warning">warning</ami-link>
  <ami-link type="danger">danger</ami-link>
  <ami-link type="info">info</ami-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
  <ami-link disabled>default</ami-link>
  <ami-link type="primary" disabled>primary</ami-link>
  <ami-link type="success" disabled>success</ami-link>
  <ami-link type="warning" disabled>warning</ami-link>
  <ami-link type="danger" disabled>danger</ami-link>
  <ami-link type="info" disabled>info</ami-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
  <ami-link :underline="false">Without Underline</ami-link>
  <ami-link>With Underline</ami-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <ami-link icon="ami-icon-edit">Edit</ami-link>
  <ami-link>Check<i class="ami-icon-view ami-icon--right"></i> </ami-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
