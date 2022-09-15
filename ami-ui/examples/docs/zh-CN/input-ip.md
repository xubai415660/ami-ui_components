## InputIp ip输入框
通过键盘输入ipv4地址。
`无法输入英文，数字大于255的自动转换`
### 基础用法

`v-model`通过v-model来绑定数据

:::demo `v-model`通过v-model来绑定数据

```html
<div style="width:240px">
  <ami-input-ip v-model="inputIp"></ami-input-ip>
</div>
<script>
  export default {
    data(){
      return{
        inputIp:"192.168.1.3"
      }
    }
  }
</script>

```
:::

### 禁用状态

通过 `disabled` 属性指定是否禁用 ami-input-ip 组件

:::demo 通过 `disabled` 属性指定是否禁用 ami-input-ip 组件

```html
<div style="width: 240px;">
  <ami-input-ip v-model="inputIp" disabled></ami-input-ip>
</div>
<script>
  export default {
    data(){
      return{
        inputIp:""
      }
    }
  }
</script>

```
:::


### 只读

使用`readonly`属性即可得到一个只读的输入框

:::demo 使用`readonly`属性即可得到一个只读的输入框

```html
<div style="width: 240px;">
  <ami-input-ip v-model="inputIp" readonly></ami-input-ip>
</div>
<script>
  export default {
    data(){
      return{
        inputIp:"192.168.0.1"
      }
    }
  }
</script>

```
:::


### 尺寸

使用`size`属性即可控制输入框的大小, 支持输入默认和`large`、`small`、`mini`.

:::demo 使用`size`属性即可控制输入框的大小, 支持输入默认和`large`、`small`、`mini`.

```html
<div style="width: 240px;">
  <ami-input-ip v-model="inputIp" size="large"></ami-input-ip>
</div>

<div style="width: 240px;">
  <ami-input-ip v-model="inputIp" size="small"></ami-input-ip>
</div>

<div style="width: 240px;">
  <ami-input-ip v-model="inputIp" size="mini"></ami-input-ip>
</div>
<script>
  export default {
    data(){
      return{
        inputIp:"192.168.0.1"
      }
    }
  }
</script>

```
:::



### 返回格式

使用`formatStyle`属性即可控制返回值的格式, 支持输入`node`、`noNod`e, 默认为`node`。   

`node` 返回格式`为xxx.xxx.xxx.xxx`, `noNode`返回格式为`xxxxxxxxxxxx`此格式不足字符用0填充。

:::demo

```html
<div style="width: 240px">
  <ami-input-ip v-model="inputip"></ami-input-ip>
</div>
<span>返回值为：{{inputip}}</span>

<div style="width: 240px;margin-top:20px;">
  <ami-input-ip v-model="ipNoNode" :formatStyle="'noNode'"></ami-input-ip>
  <span>返回值为：{{ipNoNode}}</span>
</div> 
<script>
  export default {
    data(){
      return{
        inputip: '',
        ipNoNode: ''
      }
    }
  }
</script>

```
:::

### Attributes
| 参数        | 说明         | 类型      | 可选值                 | 默认值 |
|-----------|------------|----------|---------------------|--|
| v-model   | 双向绑定(绑定数据) | String | —                   | 空 |
| disabled  | 禁用（是否禁止编辑） | Boolean | true / false        | false |
| readonly  | 只读         | boolean |true / false                   | false |
| size      | 输入框尺寸      | String | 	large / small / mini        | -- |
| formatStyle | 设置返回值类型    | String   | node / noNode                 | node |


### Input Events
| 事件说明  | 说明                                | 回调参数 |
|-------|-----------------------------------|------|
| clear | 在点击由 clearable 属性生成的清空按钮时触发（默认选中） | ——   |
