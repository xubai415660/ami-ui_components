<template>
  <div class="ami-collapse-item"
       :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
        role="tab"
        :aria-expanded="isActive"
        :aria-controls="`ami-collapse-content-${id}`"
        :aria-describedby="`ami-collapse-content-${id}`"
    >
      <div
          :id="`ami-collapse-head-${id}`"
          @click="handleHeaderClick"
          role="button"
          class="ami-collapse-item__header"
          :tabindex="disabled ? undefined : 0"
          @keyup.space.enter.stop="handleEnterClick"
          :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
            class="ami-collapse-item__arrow ami-icon-arrow-right"
            :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <ami-collapse-transition>
      <div
          :id="`ami-collapse-content-${id}`"
          v-show="isActive"
          role="tabpanel"
          :aria-hidden="!isActive"
          :aria-labelledby="`ami-collapse-head-${id}`"
          class="ami-collapse-item__wrap"
      >
        <div class="ami-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </ami-collapse-transition>
  </div>
</template>
<script>
import AmiCollapseTransition from 'ami-ui/src/transitions/collapse-transition';
import Emitter from 'ami-ui/src/mixins/emitter';
import {generateId} from 'ami-ui/src/utils/util';

export default {
  name: 'AmiCollapseItem',

  componentName: 'AmiCollapseItem',

  mixins: [Emitter],

  components: {AmiCollapseTransition},

  data() {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block'
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId()
    };
  },

  inject: ['collapse'],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      }
    },
    disabled: Boolean
  },

  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    }
  },

  methods: {
    handleFocus() {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true;
        } else {
          this.isClick = false;
        }
      }, 50);
    },
    handleHeaderClick() {
      if (this.disabled) return;
      this.dispatch('AmiCollapse', 'item-click', this);
      this.focusing = false;
      this.isClick = true;
    },
    handleEnterClick() {
      this.dispatch('AmiCollapse', 'item-click', this);
    }
  }
};
</script>
