import AmiIcon from './src/icon.vue';

/* istanbul ignore next */
AmiIcon.install = function(Vue) {
  Vue.component(AmiIcon.name, AmiIcon);
};

export default AmiIcon;
