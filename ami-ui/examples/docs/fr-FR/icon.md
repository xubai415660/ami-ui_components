## Icônes

Element fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `ami-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="ami-icon-edit"></i>
<i class="ami-icon-share"></i>
<i class="ami-icon-delete"></i>
<ami-button type="primary" icon="ami-icon-search">Chercher</ami-button>

```
:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'ami-icon-' + name"></i>
      <span class="icon-name">{{'ami-icon-' + name}}</span>
    </span>
  </li>
</ul>
