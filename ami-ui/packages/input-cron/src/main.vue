<!--
 * @description: InputCron cron 表达式输入框
 * @author: wanghao
 * @Date: 2022-03-22 15:49:07
 * @Modified By: wanghao
 * @version: 1.0.0
-->
<template>
  <div class="Ami-input-cron" >
      <ami-input class="ami-input-cron" style="width: auto" v-model="editCronValue" :placeholder="placeholder" :disabled="disabled" :clearable="clearable" :size="size">
        <template slot="append">
          <ami-button slot="append" :icon="icon" @click="showConfigDlg">
            <!-- 文字 -->
            <span>{{ configure }}</span>
          </ami-button>
        </template>
      </ami-input>
      <!-- 弹窗 -->
      <ami-dialog :title="title"  append-to-body :visible.sync="dialogVisible" width="960px" @before-close="dialogVisible = false">
        <!-- 内容区域-->
        <easy-cron ref="child" v-model="editCronValue" :disabled="disabled" :exeStartTime="exeStartTime" :hideYear="hideYear" :remote="remote" :hideSecond="hideSecond"></easy-cron>
        <span slot="footer" class="dialog-footer">
        <ami-button @click="dialogVisible = false" :round="round">取 消</ami-button>
        <ami-button type="primary" v-if="!disabled" @click="submit" :round="round">确 定</ami-button>
      </span>
      </ami-dialog>
      <!-- 数据预览 -->
        <ami-input
            v-if="preview===true"
            class="ami-input-cron-text"
            type="textarea"
            :value="previewlist"
            :rows="6"
            readonly>
        </ami-input>
    </div>
</template>
<script>
  import EasyCron from './easy-cron';
  export default {
    name: 'ami-input-cron',
    model: {
      prop: 'cronValue',
      event: 'change'
    },
    /**
     * 绑定事件
     * @access：change
     */
    props: {
      // v-model监听值
      cronValue: {
        type: String,
        default: ''
      },
      // 输入框展位文本
      placeholder: {
        type: String,
        default: '请输入cron表达式'
      },
      // 执行时间
      exeStartTime: {
        type: [Number, String, Object],
        default: 0
      },
      // 预览
      preview: {
        type: Boolean,
        default: false
      },
      // 隐藏选择--秒，年
      hideSecond: {
        type: Boolean,
        default: false
      },
      // 隐藏选择--年
      hideYear: {
        type: Boolean,
        default: false
      },
      // 回调函数，在创建和值改变时回调
      remote: {
        type: Function,
        default: null
      },
      // 输入框是否清空
      clearable: {
        type: Boolean,
        default: false
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 圆角
      round: {
        type: Boolean,
        default: false
      },
      // (输入框)尺寸大小 large、small 和 mini 三种尺寸
      size: {
        type: String,
        default: ''
      },
      // 输入框按钮文字
      configure: {
        type: String,
        default: '配置'
      },
      // 输入框图标
      icon: {
        type: String,
        default: 'ami-icon-date'
      },
      // 弹窗标题
      title: {
        type: String,
        default: '配置Cron表达式'
      }
    },
    data() {
      return {
        editCronValue: this.cronValue,
        dialogVisible: false, // 弹窗
        // 预览子组件数据
        previewlist: ''
      };
    },
    watch: {
      /**
       * 监听v-model 绑定的值
       */
      cronValue(newVal, oldVal) {
        if (newVal === this.editCronValue) {
          return;
        }
        this.editCronValue = newVal;
      },
      /**
       * 编辑 cronValue
       */
      editCronValue(newVal, oldVal) {
        this.$emit('change', newVal);
      }
    },
    methods: {
      /**
       * @default:通知父组件促发change事件
       * 提交数据
       */
      submit(newVal) {
        this.$emit('click', newVal);
        // 调用子组件数据
        this.previewlist = this.$refs.child.preTimeList;
        // 触发父组件click事件，关闭弹窗
        this.dialogVisible = false;
      },
      /**
       * 打开弹出层（弹窗）
       */
      showConfigDlg() {
        if (!this.disabled) {
          this.dialogVisible = true;
        } else {
          this.dialogVisible = true;
        }
      }
    },
    components: {
      EasyCron
    }
  };
</script>
