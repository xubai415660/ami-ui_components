<template>
  <transition name="ami-alert-fade">
    <div
        class="ami-alert"
        :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
        v-show="visible"
        role="alert"
    >
      <i v-if="showIcon" :class="[ iconClass, isBigIcon ]" class="ami-alert__icon"></i>
      <div class="ami-alert__content">
        <span v-if="title || $slots.title" :class="[ isBoldTitle ]" class="ami-alert__title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default && !description" class="ami-alert__description">
          <slot></slot>
        </p>
        <p v-if="description && !$slots.default" class="ami-alert__description">{{ description }}</p>
        <i v-show="closable" :class="{ 'is-customed': closeText !== '', 'ami-icon-close': closeText === '' }"
           class="ami-alert__closebtn" @click="close()">{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'ami-icon-success',
    'warning': 'ami-icon-warning',
    'error': 'ami-icon-error'
  };
  export default {
    name: 'AmiAlert',

    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        validator: function(value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
      }
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `ami-alert--${this.type}`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'ami-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
