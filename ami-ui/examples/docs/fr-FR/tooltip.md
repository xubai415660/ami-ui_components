## Tooltip

Permet d'afficher des informations au passage de la souris sur un élément.

### Usage

Tooltip a 9 emplacements.

:::demo L'attribut `content` détermine le contenu à afficher. L'attribut `placement` détermine la position du tooltip. Sa valeur est sous la forme `[orientation]-[alignment]` avec quatre orientations `top`, `left`, `right`, `bottom` et trois alignements `start`, `end`, `null`, le défaut étant `null`. Par exemple, `placement="left-end"` affichera la tooltip sur la gauche de l'élément et le bas de la tooltip sera aligné avec le bas de l'élément.
```html
<div class="box">
  <div class="top">
    <ami-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
      <ami-button>top-start</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
      <ami-button>top</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
      <ami-button>top-end</ami-button>
    </ami-tooltip>
  </div>
  <div class="left">
    <ami-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
      <ami-button>left-start</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
      <ami-button>left</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
      <ami-button>left-end</ami-button>
    </ami-tooltip>
  </div>

  <div class="right">
    <ami-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
      <ami-button>right-start</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
      <ami-button>right</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
      <ami-button>right-end</ami-button>
    </ami-tooltip>
  </div>
  <div class="bottom">
    <ami-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
      <ami-button>bottom-start</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
      <ami-button>bottom</ami-button>
    </ami-tooltip>
    <ami-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
      <ami-button>bottom-end</ami-button>
    </ami-tooltip>
  </div>
</div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .ami-tooltip__popper,
    .right .ami-tooltip__popper {
      padding: 8px 10px;
    }

    .ami-button {
      width: 110px;
    }
  }
</style>
```
:::


### Thèmes

Tooltip a deux thèmes: `dark` et `light`。

:::demo Utilisez `effect` pour modifier le thème, le défaut étant `dark`.

```html
<ami-tooltip content="Top center" placement="top">
  <ami-button>Dark</ami-button>
</ami-tooltip>
<ami-tooltip content="Bottom center" placement="bottom" effect="light">
  <ami-button>Light</ami-button>
</ami-tooltip>
```
:::

### Plus de contenu

Vous pouvez afficher plus de lignes et formater leur contenu.

:::demo Utiliser un slot nommé `content` au lieu de l'attribut.

```html
<ami-tooltip placement="top">
  <div slot="content">Multiples lignes<br/>Seconde ligne</div>
  <ami-button>Top center</ami-button>
</ami-tooltip>
```
:::

### Usage avancé

Vous pouvez utiliser d'autres attributs pour un usage plus poussé:

`transition` permet de définir l'animation d'apparition et de disparition du tooltip, le défaut étant
ami-fade-in-linear.

`disabled` permet de désactiver le tooltip. Mettez-le simplement à `true`.

En réalité, Tooltip est une extension de [Vue-popper](https://github.com/element-component/vue-popper), vous pouvez donc utiliser n'importe quel attribut de Vue-popper.

:::demo

```html
<template>
  <ami-tooltip :disabled="disabled" content="Cliquez pour désactiver le tooltip" placement="bottom" effect="light">
    <ami-button @click="disabled = !disabled">Cliquez pour {{disabled ? 'activer' : 'désactiver'}} le tooltip</ami-button>
  </ami-tooltip>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
```
:::


:::tip
Le composant `router-link` n'est pas supporté par tooltip, utilisez plutôt `vm.$router.push`.

Les éléments de formulaire désactivés ne sont pas supportés par Tooltip, plus d'informations sur [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter). Vous aurez besoin de mettre ces éléments dans un conteneur pour que cela fonctionne.
:::


### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|----------------|---------|-----------|-------------|--------|
| effect | Thème du Tooltip.  | string   | dark/light  | dark  |
| content | Contenu à afficher, écrasé par `slot#content`. | String   | — | — |
| placement | Position du Tooltip. | string |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
| value / v-model | Visibilité du Tooltip. | boolean | — |  false |
| disabled | Si le Tooltip est désactivé. | boolean | — |  false |
| offset | Décalage du Tooltip. | number | — |  0 |
| transition | Animation de transition. | string | — | ami-fade-in-linear |
| visible-arrow | Si une flèche doit être affichée. Pour plus d'information, voir [Vue-popper](https://github.com/element-component/vue-popper). | boolean | — | true |
| popper-options | Paramètres [popper.js](https://popper.js.org/documentation.html). | Object | Se référer à  [popper.js](https://popper.js.org/documentation.html). | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| open-delay | Délai avant l'apparition en millisecondes. | number | — | 0 |
| manual | Si le contrôle du Tooltip doit être manuel. `mouseenter` et `mouseleave` n'auront pas d'effet si `true`. | boolean | — | false |
| popper-class | Classe du popper de Tooltip. | string | — | — |
| enterable | Si la souris peut entrer dans la Tooltip. | Boolean | — | true |
| hide-after | Délai avant disparition. | number | — | 0 |
| tabindex   | [tabindex](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex) de Tooltip. | number | — | 0 |
