<!--
 * @description: 周
 * @author: wanghao
 * @Date: 2022-03-22 20:17:27
 * @Modified By: 
 * @version: 1.0.0
-->
<template>
  <div class="week-list">
    <!-- 不设置 -->
    <div class="week-list-item">
      <ami-radio class="choice" v-model="type" label="TYPE_NOT_SET" :disabled="disableChoice">不设置</ami-radio>
      <span>日和周只能设置其中之一</span>
    </div>
    <!-- 区间 -->
    <div class="week-list-item">
      <ami-radio v-model="type" label="TYPE_RANGE" class="choice" :disabled="disableChoice">区间</ami-radio>
      从
      <ami-select v-model="valueRange.start" :disabled="type!=TYPE_RANGE || disableChoice" size="small" style="width: 25%">
        <ami-option v-for="(v,k) in WEEK_MAP" :key="`week-pre-Lf13-${v}`" :label="k" :value="v">{{v}}
        </ami-option>
      </ami-select>
      至
      <ami-select v-model="valueRange.end" :disabled="type!=TYPE_RANGE || disableChoice" size="small" style="width: 25%">
        <ami-option v-for="(v,k) in WEEK_MAP" :key="`week-next-1fas-${v}`" :label="k" :value="v">{{v}}
        </ami-option>
      </ami-select>
    </div>
    <!-- 循环 -->
    <div class="week-list-item">
      <ami-radio v-model="type" label="TYPE_LOOP" class="choice" :disabled="disableChoice">循环</ami-radio>
      从
      <ami-select v-model="valueLoop.start" :disabled="type!=TYPE_LOOP || disableChoice" size="small" style="width: 25%">
        <ami-option v-for="(v,k) in WEEK_MAP" :key="`week-pre-Lf13-${v}`" :label="k" :value="v">
        </ami-option>
      </ami-select>
      开始，间隔
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disableChoice" :max="maxValue" :min="minValue" v-model="valueLoop.interval" :precision="0" />
      天
    </div>
    <!-- 指定 -->
    <div class="week-list-item">
      <ami-radio v-model="type" label="TYPE_SPECIFY" class="choice" :disabled="disableChoice">指定</ami-radio>
      <div class="month-list-item-checkout">
        <ami-checkbox-group v-model="valueList" size="small">
          <ami-checkbox-button v-for="(v,k) in WEEK_MAP" :key="`key-01jfs-${v}`" :label="v" :disabled="type!=TYPE_SPECIFY || disableChoice">
            <span>{{k}}</span>
          </ami-checkbox-button>
        </ami-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin';
import { WEEK_MAP_EN, replaceWeekName } from './const.js';
// 设置周指定
const WEEK_MAP = {
  '周日': 0,
  '周一': 1,
  '周二': 2,
  '周三': 3,
  '周四': 4,
  '周五': 5,
  '周六': 6
};
export default {
  name: 'week',
  mixins: [mixin],
  props: {
    day: {
      type: String,
      default: '*'
    }
  },
  data() {
    return {
      WEEK_MAP,
      WEEK_MAP_EN
    };
  },
  computed: {
    disableChoice() {
      return (this.day && this.day !== '?') || this.disabled;
    }
  },
  watch: {
    value_c(newVal, oldVal) {
      // 如果设置日，那么星期就直接不设置
      this.updateValue();
    },
    day(newVal) {
      // console.info('new day: ' + newVal)
      this.updateValue();
    }
  },
  methods: {
    updateValue() {
      this.$emit('change', this.disableChoice ? '?' : this.value_c);
    },
    preProcessProp(c) {
      return replaceWeekName(c);
    }
  },
  created() {
    this.DEFAULT_VALUE = '*';
    // 0,7表示周日 1表示周一
    this.minValue = 0;
    this.maxValue = 6;
    this.valueRange.start = 0;
    this.valueRange.end = 6;
    this.valueLoop.start = 2;
    this.valueLoop.interval = 1;
    this.parseProp(this.prop);
  }
};
</script>
