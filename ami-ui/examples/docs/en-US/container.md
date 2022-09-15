## Container
Container components for scaffolding basic structure of the page:

`<ami-container>`: wrapper container. When nested with a `<ami-header>` or `<ami-footer>`, all its child elements will
be vertically arranged. Otherwise horizontally.

`<ami-header>`: container for headers.

`<ami-aside>`: container for side sections (usually a side nav).

`<ami-main>`: container for main sections.

`<ami-footer>`: container for footers.

:::tip These components use flex for layout, so please make sure your browser supports it. Besides, `<ami-container>`'s
direct child elements have to be one or more of the latter four components. And father element of the latter four
components must be a `<ami-container>`.
:::

### Common layouts

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

### Example

:::demo

```html
<ami-container style="height: 500px; border: 1px solid #eee">
  <ami-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <ami-menu :default-openeds="['1', '3']">
      <ami-submenu index="1">
        <template slot="title"><i class="ami-icon-message"></i>Navigator One</template>
        <ami-menu-item-group>
          <template slot="title">Group 1</template>
          <ami-menu-item index="1-1">Option 1</ami-menu-item>
          <ami-menu-item index="1-2">Option 2</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="Group 2">
          <ami-menu-item index="1-3">Option 3</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="1-4">
          <template slot="title">Option4</template>
          <ami-menu-item index="1-4-1">Option 4-1</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
      <ami-submenu index="2">
        <template slot="title"><i class="ami-icon-menu"></i>Navigator Two</template>
        <ami-menu-item-group>
          <template slot="title">Group 1</template>
          <ami-menu-item index="2-1">Option 1</ami-menu-item>
          <ami-menu-item index="2-2">Option 2</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="Group 2">
          <ami-menu-item index="2-3">Option 3</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="2-4">
          <template slot="title">Option 4</template>
          <ami-menu-item index="2-4-1">Option 4-1</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
      <ami-submenu index="3">
        <template slot="title"><i class="ami-icon-setting"></i>Navigator Three</template>
        <ami-menu-item-group>
          <template slot="title">Group 1</template>
          <ami-menu-item index="3-1">Option 1</ami-menu-item>
          <ami-menu-item index="3-2">Option 2</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="Group 2">
          <ami-menu-item index="3-3">Option 3</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="3-4">
          <template slot="title">Option 4</template>
          <ami-menu-item index="3-4-1">Option 4-1</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
    </ami-menu>
  </ami-aside>
  
  <ami-container>
    <ami-header style="text-align: right; font-size: 12px">
      <ami-dropdown>
        <i class="ami-icon-setting" style="margin-right: 15px"></i>
        <ami-dropdown-menu slot="dropdown">
          <ami-dropdown-item>View</ami-dropdown-item>
          <ami-dropdown-item>Add</ami-dropdown-item>
          <ami-dropdown-item>Delete</ami-dropdown-item>
        </ami-dropdown-menu>
      </ami-dropdown>
      <span>Tom</span>
    </ami-header>
    
    <ami-main>
      <ami-table :data="tableData">
        <ami-table-column prop="date" label="Date" width="140">
        </ami-table-column>
        <ami-table-column prop="name" label="Name" width="120">
        </ami-table-column>
        <ami-table-column prop="address" label="Address">
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
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
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
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `ami-header` or `ami-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |
