<!--
 * @description: 日
 * @author: wanghao
 * @Date: 2022-03-22 20:17:27
 * @Modified By:
 * @version: 1.0.0
-->
<template>
  <div class="day-list">
    <div class="day-list-item">
      <!--    不设置-->
      <ami-radio class="choice" v-model="type" label="TYPE_NOT_SET" :disabled="disableChoice">不设置</ami-radio>
      <!--    每日-->
      <ami-radio class="choice" v-model="type" label="TYPE_EVERY" :disabled="disableChoice">每日</ami-radio>
      <!--    最后一日-->
      <ami-radio class="choice" v-model="type" label="TYPE_LAST" :disabled="disableChoice">最后一日</ami-radio>
    </div>
    <!--  区间-->
    <div class="day-list-item">
      <ami-radio v-model="type" label="TYPE_RANGE" class="choice" :disabled="disableChoice">区间</ami-radio>
      <span></span>
      从 &nbsp; <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disableChoice" :max="maxValue" :min="minValue" v-model="valueRange.start" :precision="0">
      </ami-input-number> &nbsp;
      日&nbsp;至 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disableChoice" :max="maxValue" :min="minValue" v-model="valueRange.end" :precision="0" /> &nbsp;日
    </div>
    <!--  循环-->
    <div class="day-list-item">
      <ami-radio v-model="type" label="TYPE_LOOP" class="choice" :disabled="disableChoice">循环</ami-radio>
      从 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disableChoice" :max="maxValue" :min="minValue" v-model="valueLoop.start" :precision="0" /> &nbsp;
      日开始，间隔 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disableChoice" :max="maxValue" :min="minValue" v-model="valueLoop.interval" :precision="0" /> &nbsp;日
    </div>
    <!--  工作日-->
    <div class="day-list-item">
      <ami-radio v-model="type" label="TYPE_WORK" class="choice" :disabled="disableChoice">工作日</ami-radio>
      本月
      <ami-input-number size="small" :disabled="type!=TYPE_WORK || disableChoice" :max="maxValue" :min="minValue" v-model="valueWork" :precision="0" />
      日，最近的工作日
    </div>
    <!--  指定-->
    <div class="day-list-item">
      <ami-radio v-model="type" label="TYPE_SPECIFY" class="choice" :disabled="disableChoice">指定</ami-radio>
      <div class="day-list-item-checkout">
        <ami-checkbox-group v-model="valueList" size="small">
          <ami-checkbox class="list-check-item" v-for="i in maxValue+1" :key="`key-${i-1}`" :label="i-1" :disabled="type!=TYPE_SPECIFY || disableChoice">
            <span>{{i-1}}</span>
          </ami-checkbox>
        </ami-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin';
export default {
  name: 'day',
  mixins: [mixin],
  // 接受--周
  props: {
    week: {
      type: String,
      default: '?'
    }
  },
  data() {
    return {};
  },
  computed: {
    // 每日禁用（最后一日）
    disableChoice() {
      return (this.week && this.week !== '?') || this.disabled
    }
  },
  watch: {
    value_c(newVal, oldVal) {
      // 数值变化
      this.updateValue();
    },
    week(newVal, oldVal) {
      // console.info('new week: ' + newVal)
      this.updateValue();
    }
  },
  methods: {
    updateValue() {
      this.$emit('change', this.disableChoice ? '?' : this.value_c);
    }
  },
  created() {
    this.DEFAULT_VALUE = '*';
    this.minValue = 1;
    this.maxValue = 31;
    this.valueRange.start = 1;
    this.valueRange.end = 31;
    this.valueLoop.start = 1;
    this.valueLoop.interval = 1;
    this.parseProp(this.prop);
  }
};
</script>
