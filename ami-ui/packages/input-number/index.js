import AmiInputNumber from './src/input-number';

/* istanbul ignore next */
AmiInputNumber.install = function(Vue) {
  Vue.component(AmiInputNumber.name, AmiInputNumber);
};

export default AmiInputNumber;
