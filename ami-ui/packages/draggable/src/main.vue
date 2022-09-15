<template>
  <div class="ami-draggable">
    <draggable v-bind="$attrs" v-on="$listeners" v-model="list">
      <transition-group>
          <slot />
      </transition-group>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  name: 'AmiDraggable',
  components: {draggable},
  props: {
    value: {
      type: Array
    }
  },
  data() {
    return {list: []};
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler() {
        this.init();
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.list = this.value;
    }
  }

};
</script>
