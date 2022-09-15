<!----------------------------------------------------------------------------
 @description：处理表格普通列
 @author：张时友
 @date：Created in  2022/2/11 09:36
 @modified By：
 @version: 1.0.0
 ---------------------------------------------------------------------------->

<template>
  <ami-table-column
    :align="child.align"
    :class-name="child.className"
    :filter-method="child.filterMethod"
    :filter-multiple="child.filterMultiple"
    :filter-placement="child.filterPlacement"
    :filtered-value="child.filteredValue"
    :filters="child.filters"
    :fixed="child.fixed"
    :formatter="child.formatter"
    :header-align="child.headerAlign"
    :label="child.label"
    :label-class-name="child.labelClassName"
    :min-width="child.minWidth"
    :prop="child.key"
    :render-header="child.renderHeader"
    :reserve-selection="child.reserveSelection"
    :resizable="child.resizable"
    :selectable="child.selectable"
    :show-head-overflow-tooltip="child.showHeadOverflowTooltip"
    :show-overflow-tooltip="child.showOverflowTooltip"
    :sort-by="child.sortBy"
    :sort-method="child.sortMethod"
    :sort-orders="child.sortOrders"
    :sortable="child.sortable"
    :type="child.type"
    :width="child.width"
  >
    <template v-if="child.children">
      <tableColumn v-for="child in child.children" :key="child.key" :child="child"></tableColumn>
    </template>
  </ami-table-column>
</template>

<script>
import amiTableColumn from 'ami-ui/packages/table-column';
export default {
  name: "tableColumn",
  components: {amiTableColumn},
  props: {
    child: {
      type: Object,
      default: () => {
        return [];
      }
    }
  }
};
</script>
