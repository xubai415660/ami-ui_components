## Popconfirm 

A simple confirmation dialog of an element click action.

### Basic usage

Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.

:::demo Only `title` attribute is avaliable in Popconfirm, `content` will be ignored.
```html
<template>
<ami-popconfirm
  title="Are you sure to delete this?"
>
  <ami-button slot="reference">Delete</ami-button>
</ami-popconfirm>
</template>
````
:::

### Customise
You can customise Popconfirm like:
:::demo

```html
<template>
<ami-popconfirm
  confirm-button-text='OK'
  cancel-button-text='No, Thanks'
  icon="ami-icon-info"
  icon-color="red"
  title="Are you sure to delete this?"
>
  <ami-button slot="reference">Delete</ami-button>
</ami-popconfirm>
</template>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  title              | Title | String | — | — |
|  confirm-button-text              | Confirm button text | String | — | — |
|  cancel-button-text              | Cancel button text | String | — | — |
|  confirm-button-type              | Confirm button type | String | — | Primary |
|  cancel-button-type              | Cancel button type | String | — | Text |
|  icon              | Icon | String | — | ami-icon-question |
|  icon-color              | Icon color | String | — | #f90 |
|  hide-icon              | is hide Icon | Boolean | — | false |

### Slot
| Name | Description |
|--- | ---|
| reference | HTML element that triggers Popconfirm |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| confirm | triggers when click confirm button | — |
| cancel | triggers when click cancel button | — |
