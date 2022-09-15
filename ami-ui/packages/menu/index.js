import AmiMenu from './src/menu';

/* istanbul ignore next */
AmiMenu.install = function(Vue) {
  Vue.component(AmiMenu.name, AmiMenu);
};

export default AmiMenu;
