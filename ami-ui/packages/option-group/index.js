import AmiOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
AmiOptionGroup.install = function(Vue) {
  Vue.component(AmiOptionGroup.name, AmiOptionGroup);
};

export default AmiOptionGroup;
