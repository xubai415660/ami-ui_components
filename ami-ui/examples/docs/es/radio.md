## Radio
Selección única entre múltiples opciones.

### Uso básico
El elemento Radio no debe tener muchas opciones. De otra manera, utilice el componente Select.

:::demo Crear un elemento Radio es fácil, solo necesita enlazar(`bind`) una variable a la directiva `v-model` del Radio. Va a ser igual al valor `label` del Radio seleccionado. El tipo de dato de `label` es `String`, `Number` o `Boolean`.
```html
<template>
  <ami-radio v-model="radio" label="1">Option A</ami-radio>
  <ami-radio v-model="radio" label="2">Option B</ami-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Deshabilitado

El atributo `disabled` es utilizado para deshabilitar un Radio.

:::demo Solo necesita agregar el atributo `disabled`.

```html
<template>
  <ami-radio disabled v-model="radio" label="disabled">Option A</ami-radio>
  <ami-radio disabled v-model="radio" label="selected and disabled">Option B</ami-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Grupo de elementos Radio

Recomendado para seleccionar opciones que se excluyen mutuamente.

:::demo Combine `ami-radio-group` con `ami-radio` para mostrar un grupo de Radios. Enlace la variable con `v-model` del
elemento `ami-radio-group` y asigne el valor del `label` en `ami-radio`. Se provee el evento `change` con el valor
actual como parámetro.

```html
<ami-radio-group v-model="radio">
  <ami-radio :label="3">Option A</ami-radio>
  <ami-radio :label="6">Option B</ami-radio>
  <ami-radio :label="9">Option C</ami-radio>
</ami-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### Estilo Button

Radio con estilo de botón.

:::demo Solo necesita cambiar el elemento `ami-radio` a `ami-radio-button`. Se provee el atributo `size`.

```html
<template>
  <div>
    <ami-radio-group v-model="radio1">
      <ami-radio-button label="New York"></ami-radio-button>
      <ami-radio-button label="Washington"></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio2" size="medium">
      <ami-radio-button label="New York" ></ami-radio-button>
      <ami-radio-button label="Washington"></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio3" size="small">
      <ami-radio-button label="New York"></ami-radio-button>
      <ami-radio-button label="Washington" disabled ></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio4" disabled size="mini">
      <ami-radio-button label="New York"></ami-radio-button>
      <ami-radio-button label="Washington"></ami-radio-button>
      <ami-radio-button label="Los Angeles"></ami-radio-button>
      <ami-radio-button label="Chicago"></ami-radio-button>
    </ami-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
```
:::

### Con bordes

:::demo El atributo `border` agrega un borde al elemento Radio.

```html
<template>
  <div>
    <ami-radio v-model="radio1" label="1" border>Option A</ami-radio>
    <ami-radio v-model="radio1" label="2" border>Option B</ami-radio>
  </div>
  <div style="margin-top: 20px">
    <ami-radio v-model="radio2" label="1" border size="medium">Option A</ami-radio>
    <ami-radio v-model="radio2" label="2" border size="medium">Option B</ami-radio>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio3" size="small">
      <ami-radio label="1" border>Option A</ami-radio>
      <ami-radio label="2" border disabled>Option B</ami-radio>
    </ami-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ami-radio-group v-model="radio4" size="mini" disabled>
      <ami-radio label="1" border>Option A</ami-radio>
      <ami-radio label="2" border>Option B</ami-radio>
    </ami-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

### Atributos de Radio

| Atributo | Descripción                              | Tipo                      | Valores Aceptado      | Por defecto |
| -------- | ---------------------------------------- | ------------------------- | --------------------- | ----------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| label    | el valor del Radio                       | string / number / boolean | —                     | —           |
| disabled | si el Radio está deshabilitado           | boolean                   | —                     | false       |
| border   | agregar borde alrededor del elemento Radio | boolean                   | —                     | false       |
| size     | tamaño del elemento Radio, solo funciona si `border` es verdadero | string                    | medium / small / mini | —           |
| name     | atributo nativo `name`                 | string                    | —                     | —           |

### Atributos de Radio-button

| Atributo | Descripción                    | Tipo            | Valores Aceptado | Por defecto |
| -------- | ------------------------------ | --------------- | ---------------- | ----------- |
| label    | el valor del Radio             | string / number | —                | —           |
| disabled | si el Radio está deshabilitado | boolean         | —                | false       |
| name     | atributo nativo `name`         | string          | —                | —           |

### Atributos de Radio-group

| Atributo   | Descripción                              | Tipo    | Valores Aceptado      | Valores por defecto |
| ---------- | ---------------------------------------- | ------- | --------------------- | ------------------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| size       | tamaño de los `radio buttons` o `bordered radios` | string  | medium / small / mini | —                   |
| disabled   | si la anidación de radios está deshabilitada | boolean | —                     | false               |
| text-color | color de las letras cuando el botón está activo | string  | —                     | #ffffff             |
| fill       | color del borde y fondo cuando el botón está activo | string  | —                     | #0040D0             |

### Eventos de Radio 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |


### Eventos de Radio-group 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |

