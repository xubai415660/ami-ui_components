## OnlineExcel 在线表格
`luckysheet`在线文档`https://mengshukeji.gitee.io/luckysheetdocs/zh/`

使用时需要在`index.html`文件中引入 

只支持xlsx类型文件
```html
<link rel='stylesheet' href='/ami/cdn/lucky-sheet/2.1.13/plugins/css/pluginsCss.css' />
<link rel='stylesheet' href='/ami/cdn/lucky-sheet/2.1.13/plugins/plugins.css' />
<link rel='stylesheet' href='/ami/cdn/lucky-sheet/2.1.13/css/luckysheet.css' />
<link rel='stylesheet' href='/ami/cdn/lucky-sheet/2.1.13/assets/iconfont/iconfont.css' />
<script src="/ami/cdn/lucky-sheet/2.1.13/plugins/js/plugin.js"></script>
<script src="/ami/cdn/lucky-sheet/2.1.13/luckysheet.umd.js"></script>
<script  src="/ami/cdn/lucky-excel/0.0.1/luckyexcel.umd.js"></script>
```

### 基础

:::demo `luckysheet`为在线表格实例 可直接使用,第一次上传后需要销毁组件 在进行上传，否则表格数据不会更新
```html
<template>
  <div style="width: 100%;height: 100%">
      <ami-row>
        <ami-col :span="4">   
          <ami-upload
          accept="xlsx"
          action=""
          :on-change="importExcel"
          :show-file-list="false"
          :auto-upload="false"
          :limit="1"
        >
          <ami-button type="primary">点击上传</ami-button>
        </ami-upload>
      </ami-col>
        <ami-col :span="4"> 
          <ami-button type="primary" @click="getLuckysheet"> 获取实例 </ami-button>
        </ami-col>
      </ami-row>
    <ami-online-excel style="height: 600px;width: 100%" ref="online" :file="file"  @get-data="getData">
    </ami-online-excel>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        file:null
      }
    },
    methods: {
      importExcel(file) {
        this.$refs.online.destroy()
        console.log('file===>',file)
        this.file = file
        this.$nextTick(()=>{
          this.$refs.online.importExcel()
        })
      },
      //blob 文件预览
      // onlineFilePreview(){
      // res.data 后台二进制数据流
      // const fileBlob = new Blob([res.data], { type: "application/xlsx" });
      // this.file.raw = window.URL.createObjectURL(fileBlob);   // 传给子组件raw数据
      // 
      // },
      getData(data){
        console.log('获取数据==>',data)
        // 通过方法获取数据
        console.log('获取数据==>',this.$refs.online.getData())
        console.log('获取表格所有信息>',this.$refs.online.luckysheetAll())
        
      },
      getLuckysheet(){
        console.log('获取实例=====>',luckysheet)
      }
    }
  }
</script>
```
:::
### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| id        | 创建表格唯一节点       | String | — | uuid（内部生成唯一值） |
| file    | 选择的文件  详见下面props（同上传组件中文件）       | Object | — | — |
| luckyObject    | 在线表格配置（同luckysheet）     | Object | — | — |
| allowEdit    | 是否可以编辑（同luckysheet）     | boolean | — | false(不可编辑) |

### props
| 参数       | 说明                | 类型     | 可选值  | 默认值  |
| -------- | ----------------- | ------ | ---- | ---- |
| raw    | 上传文件（同上传组件中文件） | file | —    | —    |
| name    | 文件名，带文件扩展名 | String | —    | —    |

### Events
| 事件名       | 说明                | 参数     | 
| -------- | ----------------- | ------ |
| getData    | 获取表格数据(点击在线表格右上角保存按钮触发) | data |

### Methods
| 方法名       | 说明                | 参数     | 
| -------- | ----------------- | ------ |
| onlineFilePreview    | 通过接口获取后台表格文件后展示 | - |
| importExcel          | 通过前端上传表格文件后展示 | - |
| getData              |获取表格数据       | -　｜
｜luckysheetAll　　　　｜　获取实例　｜　　-　｜
