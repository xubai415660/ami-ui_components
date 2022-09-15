<template>
  <ul v-show="visible" class="ami-select-group__wrap">
    <li class="ami-select-group__title">{{ label }}</li>
    <li>
      <ul class="ami-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
import Emitter from 'ami-ui/src/mixins/emitter';

export default {
  mixins: [Emitter],

  name: 'AmiOptionGroup',

  componentName: 'AmiOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: true
    };
  },

  watch: {
    disabled(val) {
      this.broadcast('AmiOption', 'handleGroupDisabled', val);
    }
  },

  methods: {
    queryChange() {
      this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
    }
  },

  created() {
    this.$on('queryChange', this.queryChange);
  },

  mounted() {
    if (this.disabled) {
      this.broadcast('AmiOption', 'handleGroupDisabled', this.disabled);
    }
  }
};
</script>
