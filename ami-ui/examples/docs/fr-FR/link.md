## Link

Un hyperlien textuel.

### Usage basique

Lien texte basique.

:::demo

```html
<div>
  <ami-link href="https://element.eleme.io" target="_blank">défaut</ami-link>
  <ami-link type="primary">primaire</ami-link>
  <ami-link type="success">succès</ami-link>
  <ami-link type="warning">avertissement</ami-link>
  <ami-link type="danger">danger</ami-link>
  <ami-link type="info">info</ami-link>
</div>
```

:::

### Désactivé

Lien désactivé.

:::demo

```html
<div>
  <ami-link disabled>défaut</ami-link>
  <ami-link type="primary" disabled>primaire</ami-link>
  <ami-link type="success" disabled>succès</ami-link>
  <ami-link type="warning" disabled>avertissement</ami-link>
  <ami-link type="danger" disabled>danger</ami-link>
  <ami-link type="info" disabled>info</ami-link>
</div>
```

:::

### Souligné

Lien souligné.

:::demo

```html
<div>
  <ami-link :underline="false">non souligné</ami-link>
  <ami-link>Souligné</ami-link>
</div>
```

:::

### Icône

Lien avec icône.

:::demo

```html
<div>
  <ami-link icon="ami-icon-edit">Éditer</ami-link>
  <ami-link>Vérifier<i class="ami-icon-view ami-icon--right"></i> </ami-link>
</div>
```

:::

### Attributs

| Attribut  | Description                     | Type    | Options                                     | Défaut  |
| --------- | ------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | Type du lien.                   | string  | primary / success / warning / danger / info | défaut  |
| underline | Si le composant est souligné.   | boolean | —                                           | true    |
| disabled  | Si le composant est désactivé.  | boolean | —                                           | false   |
| href      | Identique au `href` natif.      | string  | —                                           | -       |
| icon      | Nom de classe de l'icône.       | string  | —                                           | -       |
