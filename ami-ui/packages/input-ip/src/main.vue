<template>
  <div class="ami-input-ip">
    <ul class="ipAdress">
      <li v-for="(item,index) in ipAddress" :key="index">
        <ami-input class="ipInputClass"
                   ref="ipInput"
                   type="text"
                   :size="size"
                   v-model="item.value"
                   v-bind="$attrs"
                   :disabled="disabled"
                   @input="checkIpVal(item)"
                   @keyup="turnIpPosition(item,index,$event)"
        />
        <span class="ip-box">.</span>
      </li>
    </ul>
    <div class="icon" v-if="this.clearable && this.readonly!==true">
      <i class="ami-icon-circle-close" @click="clear()"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AmiInputIp',
  props: {
    size: {
      type: String,
      default: 'large'
    },
    // 侦听的值
    value: {
      type: String,
      default: ''
    },
    // 设置返回值类型
    formatStyle: {
      type: String,
      default: 'node'
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clearable: false,
      ipAddress: [{value: ''}, {value: ''}, {value: ''}, {value: ''}]
    };
  },
  mounted() {
    if (this.value && this.value.length > 0 && this.value.split('.').length === 4) {
      var arr = this.value.split('.');
      for (var i in arr) {
        this.ipAddress[i].value = arr[i];
      }
    }
  },
  watch: {
    // 双向数据绑定的value
    ipAddress: {
      handler(newVal, oldVal) {
        let str = '';
        for (const i in this.ipAddress) {
          if (this.formatStyle === 'noNode') {
            str += this.formatter(this.ipAddress[i].value);
          } else {
            if (str.length > 0) {
              str += '.';
            }
            str += this.ipAddress[i].value === '' ? '000' : this.ipAddress[i].value;
          }
        }
        if (str === '000000000000' || str === '000.000.000.000') {
          str = '';
        }
        // 判断输入框是有值
        this.clearable = str.length > 0;
        this.$emit('input', str);
      },
      deep: true
    }
  },
  methods: {
    // 清空
    clear() {
      for (var i in this.ipAddress) {
        this.ipAddress[i].value = '';
      }
    },
    // 格式化补零
    formatter(val) {
      let value = val.toString();
      if (value.length === 2) {
        value = '0' + value;
      } else if (value.length === 1) {
        value = '00' + value;
      } else if (value.length === 0) {
        value = '000';
      }
      return value;
    },
    //  检查ip输入是否为0-255
    checkIpVal(item) {
      // 确保每个值都处于0-255
      var val = item.value;
      // 处理非数字
      val = val.toString().replace(/[^0-9]/g, '');
      val = parseInt(val, 10);
      if (isNaN(val)) {
        val = '';
      } else {
        val = val < 0 ? 0 : val;
        val = val > 255 ? 255 : val;
      }
      item.value = val;
    },
    // 光标位置判断
    turnIpPosition(item, index, event) {
      let self = this;
      let e = event || window.event;
      if (e.keyCode === 37) {
        // 左箭头向左跳转，左一不做任何措施
        if (index !== 0 && e.currentTarget.selectionStart === 0) {
          self.$refs.ipInput[index - 1].focus();
        }
      } else if (e.keyCode === 39) {
        // 右箭头向右跳转，右一不做任何措施
        if (index !== 3 && e.currentTarget.selectionStart === item.value.toString().length) {
          self.$refs.ipInput[index + 1].focus();
        }
      } else if (e.keyCode === 8) {
        // 删除键把当前数据删除完毕后会跳转到前一个input，左一不做任何处理
        if (index !== 0 && item.value === '') {
          self.$refs.ipInput[index - 1].focus();
        }
      } else if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 190) {
        // 回车键、空格键、冒号均向右跳转，右一不做任何措施
        if (index !== 3) {
          self.$refs.ipInput[index + 1].focus();
        }
      } else if (item.value.toString().length === 3) {
        // 满3位，光标自动向下一个文本框
        if (index !== 3) {
          self.$refs.ipInput[index + 1].focus();
        }
      }
    }
  }
};
</script>
