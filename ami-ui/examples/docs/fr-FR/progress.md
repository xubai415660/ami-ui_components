## Progress

Progress est utilisé pour afficher la progression d'une opération et informer l'utilisateur de son status actuel.

### Barre de progression linéaire

:::demo Utilisez l'attribut `percentage` pour indiquer le pourcentage. Cet attribut est **requis** et doit être compris entre 0 et 100. Vous pouvez personnaliser le format du texte en définissant le `format`.
```html
<ami-progress :percentage="50"></ami-progress>
<ami-progress :percentage="100" :format="format"></ami-progress>
<ami-progress :percentage="100" status="success"></ami-progress>
<ami-progress :percentage="100" status="warning"></ami-progress>
<ami-progress :percentage="50" status="exception"></ami-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
```
:::

### Pourcentage interne

Dans ce cas le pourcentage ne prends pas de place en plus.

:::demo L'attribut `stroke-width` détermine le `width` de la barre de progression. Utilisez `text-inside` mettre la description à l'intérieur de la barre.

```html
<ami-progress :text-inside="true" :stroke-width="26" :percentage="70"></ami-progress>
<ami-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></ami-progress>
<ami-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></ami-progress>
<ami-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></ami-progress>
```
:::

### Couleur personnalisée

Vous pouvez utiliser l'attribut `color` pour définir la couleur de la barre de progression. il accepte une couleur, une fonction ou un tableau.

:::demo

```html
<ami-progress :percentage="percentage" :color="customColor"></ami-progress>

<ami-progress :percentage="percentage" :color="customColorMethod"></ami-progress>

<ami-progress :percentage="percentage" :color="customColors"></ami-progress>
<div>
  <ami-button-group>
    <ami-button icon="ami-icon-minus" @click="decrease"></ami-button>
    <ami-button icon="ami-icon-plus" @click="increase"></ami-button>
  </ami-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```
:::

### Barre de progression circulaire

:::demo Vous pouvez mettre l'attribut `type` à `circle` pour obtenir une barre circulaire, et utiliser `width` pour changer la taille du cercle.

```html
<ami-progress type="circle" :percentage="0"></ami-progress>
<ami-progress type="circle" :percentage="25"></ami-progress>
<ami-progress type="circle" :percentage="100" status="success"></ami-progress>
<ami-progress type="circle" :percentage="70" status="warning"></ami-progress>
<ami-progress type="circle" :percentage="50" status="exception"></ami-progress>
```
:::

### Barre de progression du tableau de bord

Vous pouvez également spécifier l'attribut `type` de `dashboard` pour utiliser la barre de progression du tableau de bord.

:::demo

```html
<ami-progress type="dashboard" :percentage="percentage" :color="colors"></ami-progress>
<div>
  <ami-button-group>
    <ami-button icon="ami-icon-minus" @click="decrease"></ami-button>
    <ami-button icon="ami-icon-plus" @click="increase"></ami-button>
  </ami-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| --- | ---- | ---- | ---- | ---- |
| **percentage** | Le pourcentage, **requis**. | number | 0-100 | 0 |
| type | Le type de barre. | string | line/circle/dashboard | line |
| stroke-width | La largeur de la barre. | number | — | 6 |
| text-inside | Si le pourcentage doit être à l'intérieur de la barre, ne marche que si `type` est 'line'. | boolean | — | false |
| status | Le statut actuel de la progression. | string | success/exception/text | — |
| color  | La couleur de fon de la barre. Écrase `status`. | string/function/array | — | '' |
| width | La largeur du canvas dans le cas d'une barre circulaire. | number | — | 126 |
| show-text | Si le pourcentage doit être affiché. | boolean | — | true |
| stroke-linecap  | circle/dashboard type shape at the end path | string | butt/round/square | round |
| format  | Vous pouvez personnaliser le format du texte en définissant le format  | function(percentage) | — | — |
