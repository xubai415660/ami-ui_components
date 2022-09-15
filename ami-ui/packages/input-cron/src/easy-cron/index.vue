<!--
 * @description: 表达式输入框-弹窗内容
 * @author: wanghao
 * @Date: 2022-03-22 15:49:07
 * @Modified By: wanghao
 * @version: 1.0.0
-->
<template>
    <!-- 弹窗内容 -->
    <div class="ami-input-cron-card">
      <div class="cron-card-content">
        <!-- 左边内容部分-->
        <div class="cron-card-content-left">
          <i class="ami-icon-set-up info">配置数据</i>
          <!--tab栏切换-->
          <ami-tabs v-model="curtab" type="card">
            <ami-tab-pane label="秒" name="second" v-if="!hideSecond">
              <second-ui v-model="second" :disabled="disabled"></second-ui>
            </ami-tab-pane>
            <ami-tab-pane label="分" name="minute">
              <minute-ui v-model="minute" :disabled="disabled"></minute-ui>
            </ami-tab-pane>
            <ami-tab-pane label="时" name="hour">
              <hour-ui v-model="hour" :disabled="disabled"></hour-ui>
            </ami-tab-pane>
            <ami-tab-pane label="日" name="day">
              <day-ui v-model="day" :week="week" :disabled="disabled"></day-ui>
            </ami-tab-pane>
            <ami-tab-pane label="月" name="month">
              <month-ui v-model="month" :disabled="disabled"></month-ui>
            </ami-tab-pane>
            <ami-tab-pane label="周" name="week">
              <week-ui v-model="week" :day="day" :disabled="disabled"></week-ui>
            </ami-tab-pane>
            <ami-tab-pane label="年" name="year" v-if="!hideYear && !hideSecond">
              <year-ui v-model="year" :disabled="disabled"></year-ui>
            </ami-tab-pane>
          </ami-tabs>
        </div>
        <div class="cron-card-content-center">
          <h1></h1>
          <div class="table" v-for="(item,index) in tableData" :key="index">
              <div class="table-name">{{item.name}}</div>
              <!-- 文字显示-->
                <div class="table-value">
                  <ami-tooltip :content="item.value" placement="top" effect="light">
                   <span>{{item.value}}</span>
                  </ami-tooltip>
                </div>
            </div>
        </div>
<!--        <div class="cron-card-content-right">-->
<!--          <i class="ami-icon-tickets">执行记录</i>-->
<!--          &lt;!&ndash; 时间部分&ndash;&gt;-->
<!--          <div class="ami-icon-panel">-->
<!--            <span class="ami-icon-panel-left">执行时间</span>-->
<!--            <ami-date-picker DatePicker class="ami-icon-panel-right" v-model="startTime" type="datetime" placeholder="请选择执行开始时间"></ami-date-picker>-->
<!--          </div>-->
<!--          &lt;!&ndash; 执行预览&ndash;&gt;-->
<!--          <div class="ami-icon-panel">-->
<!--            <ami-tooltip class="item" effect="dark" content="执行预览解析不含年参数" placement="right-end">-->
<!--              <span class="ami-icon-panel-left">执行预览</span>-->
<!--            </ami-tooltip>-->
<!--            <ami-input-->
<!--                type="textarea"-->
<!--                :value="preTimeList"-->
<!--                :rows="14"-->
<!--                placeholder="请输入内容"-->
<!--                readonly>-->
<!--            </ami-input>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
</template>

