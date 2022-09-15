import VersionNumber from './src/main';
/* istanbul ignore next */
VersionNumber.install = function(Vue) {
  Vue.component(VersionNumber.name, VersionNumber);
};
export default VersionNumber;
