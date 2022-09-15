import AmiButton from './src/button';

/* istanbul ignore next */
AmiButton.install = function(Vue) {
  Vue.component(AmiButton.name, AmiButton);
};

export default AmiButton;
