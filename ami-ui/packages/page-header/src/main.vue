<template>
  <div class="ami-page-header">
    <div class="ami-page-header__left" @click="$emit('back')">
      <i class="ami-icon-back"></i>
      <div class="ami-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="ami-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import {t} from 'ami-ui/src/locale';
export default {
  name: 'AmiPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
