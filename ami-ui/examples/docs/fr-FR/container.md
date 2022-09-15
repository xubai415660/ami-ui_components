## Container
Les composants Container servent à structurer la page:

`<ami-container>`: Conteneur de wrapping. Quand il est placé à l'intérieur de `<ami-header>` ou `<ami-footer>`, tous les
éléments enfants seront placés verticalement. Dans le cas contraire ils seront placés horizontalement.

`<ami-header>`: Conteneur pour headers.

`<ami-aside>`: Conteneur pour section latérale (en général un menu).

`<ami-main>`: Conteneur pour la section principal.

`<ami-footer>`: Conteneur pour footers.

:::tip Ces composants utilisent flexbox, assurez vous que le navigateur supporte cette fonctionnalité. De plus, les
éléments enfants directs de `<ami-container>` doivent être un des quatre éléments précédents, leur élément père devant
obligatoirement être `<ami-container>`.
:::

### Mises en page habituelles

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

### Exemple

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

### Attributs de Container
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | Direction d'affichage pour les éléments enfants. | string | horizontal / vertical | vertical quand dans `ami-header` ou `ami-footer`; horizontal sinon |

### Attributs de Header
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du header. | string | — | 60px |

### Attributs de Aside
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | Largeur de la section. | string | — | 300px |

### Attributs de Footer
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du footer. | string | — | 60px |
