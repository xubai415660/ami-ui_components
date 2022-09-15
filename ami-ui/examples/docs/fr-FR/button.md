## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<ami-row>
  <ami-button>Défaut</ami-button>
  <ami-button type="primary">Primary</ami-button>
  <ami-button type="success">Success</ami-button>
  <ami-button type="info">Info</ami-button>
  <ami-button type="warning">Warning</ami-button>
  <ami-button type="danger">Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button plain>Plein</ami-button>
  <ami-button type="primary" plain>Primary</ami-button>
  <ami-button type="success" plain>Success</ami-button>
  <ami-button type="info" plain>Info</ami-button>
  <ami-button type="warning" plain>Warning</ami-button>
  <ami-button type="danger" plain>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button round>Arrondi</ami-button>
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

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<ami-row>
  <ami-button disabled>Défaut</ami-button>
  <ami-button type="primary" disabled>Principal</ami-button>
  <ami-button type="success" disabled>Succès</ami-button>
  <ami-button type="info" disabled>Info</ami-button>
  <ami-button type="warning" disabled>Attention</ami-button>
  <ami-button type="danger" disabled>Danger</ami-button>
</ami-row>

<ami-row>
  <ami-button plain disabled>Plein</ami-button>
  <ami-button type="primary" plain disabled>Principal</ami-button>
  <ami-button type="success" plain disabled>Succès</ami-button>
  <ami-button type="info" plain disabled>Info</ami-button>
  <ami-button type="warning" plain disabled>Attention</ami-button>
  <ami-button type="danger" plain disabled>Danger</ami-button>
</ami-row>
```
:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo

```html
<ami-button type="text">Bouton texte</ami-button>
<ami-button type="text" disabled>Bouton texte</ami-button>
```
:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<ami-button type="primary" icon="ami-icon-edit"></ami-button>
<ami-button type="primary" icon="ami-icon-share"></ami-button>
<ami-button type="primary" icon="ami-icon-delete"></ami-button>
<ami-button type="primary" icon="ami-icon-search">Recherche</ami-button>
<ami-button type="primary">Upload<i class="ami-icon-upload ami-icon-right"></i></ami-button>
```
:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<ami-button-group>` pour grouper vos boutons.

```html
<ami-button-group>
  <ami-button type="primary" icon="ami-icon-arrow-left">Page précédente</ami-button>
  <ami-button type="primary">Page suivante<i class="ami-icon-arrow-right ami-icon-right"></i></ami-button>
</ami-button-group>
<ami-button-group>
  <ami-button type="primary" icon="ami-icon-edit"></ami-button>
  <ami-button type="primary" icon="ami-icon-share"></ami-button>
  <ami-button type="primary" icon="ami-icon-delete"></ami-button>
</ami-button-group>
```
:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<ami-button type="primary" :loading="true">Chargement</ami-button>
```
:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<ami-row>
  <ami-button>Défaut</ami-button>
  <ami-button size="medium">Medium</ami-button>
  <ami-button size="small">Small</ami-button>
  <ami-button size="mini">Mini</ami-button>
</ami-row>
<ami-row>
  <ami-button round>Défaut</ami-button>
  <ami-button size="medium" round>Medium</ami-button>
  <ami-button size="small" round>Small</ami-button>
  <ami-button size="mini" round>Mini</ami-button>
</ami-row>
```
:::

### Attributs
| Attribut      | Description    | Type      | Valeurs acceptées       | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Taille du bouton.   | string  |   medium / small / mini            |    —     |
| type     | Type du bouton.   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | Détermine si le bouton est plein.   | boolean    | — | false   |
| round     | Détermine si le bouton est arrondi.   | boolean    | — | false   |
| circle     | Détermine si le bouton est un cercle.   | boolean    | — | false   |
| loading   | Détermine si l'état de chargement est affiché.   | boolean    | — | false   |
| disabled  | Désactive le bouton    | boolean   | —   | false   |
| icon  | Classe de l'icône. | string   |  —  |  —  |
| autofocus  | Identique à l'attribut natif `autofocus` | boolean   |  —  |  false  |
| native-type | Identique à l'attribut natif `type` | string | button / submit / reset | button |
