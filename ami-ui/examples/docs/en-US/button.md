## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<ami-row>
  <ami-button>Default</ami-button>
  <ami-button type="primary">Primary</ami-button>
  <ami-button type="success">Success</ami-button>
  <ami-button type="info">Info</ami-button>
  <ami-button type="warning">Warning</ami-button>
  <ami-button type="danger">Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button plain>Plain</ami-button>
  <ami-button type="primary" plain>Primary</ami-button>
  <ami-button type="success" plain>Success</ami-button>
  <ami-button type="info" plain>Info</ami-button>
  <ami-button type="warning" plain>Warning</ami-button>
  <ami-button type="danger" plain>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button round>Round</ami-button>
  <ami-button type="primary" round>Primary</ami-button>
  <ami-button type="success" round>Success</ami-button>
  <ami-button type="info" round>Info</ami-button>
  <ami-button type="warning" round>Warning</ami-button>
  <ami-button type="danger" round>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button icon="ami-icon-search" circle></ami-button>
  <ami-button type="primary" icon="ami-icon-edit" circle></ami-button>
  <ami-button type="success" icon="ami-icon-check" circle></ami-button>
  <ami-button type="info" icon="ami-icon-message" circle></ami-button>
  <ami-button type="warning" icon="ami-icon-star-off" circle></ami-button>
  <ami-button type="danger" icon="ami-icon-delete" circle></ami-button>
</ami-row>
```
:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<ami-row>
  <ami-button disabled>Default</ami-button>
  <ami-button type="primary" disabled>Primary</ami-button>
  <ami-button type="success" disabled>Success</ami-button>
  <ami-button type="info" disabled>Info</ami-button>
  <ami-button type="warning" disabled>Warning</ami-button>
  <ami-button type="danger" disabled>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button plain disabled>Plain</ami-button>
  <ami-button type="primary" plain disabled>Primary</ami-button>
  <ami-button type="success" plain disabled>Success</ami-button>
  <ami-button type="info" plain disabled>Info</ami-button>
  <ami-button type="warning" plain disabled>Warning</ami-button>
  <ami-button type="danger" plain disabled>Danger</ami-button>
</ami-row>
```
:::

### Text Button

Buttons without border and background.

:::demo

```html
<ami-button type="text">Text Button</ami-button>
<ami-button type="text" disabled>Text Button</ami-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<ami-button type="primary" icon="ami-icon-edit"></ami-button>
<ami-button type="primary" icon="ami-icon-share"></ami-button>
<ami-button type="primary" icon="ami-icon-delete"></ami-button>
<ami-button type="primary" icon="ami-icon-search">Search</ami-button>
<ami-button type="primary">Upload<i class="ami-icon-upload ami-icon-right"></i></ami-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<ami-button-group>` to group your buttons.

```html
<ami-button-group>
  <ami-button type="primary" icon="ami-icon-arrow-left">Previous Page</ami-button>
  <ami-button type="primary">Next Page<i class="ami-icon-arrow-right ami-icon-right"></i></ami-button>
</ami-button-group>
<ami-button-group>
  <ami-button type="primary" icon="ami-icon-edit"></ami-button>
  <ami-button type="primary" icon="ami-icon-share"></ami-button>
  <ami-button type="primary" icon="ami-icon-delete"></ami-button>
</ami-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<ami-button type="primary" :loading="true">Loading</ami-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<ami-row>
  <ami-button>Default</ami-button>
  <ami-button size="medium">Medium</ami-button>
  <ami-button size="small">Small</ami-button>
  <ami-button size="mini">Mini</ami-button>
</ami-row>
<ami-row>
  <ami-button round>Default</ami-button>
  <ami-button size="medium" round>Medium</ami-button>
  <ami-button size="small" round>Small</ami-button>
  <ami-button size="mini" round>Mini</ami-button>
</ami-row>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |
