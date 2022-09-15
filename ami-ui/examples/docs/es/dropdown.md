## Dropdown
Menú conmutable para visualizar listas de enlaces y acciones.

### Uso básico
Pase el ratón por el menú desplegable para desplegarlo y obtener más acciones.

:::demo El elemento desencadenante se representa con el slot predeterminado, y la parte desplegable se representa con el slot llamado dropdown. Por defecto, la lista desplegable se muestra cuando se pasa el ratón por encima del elemento desencadenante sin necesidad de hacer clic en él.

```html
<ami-dropdown>
  <span class="ami-dropdown-link">
    Dropdown List<i class="ami-icon-arrow-down ami-icon--right"></i>
  </span>
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item>Action 1</ami-dropdown-item>
    <ami-dropdown-item>Action 2</ami-dropdown-item>
    <ami-dropdown-item>Action 3</ami-dropdown-item>
    <ami-dropdown-item disabled>Action 4</ami-dropdown-item>
    <ami-dropdown-item divided>Action 5</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<style>
  .ami-dropdown-link {
    cursor: pointer;
    color: #0040D0;
  }
  .ami-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### Elemento detonante

Utilizando un botón para activar la lista desplegable.

:::demo Utilice `split-button` para dividir el elemento detonante en un grupo de botones, siendo el botón izquierdo un botón normal y el botón derecho el objetivo real de la detonación. Si desea insertar una línea de separación entre la posición tres y la posición cuatro, sólo añada un divisor de clase a la posición cuatro.

```html
<ami-dropdown>
  <ami-button type="primary">
    Dropdown List<i class="ami-icon-arrow-down ami-icon--right"></i>
  </ami-button>
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item>Action 1</ami-dropdown-item>
    <ami-dropdown-item>Action 2</ami-dropdown-item>
    <ami-dropdown-item>Action 3</ami-dropdown-item>
    <ami-dropdown-item>Action 4</ami-dropdown-item>
    <ami-dropdown-item>Action 5</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>
<ami-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item>Action 1</ami-dropdown-item>
    <ami-dropdown-item>Action 2</ami-dropdown-item>
    <ami-dropdown-item>Action 3</ami-dropdown-item>
    <ami-dropdown-item>Action 4</ami-dropdown-item>
    <ami-dropdown-item>Action 5</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<style>
  .ami-dropdown {
    vertical-align: top;
  }
  .ami-dropdown + .ami-dropdown {
    margin-left: 15px;
  }
  .ami-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
```
:::

### Cómo detonar el evento

Haga clic en el elemento detonante o sobre él.

:::demo Utilice el atributo `trigger`. Por defecto, es `hover`.

```html
<ami-row class="block-col-2">
  <ami-col :span="12">
    <span class="demonstration">hover to trigger</span>
    <ami-dropdown>
      <span class="ami-dropdown-link">
        Dropdown List<i class="ami-icon-arrow-down ami-icon--right"></i>
      </span>
      <ami-dropdown-menu slot="dropdown">
        <ami-dropdown-item icon="ami-icon-plus">Action 1</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-circle-plus">Action 2</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-circle-plus-outline">Action 3</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-check">Action 4</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-circle-check">Action 5</ami-dropdown-item>
      </ami-dropdown-menu>
    </ami-dropdown>
  </ami-col>
  <ami-col :span="12">
    <span class="demonstration">click to trigger</span>
    <ami-dropdown trigger="click">
      <span class="ami-dropdown-link">
        Dropdown List<i class="ami-icon-arrow-down ami-icon--right"></i>
      </span>
      <ami-dropdown-menu slot="dropdown">
        <ami-dropdown-item icon="ami-icon-plus">Action 1</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-circle-plus">Action 2</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-circle-plus-outline">Action 3</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-check">Action 4</ami-dropdown-item>
        <ami-dropdown-item icon="ami-icon-circle-check">Action 5</ami-dropdown-item>
      </ami-dropdown-menu>
    </ami-dropdown>
  </ami-col>
</ami-row>

<style>
  .ami-dropdown-link {
    cursor: pointer;
    color: #0040D0;
  }
  .ami-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### Ocultamiento del menú

Use `hide-on-click` para definir si el menú se cierra al hacer clic.

:::demo El menú predeterminado se cerrará cuando haga clic en los elementos del menú, y se puede desactivar configurando `hide-on-click` como false.

