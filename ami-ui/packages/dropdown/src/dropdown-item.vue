<template>
  <li
      :class="{
      'is-disabled': disabled,
      'ami-dropdown-menu__item--divided': divided
    }"
      class="ami-dropdown-menu__item"
      @click="handleClick"
      :aria-disabled="disabled"
      :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
import Emitter from 'ami-ui/src/mixins/emitter';

export default {
  name: 'AmiDropdownItem',

  mixins: [Emitter],

  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean,
    icon: String
  },

  methods: {
    handleClick(e) {
      this.dispatch('AmiDropdown', 'menu-item-click', [this.command, this]);
    }
  }
};
</script>
