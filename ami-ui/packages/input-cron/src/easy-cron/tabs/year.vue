<!--
 * @description:年
 * @author: wanghao
 * @Date: 2022-03-22 20:17:27
 * @Modified By: 
 * @version: 1.0.0
-->
<template>
  <div class="year-list">
    <!-- 每年 -->
    <div class="year-list-item">
      <ami-radio v-model="type" label="TYPE_EVERY" class="choice" :disabled="disabled">每年</ami-radio>
    </div>
    <!-- 区间 -->
    <div class="year-list-item">
      <ami-radio v-model="type" label="TYPE_RANGE" class="choice" :disabled="disabled">区间</ami-radio>
      从
       <!-- valueRange.end 不可以输入到本年以前 -->
      <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :min="nowYear" :precision="0" v-model="valueRange.start" />
      年&nbsp;至
      <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :min="nowYear+1" :precision="0" v-model="valueRange.end" />
      年
    </div>
    <!-- 循环 -->
    <div class="year-list-item">
      <ami-radio v-model="type" label="TYPE_LOOP" class="choice" :disabled="disabled">循环</ami-radio>
      从
      <!-- valueRange.end 不可以输入到本年以前 -->
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :min="nowYear" :precision="0" v-model="valueLoop.start" />
      年开始，间隔
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :min="1" :precision="0" v-model="valueLoop.interval" />
      年
    </div>
  </div>
</template>

<script>
import mixin from './mixin';
export default {
  name: 'year',
  mixins: [mixin],
  data() {
    return {nowYear: new Date().getFullYear()};
  },
  watch: {
    value_c(newVal, oldVal) {
      // console.info('change:' + newVal)
      this.$emit('change', newVal);
    }
  },
  created() {
    const nowYear = (new Date()).getFullYear();
    this.DEFAULT_VALUE = '*';
    this.minValue = 0;
    this.maxValue = 0;
    this.valueRange.start = nowYear;
    this.valueRange.end = nowYear + 100;
    this.valueLoop.start = nowYear;
    this.valueLoop.interval = 1;
    // console.info('created')
    this.parseProp(this.prop);
  }
};
</script>
