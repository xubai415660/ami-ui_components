import AmiSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
AmiSubmenu.install = function(Vue) {
  Vue.component(AmiSubmenu.name, AmiSubmenu);
};

export default AmiSubmenu;