<script>
  import SecondUi from './tabs/second';
  import MinuteUi from './tabs/minute';
  import HourUi from './tabs/hour';
  import DayUi from './tabs/day';
  import WeekUi from './tabs/week';
  import MonthUi from './tabs/month';
  import YearUi from './tabs/year';
  import CronParser from 'cron-parser';
  import dateFormat from './format-date';// 日期格式化
  import { debounce } from 'debounce';
  export default {
    name: 'input-cron',
    model: {
      prop: 'cronValue',
      event: 'change'
    },
    props: {
      // 监听v-model 绑定的值
      cronValue: {
        type: String,
        default: ''
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 执行时间
      exeStartTime: {
        type: [Number, String, Object],
        default: 0
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
      }
    },
    data() {
      return {
        curtab: this.hideSecond ? 'minute' : 'second',
        second: '*', // 秒
        minute: '*', // 分
        hour: '*', // 时
        day: '*', // 日
        month: '*', // 月
        week: '?', // 周
        year: '*', // 年
        startTime: new Date(),
        preTimeList: '执行预览，会忽略年份参数',
        columns: [{ title: ' ', width: '80', key: 'name' }, { title: ' ', key: 'value' }]
      };
    },
    computed: {
      tableData() {
        let c = this.hideSecond ? [] : [{ name: '秒', value: this.second }];
        c = c.concat([
          { name: '分', value: this.minute },
          { name: '时', value: this.hour },
          { name: '日', value: this.day },
          { name: '月', value: this.month },
          { name: '周', value: this.week }
        ]);
        return (this.hideSecond || this.hideYear) ? c.concat({ name: '表达式', value: this.cronValue_c })
          : c.concat(
            { name: '年', value: this.year },
            { name: '表达式', value: this.cronValue_c },
            { name: '表达式(不含年)', value: this.cronValue_c2 }
          );
      },
      cronValue_c() {
        let result = [];
        if (!this.hideSecond) result.push(this.second ? this.second : '*');
        result.push(this.minute ? this.minute : '*');
        result.push(this.hour ? this.hour : '*');
        result.push(this.day ? this.day : '*');
        result.push(this.month ? this.month : '*');
        result.push(this.week ? this.week : '?');
        if (!this.hideYear && !this.hideSecond) result.push(this.year ? this.year : '*');
        return result.join(' ');
      },
      cronValue_c2() {
        const v = this.cronValue_c;
        if (this.hideYear || this.hideSecond) return v;
        const vs = v.split(' ');
        return vs.slice(0, vs.length - 1).join(' ');
      }
    },
    watch: {
      cronValue(newVal, oldVal) {
        if (newVal === this.cronValue_c) {
          // console.info('same cron value: ' + newVal)
          return;
        }
        this.formatValue();
      },
      cronValue_c(newVal, oldVal) {
        this.calTriggerList();
        this.$emit('change', newVal);
      },
      exeStartTime(newVal, oldVal) {
        this.calStartTime();
      },
      startTime(newVal, oldVal) {
        this.calTriggerList();
      }
    },
    methods: {
      // 格式值
      formatValue() {
        // console.info(this.cronValue)
        if (!this.cronValue) return;
        const values = this.cronValue.split(' ').filter(item => !!item);
        if (!values || values.length <= 0) return;
        let i = 0;
        if (!this.hideSecond) this.second = values[i++];
        if (values.length > i) this.minute = values[i++];
        if (values.length > i) this.hour = values[i++];
        if (values.length > i) this.day = values[i++];
        if (values.length > i) this.month = values[i++];
        if (values.length > i) this.week = values[i++];
        if (values.length > i) this.year = values[i];
      },
      calTriggerList: debounce(function() {
        this.calTriggerListInner();
      }, 500),
      // 触发器列表内部
      calTriggerListInner() {
        // 设置了回调函数
        if (this.remote) {
          this.remote(this.cronValue_c2, +this.startTime, v => { this.preTimeList = v; });
          return;
        }
        // 去掉年份参数
        const e = this.cronValue_c2;
        // console.info('>>>>>>' + e);
        const format = 'yyyy-MM-dd hh:mm:ss';
        const options = {
          currentDate: dateFormat(this.startTime, format)
        };
        // console.info(options)
        const iter = CronParser.parseExpression(e, options);
        const result = [];
        for (let i = 0; i < 5; i++) {
          result.push(dateFormat(new Date(iter.next()), format));
        }
        this.preTimeList = result.length > 0 ? result.join('\n') : '无执行时间';
      },
      // 开始时间
      calStartTime() {
        if (!this.exeStartTime) {
          this.startTime = new Date();
          return;
        }
        try {
          this.startTime = new Date(this.exeStartTime);
        } catch (e) {
          this.startTime = new Date();
        }
      }
    },
    components: {
      SecondUi,
      MinuteUi,
      HourUi,
      DayUi,
      WeekUi,
      MonthUi,
      YearUi
    },
    created() {
      this.formatValue();
      this.calStartTime();
      this.$nextTick(() => {
        this.calTriggerListInner();
      });
    }
  };
</script>
