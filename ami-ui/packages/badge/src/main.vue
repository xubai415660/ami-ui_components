<template>
  <div class="ami-badge">
    <slot></slot>
    <transition name="ami-zoom-in-center">
      <sup
          v-show="!hidden && (content || content === 0 || isDot)"
          v-text="content"
          :class="[
          type ? 'ami-badge__content--' + type : null,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]"
          class="ami-badge__content">
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AmiBadge',

  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    }
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
  }
};
</script>
