import ModelTitle from './src/main';
/* istanbul ignore next */
ModelTitle.install = function(Vue) {
  Vue.component(ModelTitle.name, ModelTitle);
};
export default ModelTitle;
