## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<ami-container>`：外层容器。当子元素中包含 `<ami-header>` 或 `<ami-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<ami-header>`：顶栏容器。

`<ami-aside>`：侧边栏容器。

`<ami-main>`：主要区域容器。

`<ami-footer>`：底栏容器。

:::tip 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<ami-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<ami-container>`。
:::

### 常见页面布局

:::demo

```html
<ami-container>
  <ami-header>Header</ami-header>
  <ami-main>Main</ami-main>
</ami-container>

<ami-container>
  <ami-header>Header</ami-header>
  <ami-main>Main</ami-main>
  <ami-footer>Footer</ami-footer>
</ami-container>

<ami-container>
  <ami-aside width="200px">Aside</ami-aside>
  <ami-main>Main</ami-main>
</ami-container>

<ami-container>
  <ami-header>Header</ami-header>
  <ami-container>
    <ami-aside width="200px">Aside</ami-aside>
    <ami-main>Main</ami-main>
  </ami-container>
</ami-container>

<ami-container>
  <ami-header>Header</ami-header>
  <ami-container>
    <ami-aside width="200px">Aside</ami-aside>
    <ami-container>
      <ami-main>Main</ami-main>
      <ami-footer>Footer</ami-footer>
    </ami-container>
  </ami-container>
</ami-container>

<ami-container>
  <ami-aside width="200px">Aside</ami-aside>
  <ami-container>
    <ami-header>Header</ami-header>
    <ami-main>Main</ami-main>
  </ami-container>
</ami-container>

<ami-container>
  <ami-aside width="200px">Aside</ami-aside>
  <ami-container>
    <ami-header>Header</ami-header>
    <ami-main>Main</ami-main>
    <ami-footer>Footer</ami-footer>
  </ami-container>
</ami-container>

<style>
  .ami-header, .ami-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .ami-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .ami-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .ami-container {
    margin-bottom: 40px;
  }
  
  .ami-container:nth-child(5) .ami-aside,
  .ami-container:nth-child(6) .ami-aside {
    line-height: 260px;
  }
  
  .ami-container:nth-child(7) .ami-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo

```html
<ami-container style="height: 500px; border: 1px solid #eee">
  <ami-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <ami-menu :default-openeds="['1', '3']">
      <ami-submenu index="1">
        <template slot="title"><i class="ami-icon-message"></i>导航一</template>
        <ami-menu-item-group>
          <template slot="title">分组一</template>
          <ami-menu-item index="1-1">选项1</ami-menu-item>
          <ami-menu-item index="1-2">选项2</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="分组2">
          <ami-menu-item index="1-3">选项3</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="1-4">
          <template slot="title">选项4</template>
          <ami-menu-item index="1-4-1">选项4-1</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
      <ami-submenu index="2">
        <template slot="title"><i class="ami-icon-menu"></i>导航二</template>
        <ami-menu-item-group>
          <template slot="title">分组一</template>
          <ami-menu-item index="2-1">选项1</ami-menu-item>
          <ami-menu-item index="2-2">选项2</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="分组2">
          <ami-menu-item index="2-3">选项3</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="2-4">
          <template slot="title">选项4</template>
          <ami-menu-item index="2-4-1">选项4-1</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
      <ami-submenu index="3">
        <template slot="title"><i class="ami-icon-setting"></i>导航三</template>
        <ami-menu-item-group>
          <template slot="title">分组一</template>
          <ami-menu-item index="3-1">选项1</ami-menu-item>
          <ami-menu-item index="3-2">选项2</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="分组2">
          <ami-menu-item index="3-3">选项3</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="3-4">
          <template slot="title">选项4</template>
          <ami-menu-item index="3-4-1">选项4-1</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
    </ami-menu>
  </ami-aside>
  
  <ami-container>
    <ami-header style="text-align: right; font-size: 12px">
      <ami-dropdown>
        <i class="ami-icon-setting" style="margin-right: 15px"></i>
        <ami-dropdown-menu slot="dropdown">
          <ami-dropdown-item>查看</ami-dropdown-item>
          <ami-dropdown-item>新增</ami-dropdown-item>
          <ami-dropdown-item>删除</ami-dropdown-item>
        </ami-dropdown-menu>
      </ami-dropdown>
      <span>王小虎</span>
    </ami-header>
    
    <ami-main>
      <ami-table :data="tableData">
        <ami-table-column prop="date" label="日期" width="140">
        </ami-table-column>
        <ami-table-column prop="name" label="姓名" width="120">
        </ami-table-column>
        <ami-table-column prop="address" label="地址">
        </ami-table-column>
      </ami-table>
    </ami-main>
  </ami-container>
</ami-container>

<style>
  .ami-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .ami-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `ami-header` 或 `ami-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
