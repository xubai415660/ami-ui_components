<!--
 @description：复选框
 @author：张时友
 @date：Created in  2022/3/29 14:18
 @modified By：
 @version: 1.0.0
 -->
<template>
  <div class="check" :style="{cursor:disabled?'default':'pointer'}" @click.stop.prevent="clickCheck()">
    <span :class="['box', val ? 'check-box' : 'check-box2', { 'check-box1': disabled }]"> </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'check',
  props: {
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  data() {
    return {
      val: Boolean
    };
  },
  methods: {
    init() {
      this.val = this.value;
    },
    clickCheck() {
      if (this.disabled) return;
      this.val = !this.val;
      this.$emit('input', this.val);
      this.$emit('change', this.val);
    }
  },
  watch: {
    value() {
      this.init();
    }
  }
};
</script>

