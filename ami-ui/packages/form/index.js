import AmiForm from './src/form';

/* istanbul ignore next */
AmiForm.install = function(Vue) {
  Vue.component(AmiForm.name, AmiForm);
};

export default AmiForm;
