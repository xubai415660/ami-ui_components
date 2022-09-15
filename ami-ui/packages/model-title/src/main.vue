<template>
  <div class="ami-model-title" :class="{ 'border-bottom': borderBottom }">
    <div class="ami-model-title__left">
      <i></i>
      <span>{{ title }}</span>
    </div>
    <div class="ami-model-title__right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AmiModelTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    borderBottom: {
      type: Boolean,
      default: false
    }
  }
};
</script>
