## Built-in transition

You can use Element's built-in transitions directly. Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

### fade

:::demo We have two fading effects: `ami-fade-in-linear` and `ami-fade-in`.

```html
<template>
  <div>
    <ami-button @click="show = !show">Click Me</ami-button>

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

### zoom

:::demo `ami-zoom-in-center`, `ami-zoom-in-top` and `ami-zoom-in-bottom` are provided.

```html
<template>
  <div>
    <ami-button @click="show2 = !show2">Click Me</ami-button>

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


### collapse

For collapse effect, use the `ami-collapse-transition` component.

:::demo

```html
<template>
  <div>
    <ami-button @click="show3 = !show3">Click Me</ami-button>

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

### On demand

```js
// fade/zoom
import 'ami-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'ami-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
