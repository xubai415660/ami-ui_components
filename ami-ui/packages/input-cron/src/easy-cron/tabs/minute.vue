<template>
<div class="minute-list">
<!--  每分-->
  <div class="minute-list-item">
    <ami-radio v-model="type" class="choice" label="TYPE_EVERY" :disabled="disabled">每分</ami-radio>
  </div>
  <!-- 区间-->
  <div class="minute-list-item">
    <ami-radio v-model="type" label="TYPE_RANGE" class="choice" :disabled="disabled">区间</ami-radio>
    <span></span>
    从 &nbsp; <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :max="maxValue" :min="minValue" v-model="valueRange.start" :precision="0">
  </ami-input-number> &nbsp;
    分&nbsp;至 &nbsp;
    <ami-input-number size="small" :disabled="type!=TYPE_RANGE || disabled" :max="maxValue" :min="minValue" v-model="valueRange.end" :precision="0" /> &nbsp;分
  </div>
  <!--循环-->
  <div class="minute-list-item">
    <ami-radio v-model="type" label="TYPE_LOOP" class="choice" :disabled="disabled">循环</ami-radio>
    从 &nbsp;
    <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :max="maxValue" :min="minValue" v-model="valueLoop.start" :precision="0" /> &nbsp;
    分开始，间隔 &nbsp;
    <ami-input-number size="small" :disabled="type!=TYPE_LOOP || disabled" :max="maxValue" :min="minValue" v-model="valueLoop.interval" :precision="0" /> &nbsp;分
  </div>
  <!--指定-->
  <div class="minute-list-item">
    <ami-radio v-model="type" label="TYPE_SPECIFY" class="choice" :disabled="disabled">指定</ami-radio>
    <div class="minute-list-item-checkout">
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
    name: 'minute',
    mixins: [mixin],
    watch: {
      value_c(newVal, oldVal) {
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
      this.parseProp(this.prop);
    }
  };
</script>