import ServiceTable from './src/main';
/* istanbul ignore next */
ServiceTable.install = function(Vue) {
  Vue.component(ServiceTable.name, ServiceTable);
};
export default ServiceTable;
