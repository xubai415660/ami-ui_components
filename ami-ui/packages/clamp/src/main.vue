<!--
 * @description:Clamp 文字显示
 * @author: wanghao
 * @Date: 2022-03-29 20:20:50
 * @Modified By:
 * @version: 1.0.0
-->
<template>
  <div ref="textOverflow" class="ami-clamp" :style="boxStyle">
    <div :class="autoresize === true ? 'autoresize':''">
    <!-- before 文字之前显示内容   -->
    <slot name="before"></slot>
    <ami-tooltip :disabled="showtip||expanded" :content="text" :placement="placement" :effect="effect">
      <span ref="overEllipsis">{{realText}}</span>
    </ami-tooltip>
    <!-- after 文字之后显示内容   -->
    <span class="slot-after" ref="slotRef" v-if="showSlotNode">
       <slot name="after"></slot>
    </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AmiClamp',
  props: {
    // 文本
    text: {
      type: String,
      default: ''
    },
    // 最大行数
    maxLines: {
      type: Number,
      default: 2
    },
    // 扩展(显示全部)
    expanded: {
      type: Boolean,
      default: false
    },
    // 省略符号
    ellipsis: {
      type: String,
      default: '...'
    },
    // 文字提示主题色
    effect: {
      type: String,
      default: 'dark'
    },
    // 文字显示对其方向 方向-对齐位置
    placement: {
      type: String,
      default: 'bottom'
    },
    // 是否显示（可见）
    showtip: {
      type: Boolean,
      default: false
    },
    // 宽度
    width: {
      type: Number,
      default: 0
    },
    // 最大高度
    maxHeight: {
      type: Number,
      default: 0
    },
    // 自动调整大小
    autoresize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      offset: this.text.length,
      slotBoxWidth: 0,
      textBoxWidth: this.width,
      // 控制slot是否隐藏
      showSlotNode: false
    };
  },
  computed: {
    // 最大高度
    boxhight() {
      if (this.maxHeight) {
        return {
          height: this.maxHeight + 'px'
        };
      }
    },
    // 计算宽度
    boxStyle() {
      if (this.width) {
        return {
          width: this.width + 'px'
        };
      }
    },
    // 返回展示的文字
    realText() {
      // 是否被截取
      const isCutOut = this.offset !== this.text.length;
      let realText = this.text;
      if (isCutOut && !this.expanded) {
        // ellipsis  省略符号
        realText = this.text.slice(0, this.offset) + this.ellipsis;
      }
      return realText;
    }
  },
  watch: {
    realText(newVal, oldVal) {
      this.$emit('chang', newVal);
    }
  },
  methods: {
    // 计算截取位置
    calculateOffset(from, to) {
      this.$nextTick(() => {
        if (Math.abs(from - to) <= 1) return;
        if (this.isOverflow()) {
          to = this.offset;
        } else {
          from = this.offset;
        }
        this.offset = Math.floor((from + to) / 2);
        this.calculateOffset(from, to);
      });
    },
    // 判断是否超出最大行数
    isOverflow() {
      const { len, lastWidth } = this.getLines();

      if (len < this.maxLines) {
        return false;
      }
      if (this.maxLines) {
        // 超出部分 行数 > 最大行数 或则  已经是最大行数但最后一行宽度 + 后面内容超出正常宽度
        const lastLineOver = !!(len === this.maxLines && lastWidth + this.slotBoxWidth > this.textBoxWidth);
        if (len > this.maxLines || lastLineOver) {
          return true;
        }
      }
      return false;
    },
    // 获取当前文本行数
    getLines() {
      const clientRects = this.$refs.overEllipsis.getClientRects();
      return {
        len: clientRects.length,
        lastWidth: clientRects[clientRects.length - 1].width
      };
    }
  },
  mounted() {
    // 计算插槽内容宽度
    const { len } = this.getLines();
    if (len > this.maxLines) {
      this.showSlotNode = true;
      this.$nextTick(() => {
        this.slotBoxWidth = this.$refs.slotRef.clientWidth;
        this.textBoxWidth = this.$refs.textOverflow.clientWidth;
        this.calculateOffset(0, this.text.length);
      });
    }
  }
};
</script>
