<template>
  <li class="ami-timeline-item">
    <div class="ami-timeline-item__tail"></div>

    <div v-if="!$slots.dot"
         :class="[
        `ami-timeline-item__node--${size || ''}`,
        `ami-timeline-item__node--${type || ''}`
      ]"
         class="ami-timeline-item__node"
         :style="{
        backgroundColor: color
      }"
    >
      <i v-if="icon"
         class="ami-timeline-item__icon"
         :class="icon"
      ></i>
    </div>
    <div v-if="$slots.dot" class="ami-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="ami-timeline-item__wrapper">
      <div v-if="!hideTimestamp && placement === 'top'"
           class="ami-timeline-item__timestamp is-top">
        {{ timestamp }}
      </div>

      <div class="ami-timeline-item__content">
        <slot></slot>
      </div>

      <div v-if="!hideTimestamp && placement === 'bottom'"
           class="ami-timeline-item__timestamp is-bottom">
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'AmiTimelineItem',

    inject: ['timeline'],

    props: {
      timestamp: String,

      hideTimestamp: {
        type: Boolean,
        default: false
      },

      placement: {
        type: String,
        default: 'bottom'
      },

      type: String,

      color: String,

      size: {
        type: String,
        default: 'normal'
      },

      icon: String
    }
  };
</script>
