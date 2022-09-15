<template>
  <transition-group
      tag="ul"
      :class="[
      'ami-upload-list',
      'ami-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
      name="ami-list"
  >
    <li
        v-for="file in files"
        :class="['ami-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
        :key="file.uid"
        tabindex="0"
        @keydown.delete="!disabled && $emit('remove', file)"
        @focus="focusing = true"
        @blur="focusing = false"
        @click="focusing = false"
    >
      <slot :file="file">
        <img
            class="ami-upload-list__item-thumbnail"
            v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
            :src="file.url" alt=""
        >
        <a class="ami-upload-list__item-name" @click="handleClick(file)">
          <i class="ami-icon-document" :class="fileIcon"></i>{{ file.name }}
        </a>
        <label class="ami-upload-list__item-status-label">
          <i :class="{
            'ami-icon-upload-success': true,
            'ami-icon-circle-check': listType === 'text',
            'ami-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }"></i>
        </label>
        <i v-if="!disabled" class="ami-icon-close" :class="closeIcon" @click="$emit('remove', file)"></i>
        <i v-if="!disabled" class="ami-icon-close-tip">{{ t('el.upload.deleteTip') }}</i>
        <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <ami-progress
            v-if="file.status === 'uploading'"
            :type="listType === 'picture-card' ? 'circle' : 'line'"
            :stroke-width="listType === 'picture-card' ? 6 : 2"
            :percentage="parsePercentage(file.percentage)">
        </ami-progress>
        <span v-if="listType === 'picture-card'" class="ami-upload-list__item-actions">
          <span
              class="ami-upload-list__item-preview"
              v-if="handlePreview && listType === 'picture-card'"
              @click="handlePreview(file)"
          >
            <i class="ami-icon-zoom-in"></i>
          </span>
          <span
              v-if="!disabled"
              class="ami-upload-list__item-delete"
              @click="$emit('remove', file)"
          >
            <i class="ami-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
import Locale from 'ami-ui/src/mixins/locale';
import AmiProgress from 'ami-ui/packages/progress';

export default {

  name: 'AmiUploadList',

  mixins: [Locale],

  data() {
    return {
      focusing: false
    };
  },
  components: {AmiProgress},

  props: {
    files: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handlePreview: Function,
    listType: String,
    fileIcon: String,
    closeIcon: String
  },
  methods: {
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleClick(file) {
      this.handlePreview && this.handlePreview(file);
    }
  }
};
</script>
