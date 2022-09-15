## Divider

La línea divisoria que separa el contenido.

### Uso básico

Divide el texto de los diferentes párrafos.

:::demo
```html
<template>
  <div>
    <span>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</span>
    <ami-divider></ami-divider>
    <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
  </div>
</template>
```
:::

### Contenido personalizado

Puede personalizar el contenido en la línea divisoria.


:::demo
```html
<template>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <ami-divider content-position="left">Rabindranath Tagore</ami-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <ami-divider><i class="ami-icon-star-on"></i></ami-divider>
    <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
    <ami-divider content-position="right">Rabindranath Tagore</ami-divider>
  </div>
</template>
```
:::

### División vertical

:::demo
```html
<template>
  <div>
    <span>Rain</span>
    <ami-divider direction="vertical"></ami-divider>
    <span>Home</span>
    <ami-divider direction="vertical"></ami-divider>
    <span>Grass</span>
  </div>
</template>
```
:::

### Divider Atributos
| Atributo     | Descripción        | Tipo   | Valores aceptados | Por defecto |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| direction      | indica la dirección del separador | string  |          horizontal / vertical           |    horizontal     |
| content-position      | personaliza el contenido en la línea divisoria | String  |  left / right / center  |  center |
