import AmiTag from './src/tag';

/* istanbul ignore next */
AmiTag.install = function(Vue) {
  Vue.component(AmiTag.name, AmiTag);
};

export default AmiTag;
