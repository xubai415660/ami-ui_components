import OnlineExcel from './src/main';
/* istanbul ignore next */
OnlineExcel.install = function(Vue) {
  Vue.component(OnlineExcel.name, OnlineExcel);
};
export default OnlineExcel;
