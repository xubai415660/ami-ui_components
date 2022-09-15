<template>
  <aside :style="{ width }" class="ami-aside">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'AmiAside',

    componentName: 'AmiAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
