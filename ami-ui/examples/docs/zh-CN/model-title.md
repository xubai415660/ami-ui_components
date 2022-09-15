## ModelTitle 模块页头

如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。

### 基本用法

:::demo 

```html

<template>
  <ami-model-title title="查询条件">
    <ami-button>按钮</ami-button>
  </ami-model-title>
</template>

<script>
  export default {
    methods: {
    
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| title    | 标题名称         | string | — | — |
| borderBottom      | 下边框 | boolean | — | false |
