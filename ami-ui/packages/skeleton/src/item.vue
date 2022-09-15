<template>
  <div :class="['ami-skeleton__item', `ami-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'"/>
  </div>
</template>

<script>
  import ImgPlaceholder from './img-placeholder';

  export default {
    name: 'AmiSkeletonItem',
    props: {
      variant: {
        type: String,
        default: 'text'
      }
    },
    components: {
      [ImgPlaceholder.name]: ImgPlaceholder
    }
  };
</script>
