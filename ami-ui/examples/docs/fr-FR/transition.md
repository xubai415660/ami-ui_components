## Transitions

Vous pouvez utiliser les transitions d'Element directement. Mais avant ça, merci de lire la [documentation](https://vuejs.org/v2/api/#transition).

### Fade

:::demo Il y a deux effets de fading: `ami-fade-in-linear` et `ami-fade-in`.

```html
<template>
  <div>
    <ami-button @click="show = !show">Cliquez ici</ami-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="ami-fade-in-linear">
        <div v-show="show" class="transition-box">.ami-fade-in-linear</div>
      </transition>
      <transition name="ami-fade-in">
        <div v-show="show" class="transition-box">.ami-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #0040D0;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### Zoom

:::demo `ami-zoom-in-center`, `ami-zoom-in-top` et `ami-zoom-in-bottom` sont fournis.

```html
<template>
  <div>
    <ami-button @click="show2 = !show2">Cliquez ici</ami-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="ami-zoom-in-center">
        <div v-show="show2" class="transition-box">.ami-zoom-in-center</div>
      </transition>

      <transition name="ami-zoom-in-top">
        <div v-show="show2" class="transition-box">.ami-zoom-in-top</div>
      </transition>

      <transition name="ami-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.ami-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #0040D0;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### Collapse

Pour l'effet collapse, utilisez le composant `ami-collapse-transition`.

:::demo

```html
<template>
  <div>
    <ami-button @click="show3 = !show3">Cliquez ici</ami-button>

    <div style="margin-top: 20px; height: 200px;">
      <ami-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">ami-collapse-transition</div>
          <div class="transition-box">ami-collapse-transition</div>
        </div>
      </ami-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #0040D0;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### À la demande

```js
// fade/zoom
import 'ami-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'ami-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
