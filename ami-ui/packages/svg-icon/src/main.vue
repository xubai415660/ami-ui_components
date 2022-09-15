<template>
  <div class="ami-svg-icon"  v-on="$listeners">
  <svg  class="ami-svg-icon__svg" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
  </div>
</template>

<script>
require('./icon/file');
export default {
  name: 'AmiSvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#${this.name}`;
    }
  }
};
</script>

