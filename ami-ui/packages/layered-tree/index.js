import LayeredTree from './src/main';
/* istanbul ignore next */
LayeredTree.install = function(Vue) {
  Vue.component(LayeredTree.name, LayeredTree);
};
export default LayeredTree;
