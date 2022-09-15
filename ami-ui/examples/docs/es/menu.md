## NavMenu

Menú que provee la navegación para tu sitio.

### Top bar

Top bar NavMenu puede ser usado en distinto escenarios.

:::demo Por defecto el menú es vertical, pero puede hacerlo horizontal asignando a la propiedad `mode` el valor 'horizontal'. Además, puede utilizar el componente de submenú para crear un menú de segundo nivel. Menú provee `background-color`, `text-color` y `active-text-color` para customizar los colores.

```html
<ami-menu :default-active="activeIndex" class="ami-menu-demo" mode="horizontal" @select="handleSelect">
  <ami-menu-item index="1">Processing Center</ami-menu-item>
  <ami-submenu index="2">
    <template slot="title">Workspace</template>
    <ami-menu-item index="2-1">item one</ami-menu-item>
    <ami-menu-item index="2-2">item two</ami-menu-item>
    <ami-menu-item index="2-3">item three</ami-menu-item>
    <ami-submenu index="2-4">
      <template slot="title">item four</template>
      <ami-menu-item index="2-4-1">item one</ami-menu-item>
      <ami-menu-item index="2-4-2">item two</ami-menu-item>
      <ami-menu-item index="2-4-3">item three</ami-menu-item>
    </ami-submenu>
  </ami-submenu>
  <ami-menu-item index="3" disabled>Info</ami-menu-item>
  <ami-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></ami-menu-item>
</ami-menu>
<div class="line"></div>
<ami-menu
  :default-active="activeIndex2"
  class="ami-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <ami-menu-item index="1">Processing Center</ami-menu-item>
  <ami-submenu index="2">
    <template slot="title">Workspace</template>
    <ami-menu-item index="2-1">item one</ami-menu-item>
    <ami-menu-item index="2-2">item two</ami-menu-item>
    <ami-menu-item index="2-3">item three</ami-menu-item>
    <ami-submenu index="2-4">
      <template slot="title">item four</template>
      <ami-menu-item index="2-4-1">item one</ami-menu-item>
      <ami-menu-item index="2-4-2">item two</ami-menu-item>
      <ami-menu-item index="2-4-3">item three</ami-menu-item>
    </ami-submenu>
  </ami-submenu>
  <ami-menu-item index="3" disabled>Info</ami-menu-item>
  <ami-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></ami-menu-item>
</ami-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### Side bar

NavMenu vertical con sub-menús.

:::demo Puede utilizar el componente `ami-menu-item-group` para crear un grupo de menú, y el nombre del grupo estará
determinado por la propiedad `title` o la propiedad `slot`.

```html
<ami-row class="tac">
  <ami-col :span="12">
    <h5>Default colors</h5>
    <ami-menu
      default-active="2"
      class="ami-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <ami-submenu index="1">
        <template slot="title">
          <i class="ami-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <ami-menu-item-group title="Group One">
          <ami-menu-item index="1-1">item one</ami-menu-item>
          <ami-menu-item index="1-2">item one</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="Group Two">
          <ami-menu-item index="1-3">item three</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="1-4">
          <template slot="title">item four</template>
          <ami-menu-item index="1-4-1">item one</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
      <ami-menu-item index="2">
        <i class="ami-icon-menu"></i>
        <span>Navigator Two</span>
      </ami-menu-item>
      <ami-menu-item index="3" disabled>
        <i class="ami-icon-document"></i>
        <span>Navigator Three</span>
      </ami-menu-item>
      <ami-menu-item index="4">
        <i class="ami-icon-setting"></i>
        <span>Navigator Four</span>
      </ami-menu-item>
    </ami-menu>
  </ami-col>
  <ami-col :span="12">
    <h5>Custom colors</h5>
    <ami-menu
      default-active="2"
      class="ami-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <ami-submenu index="1">
        <template slot="title">
          <i class="ami-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <ami-menu-item-group title="Group One">
          <ami-menu-item index="1-1">item one</ami-menu-item>
          <ami-menu-item index="1-2">item one</ami-menu-item>
        </ami-menu-item-group>
        <ami-menu-item-group title="Group Two">
          <ami-menu-item index="1-3">item three</ami-menu-item>
        </ami-menu-item-group>
        <ami-submenu index="1-4">
          <template slot="title">item four</template>
          <ami-menu-item index="1-4-1">item one</ami-menu-item>
        </ami-submenu>
      </ami-submenu>
      <ami-menu-item index="2">
        <i class="ami-icon-menu"></i>
        <span>Navigator Two</span>
      </ami-menu-item>
      <ami-menu-item index="3" disabled>
        <i class="ami-icon-document"></i>
        <span>Navigator Three</span>
      </ami-menu-item>
      <ami-menu-item index="4">
        <i class="ami-icon-setting"></i>
        <span>Navigator Four</span>
      </ami-menu-item>
    </ami-menu>
  </ami-col>
</ami-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### Collapse

NavMenu vertical puede ser colapsado.

:::demo

