<template>
  <footer :style="{ height }" class="ami-footer">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'AmiFooter',

    componentName: 'AmiFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
