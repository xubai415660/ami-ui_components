import MapBasic from './src/main';
/* istanbul ignore next */
MapBasic.install = function(Vue) {
  Vue.component(MapBasic.name, MapBasic);
};
export default MapBasic;
