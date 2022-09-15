## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

### Uso básico


:::demo En `ami-breadcrumb`, cada `ami-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage.
Este componente tiene un atributo `String` llamado `separator`, el mismo determina el carácter separador. El valor por
defecto es '/'.

```html
<ami-breadcrumb separator="/">
  <ami-breadcrumb-item :to="{ path: '/' }">homepage</ami-breadcrumb-item>
  <ami-breadcrumb-item><a href="/">promotion management</a></ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion list</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion detail</ami-breadcrumb-item>
</ami-breadcrumb>
```
:::

### Icono separador

:::demo Setee `separator-class` para que utilice `iconfont` como separador，el mismo va a cubrir `separator`

```html
<ami-breadcrumb separator-class="ami-icon-arrow-right">
  <ami-breadcrumb-item :to="{ path: '/' }">homepage</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion management</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion list</ami-breadcrumb-item>
  <ami-breadcrumb-item>promotion detail</ami-breadcrumb-item>
</ami-breadcrumb>
```
:::

### Breadcrumb atributos
| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | carácter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

### Breadcrumb Item atributos
| Atributo | Descripción                              | Tipo          | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router` | string/object | —                 | —           |
| replace  | si `true`,  la navegación no dejara una entrada en la historia | boolean       | —                 | false       |





