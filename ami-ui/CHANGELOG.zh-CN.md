# 更新日志

### 0-0-1-beta

#### 文档地址

- [地址一](http://192.168.1.249:8111/cdn/cdns/docs/ami-ui/#/zh-CN/component/changelog) `http://192.168.1.249:8111/cdn/cdns/docs/ami-ui/#/zh-CN/component/changelog`
- [地址二](http://192.168.1.214:16223/ami/cdn/docs/ami-ui/#/zh-CN/component/changelog) `http://192.168.1.214:16223/ami/cdn/docs/ami-ui/#/zh-CN/component/changelog`

#### cdn

- 地址一 `http://192.168.1.249:8111/cdn/cdns`
- 地址二 `http://192.168.1.214:16223/ami/cdn`
  - 代理配置 -
  ```
          proxy: {
              "/ami/cdn": {
                  //  target: "http://192.168.1.249:8111/cdn/cdns", //地址一
                  target: "http://192.168.1.214:16223/ami/cdn",//地址一
                  changeOrigin: true,
                  pathRewrite: {
                      "^/ami/cdn": "",
                  },
              },
            }
  ```
### 2022-7-1

#### 优化组件
- Dialog
  - 弹窗套弹窗 遮罩层
### 2022-6-27

#### 优化组件
- Loading
  - 图标居中

### 2022-6-27

#### 优化组件
- TextEditor
      - axupimgs删除多图上传功能
      - 添加id参数 

### 2022-6-23

#### 新增组件
- LayeredTree
    - 新增
  
### 2022-6-20

#### 优化组件
- TextEditor 富文本编辑器
  - 富文本数据双向绑定
  -id内部生成
- OnlineExcel 
  - id内部生成
  
### 2022-6-14

#### 优化组件
- TextEditor
    - cdn-url默认值修改
  
### 2022-6-13

#### 优化组件
- Transfer 穿梭框
    - 按钮排列方式
#### 新增组件
- ServiceTable 业务表格

### 2022-6-10

#### 优化组件
- Table
    - 展开行箭头问题
  
### 2022-6-9

#### 优化组件
- TableHeaderSet
    - 删除传参~~hiddenList~~
    - ~~visible~~修改为headerSelectVisible
    - 增加参数checkList默认选中
  
### 2022-6-7

#### 优化组件

- OnlineExcel
    - 表格名称  

### 2022-6-2

#### 优化组件

- OnlineExcel
    - 编辑预览状态不显示工具栏

### 2022-5-31

#### 优化组件

- OnlineExcel
    - 添加禁止编辑状态

### 2022-5-30

#### 优化组件

- InputCron
  - 禁用优化，隐藏确定按钮，只显示取消按钮
  - 添加按钮是否为圆角

### 2022-5-26

#### 优化组件

- InputCron
  - 禁用优化，可以查看配置信息
  - 年份调整，区间到下一年

### 2022-5-24

#### 优化组件

- OnlineExcel

  - 添加通过后台获取数据方法
  - 添加通过方法获取数据方法
  - 获取在线表格实例方法

- InputCron
  - 年区间优化,不可以选择今年之前

### 2022-5-20

#### 优化组件

- Steps

  - UI 优化

### 2022-5-20

#### 优化组件

- Checkbox - 修复 label 为 object 时 使用 JSON 造成不能识别 1、11、21 问题
- InputCron
  - 删除预览功能

### 2022-5-12

#### 优化组件

- ModelTitle
  - 装饰条样式
- card

  - 组价圆角

### 2022-5-12

#### 优化组件

- svgIcon
  - 组件图标名称优化
- Empty
  - 优化默认图片
- form
  - error 提示上边距
- OnlineExcel
  - 组件添加获取数据与获取`luckysheet`实例

### 2022-5-11

#### 优化组件

- 优化 z-index 层级

### 2022-5-10

#### 优化组件

- Table
  - 默认展示系统表头

#### 新增组件

- OnlineExcel
  - 初步完成

### 2022-5-9

#### 优化组件

- Pagination

  - 支持显示总页数

### 2022-5-7

#### 优化组件

- CheckBox
  - 选中支持对象

### 2022-5-6

#### 优化组件

- Tabs

  - 选中三角
  - 边框

### 2022-5-5

#### 优化组件

- loading

  - 优化加载中样式

### 2022-5-4

#### 优化组件

- TableHeaderSet

  - 优化选中状态不显示问题

### 2022-4-29

#### 优化组件

- CodeEditor

  - 增加方法编辑器方法

### 2022-4-28

#### 新增组件

- TableHeaderSet
  - 新增组件

### 2022-4-27

#### 优化组件

- upload
  - 文件图标，删除图标支持自定义

### 2022-4-26

#### 优化组件

- Pagination
  - 跳转至文字遮挡
  - 带背景页码圆形
- VersionNumber
  - 支持 form 表单校验规则

### 2022-4-25

#### 新增组件

- CodeEditor

#### 优化组件

- input-ip
  - 清空图标颜色
- VersionNumber
  - 清空图标颜色

### 2022-4-20

#### 新增组件

- video
  - 新增

### 2022-4-14

#### 新增组件

- svg-icon

  - 新增

#### 优化组件

- icon
  - 展示 iconfont 图标（地址还需在项目中引入）

### 2022-4-12

#### 优化组件

- Dialog 对话框

  - titleIcon 是否显示图标

- Message 消息提示

  - 背景色，图标样式

### 2022-4-11

#### 优化组件

- MessageBox 弹框

  - 标题字体
  - 字体图标渐变色

- ModelTitle 模块页头
  - 字体 icon 样式
- Dialog 对话框

  - 边距修改
  - 添加标题头部 icon
  - header 插槽

- Button

  - 修改默认按钮大小

- Form 表单

  - 下边距

- Input

  - 高度

- Card 卡片
  - 间距

### 2022-4-7

#### 完成组件

- TextEditor

#### 优化组件

- InputCron
  - 弹窗内部使用有遮罩层

### 2022-4-6

#### 优化组件

- TextEditor

  - 更改插件引入方式（通过 npm 安装引入的方式，部分插件 npm 包中没有）

- Button

  - 增加成功按钮、信息按钮、警告按钮、危险按钮

- VersionNumber
  - 版本号输入框，中间分隔位置

### 2022-4-1

#### 优化组件

- InputCron

  - 窗口高度，不够时，指定分钟，指定秒高度超出问题
  - 回显分割 bug

- Pagination 分页
  - prev jumper 边框大小

### 2022-3-31

#### 优化组件

- Dropdown 下拉菜单

  - 修复下拉框不弹出问题

#### 文档修复

- Radio 单选框
  - 修复文档禁用状态背景色穿透
- Checkbox 多选框
  - 修复文档禁用状态背景色穿透
- Input 输入框
  - 修复文档禁用状态背景色穿透

### 2022-3-30

#### 新增规划组件

- video 视屏播放器

- WaterMark 水印

- TextEditor 富文本编辑器

- CodeEditor 代码编辑器（SQL）

- GiantTree 大数据量树形控件

- TreeSelect 多选树形控件

- MapBasic 基础地图

- CategorySelection 分类选择器

#### 完成组件

- Clamp
  - 组件完成
- ip 输入框
  - 组件完成
- 版本号输入框
  - 组件完成
- cron 表达式输入框
  - 组件完成
- echarts 基础图表
  - 组件完成
- ModelTitle
  - 组件完成

#### 优化组件

- Draggable

  - 添加多列使用示例
  - 修复多列示例使用时数据双向绑定问题

- Checkbox 多选框
  - 优化复选框禁用状态背景色

### 2022-3-29

#### 新增组件

- model-title
  - 新增
- clamp
  - 新增

#### 优化组件

- input-cron
  - 添加说明文档
