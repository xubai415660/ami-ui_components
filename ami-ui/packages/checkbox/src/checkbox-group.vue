<script>
  import Emitter from 'ami-ui/src/mixins/emitter';

  export default {
    name: 'AmiCheckboxGroup',

    componentName: 'AmiCheckboxGroup',

    mixins: [Emitter],

    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('AmiFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div aria-label="checkbox-group" class="ami-checkbox-group" role="group">
    <slot></slot>
  </div>
</template>
