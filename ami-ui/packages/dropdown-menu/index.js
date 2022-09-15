import AmiDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
AmiDropdownMenu.install = function(Vue) {
  Vue.component(AmiDropdownMenu.name, AmiDropdownMenu);
};

export default AmiDropdownMenu;
