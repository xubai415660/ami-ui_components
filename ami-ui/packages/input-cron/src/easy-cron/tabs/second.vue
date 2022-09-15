<!--
 * @description: 秒
 * @author: wanghao
 * @Date: 2022-03-22 20:17:27
 * @Modified By:
 * @version: 1.0.0
-->
<template>
  <div class="second-list">
     <div class="second-list-item">
      <ami-radio v-model="type" class="choice" label="TYPE_EVERY" :disabled="disabled">每秒</ami-radio>
    </div>
     <!-- 区间-->
     <div class="second-list-item">
      <ami-radio v-model="type" label="TYPE_RANGE" class="choice" :disabled="disabled">区间</ami-radio>
      <span></span>
      从 &nbsp; <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :max="maxValue" :min="minValue" v-model="valueRange.start" :precision="0">
      </ami-input-number> &nbsp;
      秒&nbsp;至 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :max="maxValue" :min="minValue" v-model="valueRange.end" :precision="0" /> &nbsp;秒
    </div>
     <!--循环-->
     <div class="second-list-item">
      <ami-radio v-model="type" label="TYPE_LOOP" class="choice" :disabled="disabled">循环</ami-radio>
      从 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :max="maxValue" :min="minValue" v-model="valueLoop.start" :precision="0" /> &nbsp;
      秒开始，间隔 &nbsp;
      <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :max="maxValue" :min="minValue" v-model="valueLoop.interval" :precision="0" /> &nbsp;秒
    </div>
     <!--指定-->
     <div class="second-list-item">
      <ami-radio v-model="type" label="TYPE_SPECIFY" class="choice" :disabled="disabled">指定</ami-radio>
      <div class="second-list-item-checkout">
        <ami-checkbox-group v-model="valueList" size="small">
          <ami-checkbox class="list-check-item" v-for="i in maxValue+1" :key="`key-${i-1}`" :label="i-1" :disabled="type!=TYPE_SPECIFY || disabled">
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
  name: 'second',
  mixins: [mixin],
  data() {
    return {
    };
  },
  watch: {
    value_c(newVal, oldVal) {
      // console.info('change:' + newVal)
      this.$emit('change', newVal);
    }
  },
  created() {
    this.DEFAULT_VALUE = '*';
    this.minValue = 0;
    this.maxValue = 59;
    this.valueRange.start = 0;
    this.valueRange.end = 59;
    this.valueLoop.start = 0;
    this.valueLoop.interval = 1;
    // console.info('created')
    this.parseProp(this.prop);
  }
};
</script>

