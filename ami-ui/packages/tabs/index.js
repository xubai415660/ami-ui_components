import AmiTabs from './src/tabs';

/* istanbul ignore next */
AmiTabs.install = function(Vue) {
  Vue.component(AmiTabs.name, AmiTabs);
};

export default AmiTabs;
