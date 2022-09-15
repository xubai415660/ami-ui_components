import AmiTableColumn from '../table/src/table-column';

/* istanbul ignore next */
AmiTableColumn.install = function(Vue) {
  Vue.component(AmiTableColumn.name, AmiTableColumn);
};

export default AmiTableColumn;
