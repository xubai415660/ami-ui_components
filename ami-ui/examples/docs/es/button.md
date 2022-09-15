## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<ami-row>
  <ami-button>Default</ami-button>
  <ami-button type="primary">Primary</ami-button>
  <ami-button type="success">Success</ami-button>
  <ami-button type="info">Info</ami-button>
  <ami-button type="warning">Warning</ami-button>
  <ami-button type="danger">Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button plain>Plain</ami-button>
  <ami-button type="primary" plain>Primary</ami-button>
  <ami-button type="success" plain>Success</ami-button>
  <ami-button type="info" plain>Info</ami-button>
  <ami-button type="warning" plain>Warning</ami-button>
  <ami-button type="danger" plain>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button round>Round</ami-button>
  <ami-button type="primary" round>Primary</ami-button>
  <ami-button type="success" round>Success</ami-button>
  <ami-button type="info" round>Info</ami-button>
  <ami-button type="warning" round>Warning</ami-button>
  <ami-button type="danger" round>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button icon="ami-icon-search" circle></ami-button>
  <ami-button type="primary" icon="ami-icon-edit" circle></ami-button>
  <ami-button type="success" icon="ami-icon-check" circle></ami-button>
  <ami-button type="info" icon="ami-icon-message" circle></ami-button>
  <ami-button type="warning" icon="ami-icon-star-off" circle></ami-button>
  <ami-button type="danger" icon="ami-icon-delete" circle></ami-button>
</ami-row>
```
:::

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<ami-row>
  <ami-button disabled>Default</ami-button>
  <ami-button type="primary" disabled>Primary</ami-button>
  <ami-button type="success" disabled>Success</ami-button>
  <ami-button type="info" disabled>Info</ami-button>
  <ami-button type="warning" disabled>Warning</ami-button>
  <ami-button type="danger" disabled>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button plain disabled>Plain</ami-button>
  <ami-button type="primary" plain disabled>Primary</ami-button>
  <ami-button type="success" plain disabled>Success</ami-button>
  <ami-button type="info" plain disabled>Info</ami-button>
  <ami-button type="warning" plain disabled>Warning</ami-button>
  <ami-button type="danger" plain disabled>Danger</ami-button>
</ami-row>
```
:::

### Botón de texto

Botones sin borde ni fondo.

:::demo

```html
<ami-button type="text">Text Button</ami-button>
<ami-button type="text" disabled>Text Button</ami-button>
```
:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<ami-button type="primary" icon="ami-icon-edit"></ami-button>
<ami-button type="primary" icon="ami-icon-share"></ami-button>
<ami-button type="primary" icon="ami-icon-delete"></ami-button>
<ami-button type="primary" icon="ami-icon-search">Search</ami-button>
<ami-button type="primary">Upload<i class="ami-icon-upload ami-icon-right"></i></ami-button>
```
:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<ami-button-group>` para agrupar sus botones.

```html
<ami-button-group>
  <ami-button type="primary" icon="ami-icon-arrow-left">Previous Page</ami-button>
  <ami-button type="primary">Next Page<i class="ami-icon-arrow-right ami-icon-right"></i></ami-button>
</ami-button-group>
<ami-button-group>
  <ami-button type="primary" icon="ami-icon-edit"></ami-button>
  <ami-button type="primary" icon="ami-icon-share"></ami-button>
  <ami-button type="primary" icon="ami-icon-delete"></ami-button>
</ami-button-group>
```
:::

### Botón de descarga 

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<ami-button type="primary" :loading="true">Loading</ami-button>
```
:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<ami-row>
  <ami-button>Default</ami-button>
  <ami-button size="medium">Medium</ami-button>
  <ami-button size="small">Small</ami-button>
  <ami-button size="mini">Mini</ami-button>
</ami-row>
<ami-row>
  <ami-button round>Default</ami-button>
  <ami-button size="medium" round>Medium</ami-button>
  <ami-button size="small" round>Small</ami-button>
  <ami-button size="mini" round>Mini</ami-button>
</ami-row>
```
:::

### Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |

