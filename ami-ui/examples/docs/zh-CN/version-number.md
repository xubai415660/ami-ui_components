##  VersionNumber 版本号输入框
用来显示版本号
通过对`ami-input`组合封装形成，支持 `ami-input`的属性（不支持事件，每个输入框同时绑定）


### 基础展示

:::demo 
```html
<ami-version-number v-model="version"   maxlength="2" clearable></ami-version-number>
<script>
  export default {
    data() {
      return {
        version:'1.2.3'
      };
    },
    methods: {
   
    }
  }
</script>
```
:::

### Attribute
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model/value | 绑定值 | string | — | — |
| separator | 每个数字之间的分隔符 | string | — | . |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否显示清空按钮 | boolean | — | true |
| VPrefix | 前缀版本类型 | String | — | V |
