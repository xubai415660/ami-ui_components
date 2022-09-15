import InputCron from './src/main';
/* istanbul ignore next */
InputCron.install = function(Vue) {
  Vue.component(InputCron.name, InputCron);
};
export default InputCron;
