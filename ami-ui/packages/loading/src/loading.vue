<template>
  <transition name="ami-loading-fade" @after-leave="handleAfterLeave">
    <div
        v-show="visible"
        class="ami-loading-mask"
        :style="{ backgroundColor: background || '' }"
        :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="ami-loading-spinner">
<!--        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">-->
<!--          <circle class="path" cx="50" cy="50" r="20" fill="none"/>-->
<!--        </svg>-->
        <img src="data:image/png;base64,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"
             v-if="!spinner"
             class="circular">
        <i v-else :class="spinner"></i>
        <p v-if="text" class="ami-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        text: null,
        spinner: null,
        background: null,
        fullscreen: true,
        visible: false,
        customClass: ''
      };
    },

    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      }
    }
  };
</script>
