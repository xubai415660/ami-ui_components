import AmiCollapse from './src/collapse';

/* istanbul ignore next */
AmiCollapse.install = function(Vue) {
  Vue.component(AmiCollapse.name, AmiCollapse);
};

export default AmiCollapse;

