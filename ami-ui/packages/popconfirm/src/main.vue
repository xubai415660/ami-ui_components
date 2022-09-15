<template>
  <ami-popover
      v-bind="$attrs"
      v-model="visible"
      trigger="click"
  >
    <div class="ami-popconfirm">
      <p class="ami-popconfirm__main">
        <i
            v-if="!hideIcon"
            :class="icon"
            class="ami-popconfirm__icon"
            :style="{color: iconColor}"
        ></i>
        {{ title }}
      </p>
      <div class="ami-popconfirm__action">
        <ami-button
            :type="cancelButtonType"
            size="mini"
            @click="cancel"
        >
          {{ displayCancelButtonText }}
        </ami-button>
        <ami-button
            :type="confirmButtonType"
            size="mini"
            @click="confirm"
        >
          {{ displayConfirmButtonText }}
        </ami-button>
      </div>
    </div>
    <slot name="reference" slot="reference"></slot>
  </ami-popover>
</template>

<script>
import AmiPopover from 'ami-ui/packages/popover';
import AmiButton from 'ami-ui/packages/button';
import {t} from 'ami-ui/src/locale';

export default {
  name: 'AmiPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String
    },
    cancelButtonText: {
      type: String
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'ami-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AmiPopover,
    AmiButton
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t('el.popconfirm.confirmButtonText');
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t('el.popconfirm.cancelButtonText');
    }
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
};
</script>