```html
<ami-dropdown :hide-on-click="false">
  <span class="ami-dropdown-link">
    Dropdown List<i class="ami-icon-arrow-down ami-icon--right"></i>
  </span>
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item>Action 1</ami-dropdown-item>
    <ami-dropdown-item>Action 2</ami-dropdown-item>
    <ami-dropdown-item>Action 3</ami-dropdown-item>
    <ami-dropdown-item disabled>Action 4</ami-dropdown-item>
    <ami-dropdown-item divided>Action 5</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<style>
  .ami-dropdown-link {
    cursor: pointer;
    color: #0040D0;
  }
  .ami-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### Evento command

Al hacer clic en cada elemento desplegable se detona un evento cuyo parámetro es asignado por cada elemento.

:::demo

```html
<ami-dropdown @command="handleCommand">
  <span class="ami-dropdown-link">
    Dropdown List<i class="ami-icon-arrow-down ami-icon--right"></i>
  </span>
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item command="a">Action 1</ami-dropdown-item>
    <ami-dropdown-item command="b">Action 2</ami-dropdown-item>
    <ami-dropdown-item command="c">Action 3</ami-dropdown-item>
    <ami-dropdown-item command="d" disabled>Action 4</ami-dropdown-item>
    <ami-dropdown-item command="e" divided>Action 5</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<style>
  .ami-dropdown-link {
    cursor: pointer;
    color: #0040D0;
  }
  .ami-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
```
:::

### Tamaños

Además del tamaño predeterminado, el componente Dropdown proporciona tres tamaños adicionales para que pueda elegir entre diferentes escenarios

:::demo Utilice el atributo `size` para establecer tamaños adicionales con `medium`, `small` o `mini`.

```html
<ami-dropdown split-button type="primary">
  Default
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item>Action 1</ami-dropdown-item>
    <ami-dropdown-item>Action 2</ami-dropdown-item>
    <ami-dropdown-item>Action 3</ami-dropdown-item>
    <ami-dropdown-item>Action 4</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<ami-dropdown size="medium" split-button type="primary">
  Medium
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item>Action 1</ami-dropdown-item>
    <ami-dropdown-item>Action 2</ami-dropdown-item>
    <ami-dropdown-item>Action 3</ami-dropdown-item>
    <ami-dropdown-item>Action 4</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<ami-dropdown size="small" split-button type="primary">
  Small
  <ami-dropdown-menu slot="dropdown">
   <ami-dropdown-item>Action 1</ami-dropdown-item>
   <ami-dropdown-item>Action 2</ami-dropdown-item>
   <ami-dropdown-item>Action 3</ami-dropdown-item>
   <ami-dropdown-item>Action 4</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<ami-dropdown size="mini" split-button type="primary">
  Mini
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item>Action 1</ami-dropdown-item>
    <ami-dropdown-item>Action 2</ami-dropdown-item>
    <ami-dropdown-item>Action 3</ami-dropdown-item>
    <ami-dropdown-item>Action 4</ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>
```
:::


### Dropdown atributos
| Atributo      | Descripción                              | Tipo    | Valores aceptados                        | Por defecto |
| ------------- | ---------------------------------------- | ------- | ---------------------------------------- | ----------- |
| type          | tipo de botón de menú, consulte Componente`Button`, sólo funciona cuando `split-button` es true. | string  | —                                        | —           |
| size          | tamaño del menú, también funciona en `split-button` | string  | medium / small / mini                    | —           |
| split-button  | si se visualiza un grupo de botones      | boolean | —                                        | false       |
| placement     | colocación del menú                      | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end  |
| trigger       | cómo detonar                             | string  | hover/click                              | hover       |
| hide-on-click | si se oculta el menú después de hacer clic en el elemento | boolean | —                                        | true        |
| show-timeout  | Tiempo de retardo antes de mostrar un dropdown (solamente trabaja cuando se dispara `hover`) | number  | —                                        | 250         |
| hide-timeout  | Tiempo de retardo antes de ocultar un dropdown (solamente trabaja cuando se dispara `hover`) | number  | —                                        | 150         |
| tabindex      | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) de Dropdown | number              |          —         | 0           |
| disabled      | si el desplegable está desactivado       | boolean | —                                      | false       |

### Dropdown Slots

| Nombre | Descripción |
|------|--------|
| — | contenido del Dropdown. Aviso: Debe ser un elemento html dom válido (ej. `<span>, <button>` etc.) o `ami-component`, para adjuntar el listener trigger |
| dropdown | contenido del menu Dropdown, normalmente es un elemento `<ami-dropdown-menu>` |

### Dropdown Eventos
| Nombre         | Descripción                                                  | Parámetros                                       |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------ |
| click          | si `split-button` es `true`, se activa al hacer clic en el botón izquierdo | —                                                |
| command        | activa cuando se hace clic en un elemento desplegable        | el comando enviado desde el elemento desplegable |
| visible-change | se activa cuando aparece/desaparece el desplegable           | true cuando aparece, y false de otro modo        |

### Dropdown Menú Ítem Atributos
| Atributo | Descripción                              | Tipo                 | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------------- | ----------------- | ----------- |
| command  | un comando que se enviará al `command` callback del Dropdown | string/number/object | —                 | —           |
| disabled | si el elemento está desactivado          | boolean              | —                 | false       |
| divided  | si se visualiza un divisor               | boolean              | —                 | false       |
| icon     | nombre de la clase del icono             | string               | —                 | —           |
