import AmiDropdown from './src/dropdown';

/* istanbul ignore next */
AmiDropdown.install = function(Vue) {
  Vue.component(AmiDropdown.name, AmiDropdown);
};

export default AmiDropdown;
