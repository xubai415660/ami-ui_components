<template>
  <header :style="{ height }" class="ami-header">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'AmiHeader',

    componentName: 'AmiHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
