## Radio

Single selection among multiple options.

### Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

:::demo Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `label` of the chosen radio. The type of `label` is `String`, `Number` or `Boolean`.
```html
<template>
  <ami-radio v-model="radio" label="1">Option A</ami-radio>
  <ami-radio v-model="radio" label="2">Option B</ami-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Disabled

`disabled` attribute is used to disable the radio.

:::demo You just need to add the `disabled` attribute.

```html
<template>
  <ami-radio disabled v-model="radio" label="disabled">Option A</ami-radio>
  <ami-radio disabled v-model="radio" label="selected and disabled">Option B</ami-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Radio button group

Suitable for choosing from some mutually exclusive options.

:::demo Combine `ami-radio-group` with `ami-radio` to display a radio group. Bind a variable with `v-model`
of `ami-radio-group` element and set label value in `ami-radio`. It also provides `change` event with the current value
as its parameter.

```html
<ami-radio-group v-model="radio">
  <ami-radio :label="3">Option A</ami-radio>
  <ami-radio :label="6">Option B</ami-radio>
  <ami-radio :label="9">Option C</ami-radio>
</ami-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### Button style

Radio with button styles.

:::demo You just need to change `ami-radio` element into `ami-radio-button` element. We also provide `size` attribute.

```html
<template>
  <div>
    <ami-radio-group v-model="radio1">
      <ami-radio-button label="New York"></ami-radio-button>
      <ami-radio-button label="Washington"></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio2" size="medium">
      <ami-radio-button label="New York" ></ami-radio-button>
      <ami-radio-button label="Washington"></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio3" size="small">
      <ami-radio-button label="New York"></ami-radio-button>
      <ami-radio-button label="Washington" disabled ></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio4" disabled size="mini">
      <ami-radio-button label="New York"></ami-radio-button>
      <ami-radio-button label="Washington"></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
```
:::

### With borders

:::demo The `border` attribute adds a border to Radios.

```html
<template>
  <div>
    <ami-radio v-model="radio1" label="1" border>Option A</ami-radio>
    <ami-radio v-model="radio1" label="2" border>Option B</ami-radio>
  </div>
  <div style="margin-top: 20px">
    <ami-radio v-model="radio2" label="1" border size="medium">Option A</ami-radio>
    <ami-radio v-model="radio2" label="2" border size="medium">Option B</ami-radio>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio3" size="small">
      <ami-radio label="1" border>Option A</ami-radio>
      <ami-radio label="2" border disabled>Option B</ami-radio>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio4" size="mini" disabled>
      <ami-radio label="1" border>Option A</ami-radio>
      <ami-radio label="2" border>Option B</ami-radio>
    </ami-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

### Radio Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
value / v-model | binding value | string / number / boolean | — | —
label | the value of Radio | string / number / boolean | — | —
disabled | whether Radio is disabled | boolean | — | false
border  | whether to add a border around Radio  | boolean   | — | false
size  | size of the Radio, only works when `border` is true  | string  | medium / small / mini | —
name | native 'name' attribute | string    |      —         |     —

### Radio Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-group Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
value / v-model | binding value | string / number / boolean | — | —
size | the size of radio buttons or bordered radios | string | medium / small / mini | —
disabled  | whether the nesting radios are disabled | boolean   | — | false
text-color | font color when button is active | string   | — | #ffffff   |
fill  | border and background color when button is active | string   | — | #0040D0   |

### Radio-group Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-button Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of radio | string / number | — | —
disabled | whether radio is disabled | boolean | — | false
name | native 'name' attribute | string    |      —         |     —
