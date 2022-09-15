<template>
  <div aria-label="Breadcrumb" class="ami-breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AmiBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorClass: {
        type: String,
        default: ''
      }
    },

    provide() {
      return {
        elBreadcrumb: this
      };
    },

    mounted() {
      const items = this.$el.querySelectorAll('.ami-breadcrumb__item');
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
      }
    }
  };
</script>
