<template>
  <div class="ami-service-table">
    <ami-card class="ami-service-table-card">
      <header v-if="headerShow" :class="[{ 'border-bottom': borderBottom }]">
        <div>
          <i class="ami-button--primary"></i>
          <span>{{ title }}</span>
        </div>
        <div class="title-right">
          <!--          顶部操作区slot-->
          <slot name="titleRight"></slot>
          <ami-divider v-if="$slots.titleRight" direction="vertical"></ami-divider>
          <ami-button v-if="showSetButton" icon="ami-icon-s-tools" round @click="set()">设置</ami-button>
        </div>
      </header>
      <div :class="classBody">
        <ami-table
          ref="tableC"
          v-loading="loading"
          :border="border"
          :cell-class-name="cellClassName"
          :cell-style="cellStyle"
          :current-row-key="currentRowKey"
          :data="tableData_"
          :default-expand-all="defaultExpandAll"
          :default-sort="defaultSort"
          :empty-text="emptyText"
          :expand-row-keys="expandRowKeys"
          :fit="fit"
          :header-cell-class-name="headerCellClassName"
          :header-cell-style="headerCellStyle"
          :header-row-class-name="headerRowClassName"
          :header-row-style="headerRowStyle"
          :height="height"
          :highlight-current-row="highlightCurrentRow"
          :indent="indent"
          :lazy="lazy"
          :load="load"
          :max-height="maxHeight"
          :row-class-name="rowClassName"
          :row-key="rowKey"
          :row-style="rowStyle"
          :select-on-indeterminate="selectOnIndeterminate"
          :show-header="showHeader"
          :show-summary="showSummary"
          :size="size"
          :span-method="spanMethod"
          :stripe="stripe"
          :sum-text="sumText"
          :summary-method="summaryMethod"
          :tooltip-effect="tooltipEffect"
          :tree-props="treeProps"
          inline-border
          @select="select"
          @select-all="selectAll"
          @selection-change="selectionChange"
          @cell-mouse-enter="cellMouseEnter"
          @cell-mouse-leave="cellMouseLeave"
          @cell-click="cellClick"
          @cell-dblclick="cellDblclick"
          @row-click="rowClick"
          @row-contextmenu="rowContextmenu"
          @row-dblclick="rowDblclick"
          @header-click="headerClick"
          @header-contextmenu="headerContextmenu"
          @sort-change="sortChange"
          @filter-change="filterChange"
          @current-change="currentChange"
          @header-dragend="headerDragend"
          @expand-change="expandChange"
        >
          <template v-for="(child, index) in columnsList">
            <ami-table-column
              v-if="child.renderType === 'slot' && child.checked"
              :key="child.key + index"
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
              <template slot-scope="{ ...scope }">
                <slot :name="child.key" :scope="scope" />
              </template>
            </ami-table-column>
            <tableColumnRenderList
              v-else-if="child.renderType === 'render' && child.checked"
              :key="child.key + index"
              :child="child"
            />
            <tableColumn v-else-if="child.checked" :key="child.key + index" :child="child"></tableColumn>
          </template>
        </ami-table>
      </div>
      <footer v-if="pageShow">
        <div class="page">
          <ami-pagination
            :background="background"
            :layout="layout"
            :current-page.sync="currPage_"
            :page-size.sync="pageSize_"
            :total="total"
            :page-sizes="pageSizes"
            v-bind="$attrs"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>

        <div v-if="operation" class="operation">
          <!--          底部右侧操作区slot-->
          <p></p>
          <!--          实现曲线-->
          <div>
            <div class="left">
              <ami-row class="row-1">
                <ami-col :span="12" class="col-1">&nbsp;</ami-col>
                <ami-col :span="12" class="col-2">&nbsp;</ami-col>
              </ami-row>
              <ami-row class="row-2">
                <ami-col :span="12" class="col-3">&nbsp;</ami-col>
                <ami-col :span="12" class="col-4">&nbsp;</ami-col>
              </ami-row>
            </div>
            <div class="right">
              <slot name="bottom"></slot>
            </div>
          </div>
        </div>
      </footer>
      <!--      底部真个插槽  slot-->
      <slot name="foot"></slot>
    </ami-card>
    <amiHeaderTableSet
      ref="headerTableSet"
      :columns="headerTableSetList_"
      :checkList="checkList_"
      :header-select-visible.sync="headerSelectVisible_"
      @getColumns="getColumns"
    />
  </div>
