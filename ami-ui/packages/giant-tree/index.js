import GiantTree from './src/main';
/* istanbul ignore next */
GiantTree.install = function(Vue) {
  Vue.component(GiantTree.name, GiantTree);
};
export default GiantTree;
