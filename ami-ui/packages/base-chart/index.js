import BaseChart from './src/main';
/* istanbul ignore next */
BaseChart.install = function(Vue) {
  Vue.component(BaseChart.name, BaseChart);
};
export default BaseChart;
