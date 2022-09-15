<template>
  <div class="ami-base-chart" ref="dom">
  </div>
</template>
<script>
export default {
  name: 'AmiBaseChart',
  props: {
    option: {
      type: Object,
      default: function() {
        return null;
      }
    },
    noData: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      dom: null
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let _this = this
      if (!this.dom){
        _this.dom = echarts.init(
          _this.$refs.dom
        );
      }
      _this.dom.setOption(_this.option);
      window.addEventListener(
        'resize',
        () => _this.init.resize(),
        false
      )
      this.dom.on('click', _this.click);
    }
  },
  beforeDestroy(){
    if(this.dom){
      this.dom.dispose()
      this.dom=null
    }
  },
  watch: {
    option: {
      immediate: true,
      deep: true,
      handler() {
        if (this.dom && this.option && !this.noData) {
          this.dom.setOption(this.option, true);
        }
      }
    }
  }
};
</script>
