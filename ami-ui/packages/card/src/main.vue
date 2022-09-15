<template>
  <div :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'" class="ami-card">
    <div v-if="$slots.header || header" class="ami-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :style="bodyStyle" class="ami-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AmiCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
</script>
