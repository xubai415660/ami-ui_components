<template>
  <div class="ami-online-excel" style="position:relative">
    <div
      :id="id"
      style="margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; left: 0; top: 0"
    ></div>
  </div>
</template>
<script>
import {uuid} from '../../../src/utils/util'
export default {
  name: 'AmiOnlineExcel',
  props: {
    id: {
      type: String,
      default: 'ami-online-excel-luckysheet'
    },
    file: {
      require: true
    },
    allowEdit: {
      type: Boolean,
      default: false
    },
    luckyObject: {
      type: Object,
      default: ()=>{
        return {};
      }
    }

  },
  data() {
    return {
    };
  },
  methods: {
    fn(data = null, fileName, destroy = false) {
      if (destroy || luckysheet) luckysheet.destroy();
      luckysheet.create({
        container: this.id,
        title: fileName, // 设定表格名称
        lang: 'zh', // 设定表格语言
        enableAddBackTop: false,
        enableAddRow: false,
        row: 36, // 行数
        column: 26, // 列数
        myFolderUrl: '',
        allowEdit: this.allowEdit, //是否允许前台编辑
        showtoolbar: this.allowEdit, //是否显示工具栏
        scrollLeft: 0, // 左右滚动条位置
        showtoolbarConfig: {
          print: false,
          image: false, // '插入图片'
          link: false, // '插入链接'
          chart: false, // '图表'（图标隐藏，但是如果配置了chart插件，右击仍然可以新建图表）
          postil: false, // '批注'
          pivotTable: false, // '数据透视表'
          function: false, // '公式'
          frozenMode: false, // '冻结方式'
          sortAndFilter: false, // '排序和筛选'
          conditionalFormat: false, // '条件格式'
          dataVerification: false, // '数据验证'
          splitColumn: false, // '分列'
          screenshot: false, // '截图'
          protection: false // '工作表保护'
        },
        cellRightClickConfig: {
          copyAs: false, // 复制为
          hideRow: false, // 隐藏选中行和显示选中行
          hideColumn: false, // 隐藏选中列和显示选中列
          clear: false, // 清除内容
          matrix: false, // 矩阵操作选区
          sort: false, // 排序选区
          filter: false, // 筛选选区
          chart: false, // 图表生成
          image: false, // 插入图片
          link: false, // 插入链接
          data: false, // 数据验证
          cellFormat: false // 设置单元格格式
        },
        data: data,
        functionButton: this.allowEdit?'<button id="ami-online-excel-luckysheet"  onclick="luckysheetSave()" class="ami-button ami-button--primary ami-button--small"> 保存 </button>' : '',
        ...this.luckyObject
      });
      this.$nextTick(()=>{
        window.luckysheetSave = this.luckysheetSave;
      });

    },
    // 文件上传
    importExcel() {
      let that = this;
      const fileContent = that.file.raw || null;
      const fileName = that.file.name || '表格';
      const fileType = fileName.substring(fileName.lastIndexOf('.') + 1) || '.xlsx';
      if (fileContent) {
        if (fileType === 'xlsx') {
          luckysheet.destroy();
          LuckyExcel.transformExcelToLucky(fileContent, function(exportJson) {
            console.log('exportJson======>', exportJson);
            if (exportJson.sheets == null || exportJson.sheets.length == 0) {
              that.$message({
                type: 'warning',
                message: '无法读取excel文件的内容，当前文件不支持预览！'
              });
              return;
            }
            console.log('表格上传===>', exportJson);
            that.fn(exportJson.sheets, fileName, false);
          });
        } else {
          that.$message({
            type: 'warning',
            message: '附件格式错误，请重新上传！'
          });
        }
        luckysheet.destroy();
      } else {
        that.$message({
          type: 'warning',
          message: '请上传附件！'
        });
        luckysheet.destroy();
      }
    },
    //在线文件预览
    onlineFilePreview(){
      let that = this;
      console.log('that===>', that);
      const fileContent = that.file.raw || null;
      const fileName = that.file.name || '表格.xlsx';
      const name=fileName.substring(0, fileName.lastIndexOf("."));
      const fileType = fileName.substring(fileName.lastIndexOf('.') + 1);
      LuckyExcel.transformExcelToLuckyByUrl(fileContent, fileName, function(exportJson) {
        console.log('exportJson====>', exportJson);
        if (exportJson.sheets == null || exportJson.sheets.length == 0) {
          that.$message({
            type: 'warning',
            message: '无法读取excel文件的内容，当前文件不支持预览！'
          });
          return;
        }
        that.fn(exportJson.sheets, name);
      });
    },
    luckysheetSave() {
      this.$emit('get-data', luckysheet.getAllSheets());
    },
    getData(){
      return luckysheet.getAllSheets()
    },
    luckysheetAll(){
      return luckysheet
    },
    destroy() {
      this.$emit('on-destroy');
      luckysheet.destroy();
    }
  },
  beforeDestroy() {
    this.$emit('on-destroy');
    luckysheet.destroy();
  }
};
</script>
