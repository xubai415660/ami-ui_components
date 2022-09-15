<template>
  <li class="ami-menu-item-group">
    <div :style="{paddingLeft: levelPadding + 'px'}" class="ami-menu-item-group__title">
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'AmiMenuItemGroup',

  componentName: 'AmiMenuItemGroup',

  inject: ['rootMenu'],
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      paddingLeft: 20
    };
  },
  computed: {
    levelPadding() {
      let padding = 20;
      let parent = this.$parent;
      if (this.rootMenu.collapse) return 20;
      while (parent && parent.$options.componentName !== 'AmiMenu') {
        if (parent.$options.componentName === 'AmiSubmenu') {
          padding += 20;
        }
        parent = parent.$parent;
      }
      return padding;
    }
  }
};
</script>

