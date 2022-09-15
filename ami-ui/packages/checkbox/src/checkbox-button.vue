<template>
  <label
      :class="[
        size ? 'ami-checkbox-button--' + size : '',
        { 'is-disabled': isDisabled },
        { 'is-checked': isChecked },
        { 'is-focus': focus },
      ]"
      class="ami-checkbox-button"
      role="checkbox"
      :aria-checked="isChecked"
      :aria-disabled="isDisabled"
  >
    <input
        v-if="trueLabel || falseLabel"
        class="ami-checkbox-button__original"
        type="checkbox"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    <input
        v-else
        class="ami-checkbox-button__original"
        type="checkbox"
        :name="name"
        :disabled="isDisabled"
        :value="label"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">

    <span class="ami-checkbox-button__inner"
          v-if="$slots.default || label"
          :style="isChecked ? activeStyle : null">
      <slot>{{ label }}</slot>
    </span>

  </label>
</template>
<script>
import Emitter from 'ami-ui/src/mixins/emitter';

export default {
  name: 'AmiCheckboxButton',

  mixins: [Emitter],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  },
  computed: {
    model: {
      get() {
        return this._checkboxGroup
          ? this.store : this.value !== undefined
            ? this.value : this.selfModel;
      },

      set(val) {
        if (this._checkboxGroup) {
          this.isLimitExceeded = false;
          (this._checkboxGroup.min !== undefined &&
              val.length < this._checkboxGroup.min &&
              (this.isLimitExceeded = true));

          (this._checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max &&
              (this.isLimitExceeded = true));

          this.isLimitExceeded === false &&
            this.dispatch('AmiCheckboxGroup', 'input', [val]);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = val;
        }
      }
    },

    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        // 修复多选框组中的多选框不能被选中的问题
        if (typeof this.label !== "object"){
          return this.model.indexOf(this.label) > -1
        }else {
          return this.model.some(item => item.label === this.label.label)
        }
        // return this.model.indexOf(this.label) > -1 || JSON.stringify(this.model).indexOf(JSON.stringify(this.label)) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },

    _checkboxGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'AmiCheckboxGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },

    store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },

    activeStyle() {
      return {
        backgroundColor: this._checkboxGroup.fill || '',
        borderColor: this._checkboxGroup.fill || '',
        color: this._checkboxGroup.textColor || '',
        'box-shadow': '-1px 0 0 0 ' + this._checkboxGroup.fill

      };
    },

    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },

    size() {
      return this._checkboxGroup.checkboxGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },

    /* used to make the isDisabled judgment under max/min props */
    isLimitDisabled() {
      const { max, min } = this._checkboxGroup;
      return !!(max || min) &&
          (this.model.length >= max && !this.isChecked) ||
          (this.model.length <= min && this.isChecked);
    },

    isDisabled() {
      return this._checkboxGroup
        ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled
        : this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    addToStore() {
      if (
        Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
      ) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange(ev) {
      if (this.isLimitExceeded) return;
      let value;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(() => {
        if (this._checkboxGroup) {
          this.dispatch('AmiCheckboxGroup', 'change', [this._checkboxGroup.value]);
        }
      });
    }
  },

  created() {
    this.checked && this.addToStore();
  }
};
</script>
