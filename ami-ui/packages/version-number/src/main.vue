<template>
  <div class="ami-version-number"  :class="disabled ? 'is-disabled' : ''">
    <span class="separator prefix" v-if="VPrefix.length > 0">{{ VPrefix }}</span>
    <ami-input
      v-model.trim="viewList[0]"
      oninput="value=value.replace(/[^\d]/g,'')"
      :disabled="inputDisabled"
      v-bind="$attrs"
      :size="inputSize"
    ></ami-input>
    <span class="separator">{{ separator }}</span>
    <ami-input
      v-model.trim="viewList[1]"
      oninput="value=value.replace(/[^\d]/g,'')"
      :disabled="inputDisabled"
      v-bind="$attrs"
      :size="inputSize"
    ></ami-input>
    <span class="separator">{{ separator }}</span>
    <ami-input
      v-model.trim="viewList[2]"
      oninput="value=value.replace(/[^\d]/g,'')"
      :disabled="inputDisabled"
      v-bind="$attrs"
      :size="inputSize"
    ></ami-input>
    <div class="icon" v-if="showClear" @click="clear()">
      <i class="ami-icon-circle-close"></i>
    </div>
    </div>
</template>
<script>
import AmiInput from 'ami-ui/packages/input';
import Emitter from 'ami-ui/src/mixins/emitter';
export default {
  name: 'AmiVersionNumber',
  components: {AmiInput},
  mixins: [Emitter],
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    /**
     * @description： v-model绑定的值
     * @param {string}
     * @default： 1.2.2
     * */
    value: {
      type: String,
      default: ''
    },
    /**
     * @description： 每个数字之间的分隔符
     * @param {string}
     * @default： .
     * */
    separator: {
      type: String,
      default: '.'
    },
    /**
     * @description： 是否禁用
     * @param {boolean}
     * @default：false
     * */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description： 是否显示清空按钮
     * @param {boolean}
     * @default：true
     * */
    clearable: {
      type: Boolean,
      default: false
    },
    /**
     * @description： 版本类型
     * @param {string}
     * @default：  ''
     * */
    VPrefix: {
      type: String,
      default: 'V'
    }
  },
  data() {
    return {
      viewList: [],
      blackValue: ''
    };
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    showClear() {
      if ((this.clearable && this.viewList.length) || this.inputDisabled > 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * @description：初始化数据
     * @param ,
     * @returns null
     **/
    init() {
      this.viewList = ['', '', ''];
      this.blackValue = this.value;
      this.viewList = this.blackValue.split(this.separator);
    },
    /**
     * @description：处理数据给父元素
     * @param ,
     * @returns null
     **/
    valueHandler() {
      let list = this.viewList;
      return list.join(this.separator);
    },
    /**
     * @description：清空事件
     * @param ,
     * @returns null
     **/
    clear() {
      this.viewList = ['', '', ''];
    }
  },
  watch: {
    value() {
      this.init();
    },
    /**
     * @description：将数据绑定给v-model
     * @param ,
     * @returns null
     **/
    viewList: {
      deep: true,
      handler() {
        console.log('输出值：', this.valueHandler());
        this.$emit('input', this.valueHandler());
      }
    }
  }
};
</script>
