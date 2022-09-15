<!--
 * @description: 月
 * @author: wanghao
 * @Date: 2022-03-22 20:17:27
 * @Modified By: 
 * @version: 1.0.0
-->
<template>
  <div class="month-list">
    <div class="month-list-item">
      <ami-radio class="choice" v-model="type" label="TYPE_EVERY" :disabled="disabled">每月</ami-radio>
    </div>
    <!-- 区间 -->
    <div class="month-list-item">
      <ami-radio v-model="type" label="TYPE_RANGE" class="choice" :disabled="disabled">区间</ami-radio>
      <span></span>
      从 &nbsp; <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :max="maxValue" :min="minValue" v-model="valueRange.start" :precision="0">
    </ami-input-number> &nbsp;
      月&nbsp;至 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :max="maxValue" :min="minValue" v-model="valueRange.end" :precision="0" /> &nbsp;月
    </div>
    <!-- 循环 -->
    <div class="month-list-item">
      <ami-radio v-model="type" label="TYPE_LOOP" class="choice" :disabled="disabled">循环</ami-radio>
      从 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :max="maxValue" :min="minValue" v-model="valueLoop.start" :precision="0" /> &nbsp;
      月开始，间隔 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :max="maxValue" :min="minValue" v-model="valueLoop.interval" :precision="0" /> &nbsp;月
    </div>
    <!-- 指定 -->
    <div class="month-list-item">
      <ami-radio v-model="type" label="TYPE_SPECIFY" class="choice" :disabled="disabled">指定</ami-radio>
      <div class="month-list-item-checkout">
        <ami-checkbox-group v-model="valueList" size="small">
          <ami-checkbox class="list-check-item" v-for="i in maxValue" :key="`key-${i}`" :label="i" :disabled="type!=TYPE_SPECIFY || disabled">
            <span>{{i}}</span>
          </ami-checkbox>
        </ami-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin';
export default {
  name: 'month',
  mixins: [mixin],
  data() {
    return {};
  },
  watch: {
    value_c(newVal, oldVal) {
      this.$emit('change', newVal);
    }
  },
  created() {
    this.DEFAULT_VALUE = '*';
    this.minValue = 1;
    this.maxValue = 12;
    this.valueRange.start = 1;
    this.valueRange.end = 12;
    this.valueLoop.start = 1;
    this.valueLoop.interval = 1;
    this.parseProp(this.prop);
  }
};
</script>

