## TableHeaderSet 设置表头

### 基础表格

用于表格表头设置时使用

:::demo `columns`中`type='selection'`进行隐藏，`columns`中`disabledSet` 会设置一直被选中状态且不能被移动位置ååå
```html
<template>
 <ami-button  icon="ami-icon-s-tools" round type="primary" @click="set()">设置</ami-button>
    <ami-table-header-set
      ref="set"
      :columns="columns"
      :checkList="checkList"
      :headerSelectVisible.sync="headerSelectVisible"
      @getColumns="getColumns"
    >
    </ami-table-header-set>
</template>
<script>
  export default {
    data(){
      return{
        headerSelectVisible:false,
        columns: [
          {
            label: "被隐藏",
            key: "selection",
            type: "selection",
          },
          {
            label: "序号",
            key: "index",
            type: "index",
            disabledSet:true,  //一直选中，不能被反选，且不可拖动
          },
          {
            label: "id",
            key: "id",
          },
          {
            label: "uid",
            key: "uid",
          },
          {
            label: "ip",
            key: "ip",
          },
          {
            label: "邮件",
            key: "mail",
          },
          {
            label: "标题",
            key: "title",
            disabledSet:true,
          },
          {
            label: "文章",
            key: "sentence",
          },
          {
            label: "状态",
            key: "status",
          },
          {
            label: "开关",
            key: "bl",
          },
          {
            label: "地址",
            key: "county",
          },
          {
            label: "颜色",
            key: "rgba",
          },
          {
            label: "数字",
            key: "float",
          },
          {
            label: "natural",
            key: "natural",
          },
          {
            label: "开始时间",
            key: "startTime",
          },
          {
            label: "状态",
            key: "workStatus",
          },
          {
            label: "统计日期",
            key: "date",
          },
        ],
        checkList:[ 
          {
          label: "被隐藏",
          key: "selection",
          type: "selection",
        },
          {
            label: "序号",
            key: "index",
            type: "index",
            disabledSet:true,  //一直选中，不能被反选，且不可拖动
          },
          {
            label: "id",
            key: "id",
          }]
      }
    },
    methods:{
      set(){
        this.$nextTick(() => {
          this.$refs['set'].init();
          this.headerSelectVisible = true;
          });
      },
      getColumns(val){
        console.log(val)

      }
    }
  }
</script>
```
:::

###  Attributes
| 参数         | 说明                               | 类型       | 可选值      | 默认值                       |
|------------|----------------------------------|----------|-------------  |---------------------------|
| headerSelectVisible	   | 是否显示支持 .sync 修饰符	                | boolean	 | — | 	false                    |
| columns | 表头数组，详见columns 	 | array	   | — | 	—  |
| checkList    | 选中表头数组，详见columns                          |              array                   |     —    | —                         |


### Columns
| 参数    | 说明                         | 类型       | 可选值 | 默认值                       |
|-------|----------------------------|----------|-----|---------------------------|
| label | 	指定节点标签为节点对象的某个属性值（必填）     | string | —   |  — |
| key   | 	指定节点标签为节点对象的某个属性值唯一值 （必填） | string | —   |  — |
| type  | 	配合hiddenList进行隐藏（选填）      | string | —   |  — |


###  Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getColumns | 点击确认按钮时触发，获取选中表头数据 | list |
