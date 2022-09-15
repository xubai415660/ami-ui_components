## Link

Texto con hipervínculo

### Básico

Texto con hipervínculo básico
:::demo

```html
<div>
  <ami-link href="https://element.eleme.io" target="_blank">default</ami-link>
  <ami-link type="primary">primary</ami-link>
  <ami-link type="success">success</ami-link>
  <ami-link type="warning">warning</ami-link>
  <ami-link type="danger">danger</ami-link>
  <ami-link type="info">info</ami-link>
</div>
```

:::

### Deshabilitar

Deshabilita el hipervínculo
:::demo

```html
<div>
  <ami-link disabled>default</ami-link>
  <ami-link type="primary" disabled>primary</ami-link>
  <ami-link type="success" disabled>success</ami-link>
  <ami-link type="warning" disabled>warning</ami-link>
  <ami-link type="danger" disabled>danger</ami-link>
  <ami-link type="info" disabled>info</ami-link>
</div>
```

:::

### Subrayado

Subrayado del hipervínculo
:::demo

```html
<div>
  <ami-link :underline="false">Without Underline</ami-link>
  <ami-link>With Underline</ami-link>
</div>
```

:::

### Icono

Hipervínculo con icono
:::demo

```html
<div>
  <ami-link icon="ami-icon-edit">Edit</ami-link>
  <ami-link>Check<i class="ami-icon-view ami-icon--right"></i> </ami-link>
</div>
```

:::

### Atributos

| Atributo  | Descripción                                          | Tipo    | Opciones                                    | Por defecto |
| --------- | ---------------------------------------------------- | ------- | ------------------------------------------- | ----------- |
| type      | tipo                                                 | string  | primary / success / warning / danger / info | default     |
| underline | si el hipervínculo estará subrayado                  | boolean | —                                           | true        |
| disabled  | si el componente esta deshabilitado                  | boolean | —                                           | false       |
| href      | lo mismo que el valor nativo del hipervínculo `href` | string  | —                                           | -           |
| icon      | nombre de clase del icono                            | string  | —                                           | -           |
