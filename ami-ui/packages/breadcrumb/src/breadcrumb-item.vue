<template>
  <span class="ami-breadcrumb__item">
    <span
        :class="['ami-breadcrumb__inner', to ? 'is-link' : '']"
        ref="link"
        role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" :class="separatorClass" class="ami-breadcrumb__separator"></i>
    <span v-else class="ami-breadcrumb__separator" role="presentation">{{ separator }}</span>
  </span>
</template>
<script>
  export default {
    name: 'AmiBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: '',
        separatorClass: ''
      };
    },

    inject: ['elBreadcrumb'],

    mounted() {
      this.separator = this.elBreadcrumb.separator;
      this.separatorClass = this.elBreadcrumb.separatorClass;
      const link = this.$refs.link;
      link.setAttribute('role', 'link');
      link.addEventListener('click', _ => {
        const { to, $router } = this;
        if (!to || !$router) return;
        this.replace ? $router.replace(to) : $router.push(to);
      });
    }
  };
</script>
