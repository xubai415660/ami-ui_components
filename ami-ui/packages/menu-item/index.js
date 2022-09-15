import AmiMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
AmiMenuItem.install = function(Vue) {
  Vue.component(AmiMenuItem.name, AmiMenuItem);
};

export default AmiMenuItem;
