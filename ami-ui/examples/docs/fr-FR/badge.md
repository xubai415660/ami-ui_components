## Badge

Un nombre ou un status affiché par-dessus un bouton ou un icône.

### Usage

Affiche le nombre de nouveaux messages.

:::demo La quantité est définit par `value` qui accepte un `Number` ou un `String`.

```html
<ami-badge :value="12" class="item">
  <ami-button size="small">Commentaires</ami-button>
</ami-badge>
<ami-badge :value="3" class="item">
  <ami-button size="small">Réponses</ami-button>
</ami-badge>
<ami-badge :value="1" class="item" type="primary">
  <ami-button size="small">Commentaires</ami-button>
</ami-badge>
<ami-badge :value="2" class="item" type="warning">
  <ami-button size="small">Réponses</ami-button>
</ami-badge>

<ami-dropdown trigger="click">
  <span class="ami-dropdown-link">
    Cliquez<i class="ami-icon-caret-bottom ami-icon--right"></i>
  </span>
  <ami-dropdown-menu slot="dropdown">
    <ami-dropdown-item class="clearfix">
      Commentaires
      <ami-badge class="mark" :value="12" />
    </ami-dropdown-item>
    <ami-dropdown-item class="clearfix">
      Réponses
      <ami-badge class="mark" :value="3" />
    </ami-dropdown-item>
  </ami-dropdown-menu>
</ami-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valeur maximale

Vous pouvez configurer la valeur maximale.

:::demo La valeur maximale est définit par `max` qui accepte un `Number`. Ceci ne marche qui si `value` est également un `Number`.

```html
<ami-badge :value="200" :max="99" class="item">
  <ami-button size="small">Commentaires</ami-button>
</ami-badge>
<ami-badge :value="100" :max="10" class="item">
  <ami-button size="small">Réponses</ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Configuration

Affiche du texte autre que des nombres.

:::demo Quand `value` est un `String`, il affiche un texte personnalisé.

```html
<ami-badge value="new" class="item">
  <ami-button size="small">Commentaires</ami-button>
</ami-badge>
<ami-badge value="hot" class="item">
  <ami-button size="small">Réponses</ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Point rouge

Utilisez un point rouge pour signaler du contenu devant être remarqué.

:::demo Utilisez l'attribut `is-dot` qui est un `Boolean`.

```html
<ami-badge is-dot class="item">Requète</ami-badge>
<ami-badge is-dot class="item">
  <ami-button class="share-button" icon="ami-icon-share" type="primary"></ami-button>
</ami-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributs

| Attribut     | Description     | Type            | Valeurs acceptées       | Défaut |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | Valeur affichée.   | string, number  |          —            |    —    |
| max           |  Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si `value` est un `Number`.   | number  |         —              |     —    |
| is-dot        | Affiche un point rouge. | boolean   |    —           |  false  |
| hidden        | Cache le badge.    | boolean         |          —            |  false  |
| type          | Type du bouton.     | string          | primary / success / warning / danger / info |   —  |
