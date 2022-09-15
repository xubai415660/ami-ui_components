## Breadcrumb

Affiche le chemin de la page actuelle, afin de pouvoir naviguer plus facilement.

### Usage


:::demo Dans `ami-breadcrumb`, chaque `ami-breadcrumb-item` est un tag représentant chaque niveau depuis la page
d'accueil. Ce Composant possède un attribut de type `String` appelé `separator` qui détermine le séparateur. Sa valeur
par défaut est '/'.

```html
<ami-breadcrumb separator="/">
  <ami-breadcrumb-item :to="{ path: '/' }">Accueil</ami-breadcrumb-item>
  <ami-breadcrumb-item><a href="/">Gestion promotions</a></ami-breadcrumb-item>
  <ami-breadcrumb-item>Liste promotions</ami-breadcrumb-item>
  <ami-breadcrumb-item>Détail promotion</ami-breadcrumb-item>
</ami-breadcrumb>
```
:::

### Icône de séparation

:::demo Configurez `separator-class` pour utiliser `iconfont` en tant que séparateur. Cela remplacera `separator`.

```html
<ami-breadcrumb separator-class="ami-icon-arrow-right">
  <ami-breadcrumb-item :to="{ path: '/' }">Accueil</ami-breadcrumb-item>
  <ami-breadcrumb-item>Gestion promotions</ami-breadcrumb-item>
  <ami-breadcrumb-item>Liste promotions</ami-breadcrumb-item>
  <ami-breadcrumb-item>Détail promotion</ami-breadcrumb-item>
</ami-breadcrumb>
```
:::

### Attributs de Breadcrumb
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | Caractère de séparation | string | — | / |
| separator-class | Classe de l'icône de séparation | string | — | - |

### Attributs de Breadcrumb Item
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | Route cible du lien, identique au `to` de `vue-router`. | string/object | — | — |
| replace | Si `true`, la navigation ne laissera pas d'historique. | boolean | — | false |
