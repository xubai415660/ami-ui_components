import AmiOption from '../select/src/option';

/* istanbul ignore next */
AmiOption.install = function(Vue) {
  Vue.component(AmiOption.name, AmiOption);
};

export default AmiOption;
