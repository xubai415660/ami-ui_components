import AmiTable from './src/table';

/* istanbul ignore next */
AmiTable.install = function(Vue) {
  Vue.component(AmiTable.name, AmiTable);
};

export default AmiTable;
