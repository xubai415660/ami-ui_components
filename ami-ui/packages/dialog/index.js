import AmiDialog from './src/component';

/* istanbul ignore next */
AmiDialog.install = function(Vue) {
  Vue.component(AmiDialog.name, AmiDialog);
};

export default AmiDialog;
