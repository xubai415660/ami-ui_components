## Descriptions

Display multiple fields in list form.

### Basic usage

:::demo

```html
<ami-descriptions title="User Info">
    <ami-descriptions-item label="Username">kooriookami</ami-descriptions-item>
    <ami-descriptions-item label="Telephone">18100000000</ami-descriptions-item>
    <ami-descriptions-item label="Place">Suzhou</ami-descriptions-item>
    <ami-descriptions-item label="Remarks">
      <ami-tag size="small">School</ami-tag>
    </ami-descriptions-item>
    <ami-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</ami-descriptions-item>
</ami-descriptions>
```
:::

### Sizes

:::demo

```html
<template>
  <ami-radio-group v-model="size">
    <ami-radio label="">Default</ami-radio>
    <ami-radio label="medium">Medium</ami-radio>
    <ami-radio label="small">Small</ami-radio>
    <ami-radio label="mini">Mini</ami-radio>
  </ami-radio-group>

  <ami-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
    <template slot="extra">
      <ami-button type="primary" size="small">Operation</ami-button>
    </template>
    <ami-descriptions-item>
      <template slot="label">
        <i class="ami-icon-user"></i>
        Username
      </template>
      kooriookami
    </ami-descriptions-item>
    <ami-descriptions-item>
      <template slot="label">
        <i class="ami-icon-mobile-phone"></i>
        Telephone
      </template>
      18100000000
    </ami-descriptions-item>
    <ami-descriptions-item>
      <template slot="label">
        <i class="ami-icon-location-outline"></i>
        Place
      </template>
      Suzhou
    </ami-descriptions-item>
    <ami-descriptions-item>
      <template slot="label">
        <i class="ami-icon-tickets"></i>
        Remarks
      </template>
      <ami-tag size="small">School</ami-tag>
    </ami-descriptions-item>
    <ami-descriptions-item>
      <template slot="label">
        <i class="ami-icon-office-building"></i>
        Address
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </ami-descriptions-item>
  </ami-descriptions>

  <ami-descriptions class="margin-top" title="Without border" :column="3" :size="size">
    <template slot="extra">
      <ami-button type="primary" size="small">Operation</ami-button>
    </template>
    <ami-descriptions-item label="Username">kooriookami</ami-descriptions-item>
    <ami-descriptions-item label="Telephone">18100000000</ami-descriptions-item>
    <ami-descriptions-item label="Place">Suzhou</ami-descriptions-item>
    <ami-descriptions-item label="Remarks">
      <ami-tag size="small">School</ami-tag>
    </ami-descriptions-item>
    <ami-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</ami-descriptions-item>
  </ami-descriptions>
</template>

<script>
  export default {
    data () {
      return {
        size: ''
      };
    }
  }
</script>
```
:::

### Vertical List

:::demo

```html
<ami-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
  <ami-descriptions-item label="Username">kooriookami</ami-descriptions-item>
  <ami-descriptions-item label="Telephone">18100000000</ami-descriptions-item>
  <ami-descriptions-item label="Place" :span="2">Suzhou</ami-descriptions-item>
  <ami-descriptions-item label="Remarks">
    <ami-tag size="small">School</ami-tag>
  </ami-descriptions-item>
  <ami-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</ami-descriptions-item>
</ami-descriptions>

<ami-descriptions class="margin-top" title="Vertical list without border" :column="4" direction="vertical">
  <ami-descriptions-item label="Username">kooriookami</ami-descriptions-item>
  <ami-descriptions-item label="Telephone">18100000000</ami-descriptions-item>
  <ami-descriptions-item label="Place" :span="2">Suzhou</ami-descriptions-item>
  <ami-descriptions-item label="Remarks">
    <ami-tag size="small">School</ami-tag>
  </ami-descriptions-item>
  <ami-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</ami-descriptions-item>
</ami-descriptions>
```
:::

### Customized Style

:::demo

```html
<ami-descriptions title="Customized style list" :column="3" border>
  <ami-descriptions-item label="Username" label-class-name="my-label" content-class-name="my-content">kooriookami</ami-descriptions-item>
  <ami-descriptions-item label="Telephone">18100000000</ami-descriptions-item>
  <ami-descriptions-item label="Place">Suzhou</ami-descriptions-item>
  <ami-descriptions-item label="Remarks">
    <ami-tag size="small">School</ami-tag>
  </ami-descriptions-item>
  <ami-descriptions-item label="Address" :content-style="{'text-align': 'right'}">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</ami-descriptions-item>
</ami-descriptions>
<style>
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
</style>
```
:::

### Descriptions Attributes
| Attribute     | Description       | Type       | Accepted Values        | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| border        | with or without border      | boolean  |          —             |    false     |
| column        | numbers of `Descriptions Item` in one line  | number | — |    3  |
| direction     | direction of list  | string | vertical / horizontal |    horizontal  |
| size          | size of list    | string  |    medium / small / mini  |  — |
| title         | title text, display on the top left    | string  |    —  |  — |
| extra         | extra text, display on the top right    | string  |    —  |  — |
| colon | change default props colon value of Descriptions Item   | boolean |    —  |  true |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Slots

| Name | Description |
|------|--------|
| title | custom title, display on the top left  |
| extra | custom extra area, display on the top right  |

### Descriptions Item Attributes
| Attribute       | Description        | Type       | Accepted Values       | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| label          | label text         | string  |          —             |    —     |
| span          | colspan of column       | number  |          —             |    1     |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Item Slots

| Name | Description |
|------|--------|
| label | custom label  |