```html
<ami-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <ami-radio-button :label="false">expand</ami-radio-button>
  <ami-radio-button :label="true">collapse</ami-radio-button>
</ami-radio-group>
<ami-menu default-active="2" class="ami-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <ami-submenu index="1">
    <template slot="title">
      <i class="ami-icon-location"></i>
      <span slot="title">Navigator One</span>
    </template>
    <ami-menu-item-group>
      <span slot="title">Group One</span>
      <ami-menu-item index="1-1">item one</ami-menu-item>
      <ami-menu-item index="1-2">item two</ami-menu-item>
    </ami-menu-item-group>
    <ami-menu-item-group title="Group Two">
      <ami-menu-item index="1-3">item three</ami-menu-item>
    </ami-menu-item-group>
    <ami-submenu index="1-4">
      <span slot="title">item four</span>
      <ami-menu-item index="1-4-1">item one</ami-menu-item>
    </ami-submenu>
  </ami-submenu>
  <ami-menu-item index="2">
    <i class="ami-icon-menu"></i>
    <span slot="title">Navigator Two</span>
  </ami-menu-item>
  <ami-menu-item index="3" disabled>
    <i class="ami-icon-document"></i>
    <span slot="title">Navigator Three</span>
  </ami-menu-item>
  <ami-menu-item index="4">
    <i class="ami-icon-setting"></i>
    <span slot="title">Navigator Four</span>
  </ami-menu-item>
</ami-menu>

<style>
  .ami-menu-vertical-demo:not(.ami-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### Atributos Menú
| Atributo          | Descripción                              | Tipo    | Valores aceptados     | Por defecto |
| ----------------- | ---------------------------------------- | ------- | --------------------- | ----------- |
| mode              | modo de presentación del menú            | string  | horizontal / vertical | vertical    |
| collapse          | si el menú está colapsado (solo en modo vertical) | boolean | —                     | false       |
| background-color  | color de fondo del menú (formato hexadecimal) | string  | —                     | #ffffff     |
| text-color        | color de texto del menú (formato hexadecimal) | string  | —                     | #303133     |
| active-text-color | color del texto del menu-item activo (formato hexadecimal) | string  | —                     | #0040D0     |
| default-active    | índice del menu-item activo              | string  | —                     | —           |
| default-openeds   | arreglo que contiene las llaves del sub-menus activo | Array   | —                     | —           |
| unique-opened     | si solo un submenu puede ser activo      | boolean | —                     | false       |
| menu-trigger      | como dispara eventos sub-menus, solo funciona cuando `mode` es 'horizontal' | string  | hover / click      | hover   |
| router            | si el modo `vue-router` está activado. Si es verdadero, el índice será usado como 'path' para activar la ruta | boolean | —                     | false       |
| collapse-transition  | si se debe permitir collapse transition | boolean   | — | true   |

### Métodos Menu 
| Métodos de evento | Descripción                   | Parámetros                             |
| ---------------- | ----------------------------- | -------------------------------------- |
| open             | abre un sub-menu específico   | index: índice del sub-menu para abrir  |
| close            | cierra un sub-menu específico | index: índice del sub-menu para cerrar |

### Eventos Menu 
| Nombre de evento | Descripción                              | Parámetros                               |
| ---------------- | ---------------------------------------- | ---------------------------------------- |
| select           | callback ejecutado cuando el menú es activado | index: índice del menú activado, indexPath: index path del menú activado |
| open             | callback ejecutado cuando sub-menu se expande | index: índice del sub-menu expandido, indexPath: index path del sub-menu expandido |
| close            | callback ejecutado cuando sub-menu colapsa | index: índice del sub-menu colapsado, indexPath: index path del menú colapsado |

### Eventos Menu-Item 
| Nombre de evento | Descripción                              | Parámetros                 |
| ---------------- | ---------------------------------------- | -------------------------- |
| click            | callback ejecutado cuando se hace click sobre menu-item | el: instancia de menu-item |

### Atributos SubMenu 
| Atributo     | Descripción                              | Tipo   | Valores aceptados | Por defecto |
| ------------ | ---------------------------------------- | ------ | ----------------- | ----------- |
| index        | identificador único                      | string/null | —            | null        |
| popper-class | nombre personalizado de la clase del menú popup | string | —                 | —           |
| show-timeout | tiempo de espera antes de mostrar un submenú | number | —                 | 300         |
| hide-timeout | tiempo de espera antes de ocultar un submenú | number | —                 | 300         |
| disabled | si esta `disabled` el sub-menu | boolean | — | false |
| popper-append-to-body | si se debe agregar el menú emergente al cuerpo. Si la posición del menú es incorrecta, puede intentar ajustar este prop | boolean | - | level one Submenu: true / other Submenus: false |

### Atributos Menu-Item 
| Atributo | Descripción         | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------- | ------ | ----------------- | ----------- |
| index    | identificador único | string | —                 | —           |
| route    | Objeto Vue Router   | object | —                 | —           |
| disabled | si esta `disabled` | boolean | — | false |

### Atributos Menu-Group 
| Atributo | Descripción      | Tipo   | Valores aceptados | Por defecto |
| -------- | ---------------- | ------ | ----------------- | ----------- |
| title    | título del grupo | string | —                 | —           |
