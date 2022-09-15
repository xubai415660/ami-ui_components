## Contenedor
Componentes contenedores para iniciar una estructura básica de un sitio:

`<ami-container>`: Contenedor. Cuando este elemento se anida con un `<ami-header>` o `<ami-footer>`, todos los elementos
secundarios se organizan verticalmente. De lo contrario, de forma horizontal.

`<ami-header>`: Contenedor para cabeceras.

`<ami-aside>`: Contenedor para secciones laterales (generalmente, una barra lateral).

`<ami-main>`: Contenedor para sección principal.

`<ami-footer>`: Contenedor para pie de página.

:::tip Estos componentes utilizan flex para el diseño, así que asegúrese que el navegador lo soporta. Además, los
elementos directos de `<ami-container>` tienen que ser uno o más de los últimos cuatro componentes. Y el elemento padre
de los últimos cuatro componentes debe ser un `<ami-container>`.
:::

### Diseños comunes

:::demo

```html
<ami-container>
  <ami-header>Cabecera</ami-header>
  <ami-main>Principal</ami-main>
</ami-container>

<ami-container>
  <ami-header>Cabecera</ami-header>
  <ami-main>Principal</ami-main>
  <ami-footer>Pie de página</ami-footer>
</ami-container>

<ami-container>
  <ami-aside width="200px">Barra lateral</ami-aside>
  <ami-main>Principal</ami-main>
</ami-container>

<ami-container>
  <ami-header>Cabecera</ami-header>
  <ami-container>
    <ami-aside width="200px">Barra lateral</ami-aside>
    <ami-main>Principal</ami-main>
  </ami-container>
</ami-container>

<ami-container>
  <ami-header>Cabecera</ami-header>
  <ami-container>
    <ami-aside width="200px">Barra lateral</ami-aside>
    <ami-container>
      <ami-main>Principal</ami-main>
      <ami-footer>Pie de página</ami-footer>
    </ami-container>
  </ami-container>
</ami-container>

<ami-container>
  <ami-aside width="200px">Barra lateral</ami-aside>
  <ami-container>
    <ami-header>Cabecera</ami-header>
    <ami-main>Principal</ami-main>
  </ami-container>
</ami-container>

<ami-container>
  <ami-aside width="200px">Barra lateral</ami-aside>
  <ami-container>
    <ami-header>Cabecera</ami-header>
    <ami-main>Principal</ami-main>
    <ami-footer>Pie de página</ami-footer>
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

### Ejemplo

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

### Atributos de contenedor
| Atributo  | Descripción                              | Tipo   | Valores aceptados     | Por defecto                              |
| --------- | ---------------------------------------- | ------ | --------------------- | ---------------------------------------- |
| direction | dirección de diseño para elementos secundarios | string | horizontal / vertical | vertical cuando el elemento está anidado con `ami-header`, de lo contrario, horizontal |

### Atributos de cabecera
| Atributo | Descripción           | Tipo   | Valores aceptados | Por defecto |
| -------- | --------------------- | ------ | ----------------- | ----------- |
| height   | altura de la cabecera | string | —                 | 60px        |

### Atributos de barra lateral
| Atributo | Descripción               | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------- | ------ | ----------------- | ----------- |
| width    | ancho de la barra lateral | string | —                 | 300px       |

### Atributos de pie de página
| Atributo | Descripción              | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------ | ------ | ----------------- | ----------- |
| height   | altura del pie de página | string | —                 | 60px        |
