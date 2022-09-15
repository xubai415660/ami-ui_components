import AmiProgress from './src/progress';

/* istanbul ignore next */
AmiProgress.install = function(Vue) {
  Vue.component(AmiProgress.name, AmiProgress);
};

export default AmiProgress;