</template>
<script>
import tableColumn from "./tableColumn";
import tableColumnRenderList from "./tableColumnRenderList";
import AmiCard from 'ami-ui/packages/card';
import amiDivider from 'ami-ui/packages/divider';
import amiButton from 'ami-ui/packages/button';
import amiTable from 'ami-ui/packages/table';
import amiRow from 'ami-ui/packages/row';
import amiCol from 'ami-ui/packages/col';
import amiTableColumn from 'ami-ui/packages/table-column';
import amiPagination from 'ami-ui/packages/pagination';
import amiHeaderTableSet from 'ami-ui/packages/table-header-set';
import {deepClone} from '../../../src/utils/util';

export default {
  name: "AmiServiceTable",
  components: {tableColumn, tableColumnRenderList, AmiCard, amiDivider, amiButton, amiTable, amiRow, amiCol, amiHeaderTableSet, amiPagination, amiTableColumn},
  props: {
    /******************页码参数***************************************************************/
    /**
     * @param {Boolean}
     * @description 分页组件，是否为分页按钮添加背景色
     */
    background: {
      type: Boolean,
      default: true
    },

    /**
     * @param {Array}
     * @description 分页组件，每页显示个数选择器的选项设置
     */
    pageSizes: {
      type: Array,
      default() {
        return [15, 25, 50, 100, 300];
      }
    },
    /**
     * @param {String}
     * @description 分页组件布局
     */
    layout: {
      type: String,
      default: " prev, pager, next, totalPage, sizes, jumper"
    },
    /******************SG-UI表格参数***************************************************************/

    /**
     * @param {String}
     *Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；
     * 如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，
     * Table 的高度会受控于外部样式。
     * */
    height: {
      type: String,
      default: "100%"
    },
    /**
     * @description：Table 的最大高度。合法的值为数字或者单位为 px 的高度。
     */
    maxHeight: {
      type: [String, Number]
    },
    /**
     *  @param {Boolean}
     *是否为斑马纹 table
     * */
    stripe: {
      type: Boolean,
      default: true
    },
    /**
     * @description：是否带有纵向边框
     */
    border: {
      type: Boolean,
      default: true
    },
    /**
     * @description：Table 的尺寸
     * @default: mini
     */
    size: {
      type: String,
      default: ""
    },
    /**
     * @description：列的宽度是否自撑开
     * @param:true
     **/
    fit: {
      type: Boolean,
      default: true
    },
    /**
     * @description：是否显示表头
     * @param:true
     **/
    showHeader: {
      type: Boolean,
      default: true
    },
    /**
     * @description：是否要高亮当前行
     * @param:true
     **/
    highlightCurrentRow: {
      type: Boolean,
      default: true
    },
    /**
     * @description：当前行的 key，只写属性
     **/
    currentRowKey: {
      type: [String, Number]
    },
    /**
     * @description：行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
     * @param： row, rowIndex
     **/
    rowClassName: {
      type: [Function, String]
    },
    /**
     * @description：行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
     * @param： row, rowIndex
     **/
    rowStyle: {
      type: [Function, Object]
    },
    /**
     * @description：单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
     * @param： row, column, rowIndex, columnIndex
     **/
    cellClassName: {
      type: [Function, String]
    },
    /**
     * @description：单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。
     * @param： row, column, rowIndex, columnIndex
     **/
    cellStyle: {
      type: [Function, Object]
    },
    /**
     * @description：表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className
     * @param： row, rowIndex
     **/
    headerRowClassName: {
      type: [Function, String]
    },
    /**
     * @description：表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。
     * @param： row, rowIndex
     **/
    headerRowStyle: {
      type: [Function, Object]
    },
    /**
     * @description：表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className
     * @param： row, column, rowIndex, columnIndex
     **/
    headerCellClassName: {
      type: [Function, String]
    },
    /**
     * @description：表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。
     * @param： row, column, rowIndex, columnIndex
     **/
    headerCellStyle: {
      type: [Function, Object]
    },
    /**
     * @param {(Function | String)}
     * 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。
     * 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。
     * @param： row
     **/
    rowKey: {
      type: [Function, String]
    },
    /**
     * @description：空数据时显示的文本内容，也可以通过 slot="empty" 设置
     * @default：暂无数据
     **/
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    /**
     * @description：是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效
     * @default：false
     **/
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    /**
     * @description：可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。
     **/
    expandRowKeys: {
      type: Array
    },
    /**
     * @description：默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序
     * @param：  ascending, descending
     **/
    defaultSort: {
      type: Object
    },
    /**
     * @description：tooltip effect 属性
     * @param：  dark/light
     **/
    tooltipEffect: {
      type: String
    },
    /**
     * @description：是否在表尾显示合计行
     * @default：false
     **/
    showSummary: {
      type: Boolean,
      default: false
    },
    /**
     * @description：合计行第一列的文本
     * @default：合计
     **/
    sumText: {
      type: String,
      default: "合计"
    },
    /**
     * @description：自定义的合计计算方法
     * @param： columns, data
     **/
    summaryMethod: {
      type: Function
    },
    /**
     * @description：合并行或列的计算方法
     * @param： row, column, rowIndex, columnIndex
     **/
    spanMethod: {
      type: Function
    },
    /**
     * @description：在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行
     * @default： true
     **/
    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },
    /**
     * @description：展示树形数据时，树节点的缩进
     * @default： 16
     **/
    indent: {
      type: Number,
      default: 16
    },
    /**
     * @description：是否懒加载子节点数据
     * @default： 16
     **/
    lazy: {
      type: Boolean
    },
    /**
     * @description：加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息
     * @param：row, treeNode, resolve
     **/
    load: {
      type: Function
    },
    /**
     * @description：渲染嵌套数据的配置选项
     * @param {Object}
     * @default：{ hasChildren: 'hasChildren', children: 'children' }
     * */
    treeProps: {
      type: Object,
      default: () => {
        return { children: "children", hasChildren: "hasChildren" };
      }
    },
    /***********************************拓展参数**********************************************/
    /**
     * @param {Boolean} true
     * @description 是否显示标题栏下边框
     */
    borderBottom: {
      type: Boolean,
      default: false
    },
    /**
     * @param {String} ''
     * @description 标题名称
     */
    title: {
      type: String,
      default: "表格"
    },
    /**
     * @param {Boolean} true
     * @description 是否显示标题栏
     */
    headerShow: {
      type: Boolean,
      default: true
    },
    /**
     * @param {Boolean}
     * @description 是否显示分页
     */
    pageShow: {
      type: Boolean,
      default: true
    },
    /**
     * @param {Array}
     * @description 表头数据
     */
    columns: {
      required: true,
      type: Array,
      default: () => {
        return [];
      }
    },

    /**
     * @param {Boolean}
     * @description 是否显示设置按钮
     */
    showSetButton: {
      type: Boolean,
      default: true
    },
    /**
     * @param {String}
     * @description 排序参数(只支持普通列和插槽；插槽只支持后端排序)
     */
    sorts: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /**
     * @param {String}
     * @description 默认页面
     */
    currPage: {
      required: true,
      type: Number,
      default: 1
    },
    /**
     * @param {String}
     * @description 默认条数
     */
    pageSize: {
      required: true,
      type: Number,
      default: 15
    },
    /**
     * @param {String}
     * @description 总条数
     */
    total: {
      required: true,
      type: Number,
      default: 0
    },
    /**
     * @param {Number}
     * @description 从第一列开始到第几列不参数排序（在表格设置中找不到这几列表头字段）参数必须大于等于0
     */
    hiddenNum: {
      type: Number,
      default: 1
    },

    /**
     * 是否显示底部操作区
     * */
    operation: {
      type: Boolean,
      default: false
    },
    loading: {
      required: true,
      type: Boolean,
      default: false
    },
    //
    tableData: {
      required: true,
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    classBody() {
      if (!this.headerShow && this.pageShow) {
        return "ami-service-table-card-header-hidden";
      } else if (this.headerShow && !this.pageShow) {
        return "ami-service-table-card-footer-hidden";
      } else if (!this.headerShow && !this.pageShow) {
        return "ami-service-table-card-hidden";
      } else {
        return "ami-service-table-card-body";
      }
    }
  },
  data() {
    return {
      columnsList: [], //克隆表头数据
      headerTableSetList_: [],
      checkList_: [],
      headerSelectVisible_: false,
      tableData_: this.tableData,
      currPage_: this.currPage,
      pageSize_: this.pageSize
    };
  },
  watch: {
    tableData: {
      deep: true,
      handler(v) {
        this.tableData_ = v;
        this.currPage_ = this.currPage;
        this.pageSize_ = this.pageSize;
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * 初始化表头
     */
    init(l = this.columns) {
      this.columnsList = deepClone(l);
      this.initColumns(this.columnsList);
    },
    // 递归处理表头数据，对于需要统一处理的数据在此处处理
    initColumns(list) {
      list.map((item) => {
        if (!item.align) {
          item.align = "left";
        }
        item.checked = true;
        if (item.showOverflowTooltip !== false) {
          item.showOverflowTooltip = true;
        }
        if (item.children) {
          this.initColumns(item.children);
        }
      });
    },
    /**
     * 获取表头
     */
    getColumns(l) {
      let d = this.columns;
      let li = l;
      for (let i = 0; i < this.hiddenNum; i++) {
        li.unshift(d[i]);
      }
      this.init(li);
      this.$emit("getColumns", li);
    },
    /**
     * 设置表头
     */
    set() {
      let c = this.columns;
      let d = this.columnsList;
      this.headerTableSetList_ = c.slice(this.hiddenNum);
      this.headerSelectVisible_ = true;
      this.checkList_ = d.slice(this.hiddenNum);
      this.$nextTick(() => {
        this.$refs.headerTableSet.init();
      });
    },
    /**************************表格方法******************************************/
    /**
     * @description：当用户手动勾选数据行的 Checkbox 时触发的事件
     * @param：selection, row
     * @returns null
     **/
    select(selection, row) {
      this.$emit("select", selection, row);
    },
    /**
     * @description：当用户手动勾选全选 Checkbox 时触发的事件
     * @param： selection, row
     * @returns null
     **/
    selectAll(selection) {
      this.$emit("select-all", selection);
    },
    /**
     * @description：当选择项发生变化时会触发该事件
     * @param：selection
     * @returns null
     **/
    selectionChange(selection) {
      this.$emit("selection-change", selection);
    },
    /**
     * @description：当单元格 hover 进入时会触发该事件
     * @param：row, column, cell, event
     * @returns null
     **/
    cellMouseEnter(row, column, cell, event) {
      this.$emit("cell-mouse-enter", row, column, cell, event);
    },
    /**
     * @description：当单元格 hover 退出时会触发该事件
     * @param：row, column, cell, event
     * @returns null
     **/
    cellMouseLeave(row, column, cell, event) {
      this.$emit("cell-mouse-leave", row, column, cell, event);
    },
    /**
     * @description：当某个单元格被点击时会触发该事件
     * @param：row, column, cell, event
     * @returns null
     **/
    cellClick(row, column, cell, event) {
      this.$emit("cell-click", row, column, cell, event);
    },
    /**
     * @description：当某个单元格被双击击时会触发该事件
     * @param row, column, cell, event
     * @returns null
     **/
    cellDblclick(row, column, cell, event) {
      this.$emit("cell-dblclick", row, column, cell, event);
    },
    /**
     * @description：当某一行被点击时会触发该事件
     * @param： row, column, event
     * @returns null
     **/
    rowClick(row, column, event) {
      this.$emit("row-click", row, column, event);
    },
    /**
     * @description：当某一行被鼠标右键点击时会触发该事件
     * @param：row, column, event
     * @returns： null
     **/
    rowContextmenu(row, column, event) {
      this.$emit("row-contextmenu", row, column, event);
    },
    /**
     * @description：当某一行被双击时会触发该事件
     * @param：row, column, event
     * @returns： null
     **/
    rowDblclick(row, column, event) {
      this.$emit("row-dblclick", row, column, event);
    },
    /**
     * @description：当某一行被双击时会触发该事件
     * @param：column, event
     * @returns： null
     **/
    headerClick(column, event) {
      this.$emit("header-click", column, event);
    },
    /**
     * @description：当某一列的表头被鼠标右键点击时触发该事件
     * @param：column, event
     * @returns： null
     **/
    headerContextmenu(column, event) {
      this.$emit("header-contextmenu", column, event);
    },
    /**
     * @description：当表格的排序条件发生变化的时候会触发该事件
     * @param：  { column, prop, order }
     * @returns： null
     **/
    sortChange(obj) {
      this.$emit("sort-change", { ...obj });
    },
    /**
     * @description：当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
     * @param：filters
     * @returns： null
     **/
    filterChange(filters) {
      this.$emit("filter-change", filters);
    },
    /**
     * @description：当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性
     * @param：currentRow, oldCurrentRow
     * @returns： null
     **/
    currentChange(currentRow, oldCurrentRow) {
      this.$emit("current-change", currentRow, oldCurrentRow);
    },
    /**
     * @description：  当拖动表头改变了列的宽度的时候会触发该事件
     * @param：  newWidth, oldWidth, column, event
     * @returns： null
     **/
    headerDragend(newWidth, oldWidth, column, event) {
      this.$emit("header-dragend", newWidth, oldWidth, column, event);
    },
    /**
     * @description：当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）
     * @param： row, (expandedRows | expanded)
     * @returns： null
     **/
    expandChange(row, callback) {
      this.$emit("expand-change", row, callback);
    },
    /**
     * @description：用于多选表格，清空用户的选择
     * @param：
     * @returns： null
     **/
    clearSelection() {
      this.$refs.tableC.clearSelection();
    },
    /**
     * @description：用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
     * @param： row, selected
     * @returns： null
     **/
    toggleRowSelection(row, selected) {
      this.$refs.tableC.toggleRowSelection(row, selected);
    },
    /**
     * @description：用于多选表格，切换所有行的选中状态
     * @param：
     * @returns： null
     **/
    toggleAllSelection(row, selected) {
      this.$refs.tableC.toggleAllSelection(row, selected);
    },
    /**
     * @description：用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）
     * @param：
     * @returns： null
     **/
    toggleRowExpansion(row, expanded) {
      this.$refs.tableC.toggleAllSelection(row, expanded);
    },
    /**
     * @description：用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。
     * @param：row
     * @returns： null
     **/
    setCurrentRow(row) {
      this.$refs.tableC.setCurrentRow(row);
    },
    /**
     * @description：用于清空排序条件，数据会恢复成未排序的状态
     * @param：
     * @returns： null
     **/
    clearSort() {
      this.$refs.tableC.clearSort();
    },
    /**
     * @description：不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件
     * @param：columnKey
     * @returns： null
     **/
    clearFilter() {
      this.$refs.tableC.clearFilter();
    },
    /**
     * @description：对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法
     * @param：
     * @returns： null
     **/
    doLayout() {
      this.$refs.tableC.doLayout();
    },
    /**
     * @description：手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。
     * @param：
     * @returns： null
     **/
    sort(prop, order) {
      console.log(prop, order);
      this.$refs.tableC.sort(prop, order);
    },
    /**************************页码方法******************************************/
    /**
     * 条数改变
     **/
    handleSizeChange(val) {
      this.$emit("page-change", { pageSize: val, currPage: this.currPage_ });
    },
    /**
     * 页码改变
     **/
    handleCurrentChange(val) {
      this.$emit("page-change", { pageSize: this.pageSize_, currPage: val });
    }
  }
};
</script>
