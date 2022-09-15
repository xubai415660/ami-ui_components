import AmiCol from './src/col';

/* istanbul ignore next */
AmiCol.install = function(Vue) {
  Vue.component(AmiCol.name, AmiCol);
};

export default AmiCol;

