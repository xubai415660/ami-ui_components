## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

```html
<ami-badge :value="12" class="item">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge :value="3" class="item">
  <ami-button size="small">replies</ami-button>
</ami-badge>
<ami-badge :value="1" class="item" type="primary">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge :value="2" class="item" type="warning">
  <ami-button size="small">replies</ami-button>
</ami-badge>

<ami-dropdown trigger="click">
  <span class="ami-dropdown-link">
    Click Me<i class="ami-icon-caret-bottom ami-icon--right"></i>
  </span>
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item class="clearfix">
      comments
      <ami-badge class="mark" :value="12" />
    </ami-dropdown-item>
    <ami-dropdown-item class="clearfix">
      replies
      <ami-badge class="mark" :value="3" />
    </ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valor máximo

Se puede personalizar el valor máximo.

:::demo El valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

```html
<ami-badge :value="200" :max="99" class="item">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge :value="100" :max="10" class="item">
  <ami-button size="small">replies</ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

```html
<ami-badge value="new" class="item">
  <ami-button size="small">comments</ami-button>
</ami-badge>
<ami-badge value="hot" class="item">
  <ami-button size="small">replies</ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

```html
<ami-badge is-dot class="item">query</ami-badge>
<ami-badge is-dot class="item">
  <ami-button class="share-button" icon="ami-icon-share" type="primary"></ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | oculta el badge                    | boolean        | —                 | false       |
| type     | tipo de botón                            | string         | primary / success / warning / danger / info | — |

