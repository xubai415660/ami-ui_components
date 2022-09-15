<template>
  <div class="ami-empty">
    <div :style="imageStyle" class="ami-empty__image">
      <img v-if="image" :src="image" ondragstart="return false">
      <slot v-else name="image">
        <img-empty/>
      </slot>
    </div>
    <div class="ami-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="ami-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ImgEmpty from './img-empty.vue';
import {t} from 'ami-ui/src/locale';

export default {
  name: 'AmiEmpty',
  components: {
    [ImgEmpty.name]: ImgEmpty
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    imageSize: Number,
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    emptyDescription() {
      return this.description || t('el.empty.description');
    },
    imageStyle() {
      return {
        width: this.imageSize ? `${this.imageSize}px` : ''
      };
    }
  }
};
</script>
