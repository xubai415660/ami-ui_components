import AmiAutocomplete from './src/autocomplete';

/* istanbul ignore next */
AmiAutocomplete.install = function(Vue) {
  Vue.component(AmiAutocomplete.name, AmiAutocomplete);
};

export default AmiAutocomplete;
