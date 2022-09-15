import AmiInput from './src/input';

/* istanbul ignore next */
AmiInput.install = function(Vue) {
  Vue.component(AmiInput.name, AmiInput);
};

export default AmiInput;
