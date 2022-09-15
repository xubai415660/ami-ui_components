<template>
  <section :class="{ 'is-vertical': isVertical }" class="ami-container">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'AmiContainer',

    componentName: 'AmiContainer',

    props: {
      direction: String
    },

    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'ami-header' || tag === 'ami-footer';
          })
          : false;
      }
    }
  };
</script>
