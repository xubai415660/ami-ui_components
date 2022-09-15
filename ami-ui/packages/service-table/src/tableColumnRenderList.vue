<!----------------------------------------------------------------------------
 @description：处理表格render渲染列
 @author：张时友
 @date：Created in  2022/2/11 09:36
 @modified By：
 @version: 1.0.0
 ---------------------------------------------------------------------------->

<template>
  <ami-table-column
    :align="child.align"
    :fixed="child.fixed"
    :label="child.label"
    :min-width="child.minWidth"
    :prop="child.key"
    :type="child.type"
    :width="child.width"
    :key="child.key + index"
    :class-name="child.className"
    :filter-method="child.filterMethod"
    :filter-multiple="child.filterMultiple"
    :filter-placement="child.filterPlacement"
    :filtered-value="child.filteredValue"
    :filters="child.filters"
    :formatter="child.formatter"
    :header-align="child.headerAlign"
    :label-class-name="child.labelClassName"
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
  >
    <template v-if="child.children">
      <tableColumnRenderList v-for="child in child.children" :key="child.key" :child="child"></tableColumnRenderList>
    </template>
    <template slot-scope="scope">
      <tableColumnRender
        v-if="child.renderType === 'render'"
        :column="scope.column"
        :index="scope.$index"
        :render="child.render"
        :row="scope.row"
      ></tableColumnRender>
    </template>
  </ami-table-column>
</template>

<script>
import tableColumnRender from "./tableColumnRender";
import amiTableColumn from 'ami-ui/packages/table-column';

export default {
  name: "tableColumnRenderList",
  components: { tableColumnRender, amiTableColumn},
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
