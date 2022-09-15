<template>
  <transition name="ami-zoom-in-top" @after-leave="doDestroy">
    <div
        v-show="showPopper"
        class="ami-autocomplete-suggestion ami-popper"
        :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
        :style="{ width: dropdownWidth }"
        role="region">
      <ami-scrollbar
          tag="ul"
          view-class="ami-autocomplete-suggestion__list"
          wrap-class="ami-autocomplete-suggestion__wrap">
        <li v-if="!parent.hideLoading && parent.loading"><i class="ami-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </ami-scrollbar>
    </div>
  </transition>
</template>
<script>
import Popper from 'ami-ui/src/utils/vue-popper';
import Emitter from 'ami-ui/src/mixins/emitter';
import AmiScrollbar from 'ami-ui/packages/scrollbar';

export default {
  components: {AmiScrollbar},
  mixins: [Popper, Emitter],

  componentName: 'AmiAutocompleteSuggestions',

  data() {
    return {
      parent: this.$parent,
      dropdownWidth: ''
    };
  },

  props: {
    options: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    id: String
  },

  methods: {
    select(item) {
      this.dispatch('AmiAutocomplete', 'item-click', item);
    }
  },

  updated() {
    this.$nextTick(_ => {
      this.popperJS && this.updatePopper();
    });
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
    this.referenceList = this.$el.querySelector('.ami-autocomplete-suggestion__list');
    this.referenceList.setAttribute('role', 'listbox');
    this.referenceList.setAttribute('id', this.id);
  },

  created() {
    this.$on('visible', (val, inputWidth) => {
      this.dropdownWidth = inputWidth + 'px';
      this.showPopper = val;
    });
  }
};
</script>
