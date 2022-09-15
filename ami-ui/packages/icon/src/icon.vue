<template>
  <i :class="'ami-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'AmiIcon',

    props: {
      name: String
    }
  };
</script>
