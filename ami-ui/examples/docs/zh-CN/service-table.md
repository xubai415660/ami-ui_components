## ServiceTable 业务表格


### 基础用法


:::demo `

```html
 <template>
  <div style="height: 500px;margin-bottom:12px;background: #eeeeee">
    <ami-service-table
      :columns="columns"
      :table-data="tableData"
      :total="total"
      :curr-page="currPage"
      :page-size="pageSize"
      :loading="loading"
      @page-change="pageChange"
      title="测试表格"
    />
  </div>
  


</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            label: "",
            key: "selection",
            type: "selection",
            align: "center",
          },
          {
            label: "序号",
            key: "index",
            type: "index",
            align: "center",
            width: "80px",
          },
          {
            label: "资源名称",
            key: "resourceId",
            minWidth:"200px",
          },
          {
            label: "资源名称编码",
            key: "resourceCode",
            minWidth:"200px",
          },
          {
            label: "资源类型",
            key: "resourceTypeName",
            minWidth:"200px",
          },
          {
            label: "资源类型编码",
            key: "resourceType",
            minWidth:"200px",
          },
          {
            label: "资源所属模块",
            key: "resBusineModuleName",
            minWidth:"200px",
          },
          {
            label: "资源所属模块编码",
            key: "resBusineModule",
            minWidth:"200px",
          },
          {
            label: "是否鉴权",
            key: "authFlagName",
            minWidth:"200px",
          },
          {
            label: "是否外部链接",
            key: "isOuterSysUrlName",
            minWidth:"200px",
          },
          {
            label: "是否显示",
            key: "isVisibleName",
            minWidth:"200px",
          },

          {
            label: "资源路径",
            key: "resourcePath",
            minWidth:"200px",
          },
          {
            label: "路由地址",
            key: "resourceRoute",
            minWidth:"200px",
            renderType: "slot",
          },
          {
            label: "更新时间",
            key: "updateDate",
            minWidth:"200px",
          },
          {
            label: "创建时间",
            key: "createTime",
            minWidth:"200px",
          },
          {
            label: "排序序号",
            key: "sortNo",
            minWidth:"200px",
          },
        ],
        tableData: [
          {
            "authFlag": 1,
            "resourceId": "566948227426656256",
            "resourceName": "分页查询监测内容鸣谢列表",
            "prntResourceName": "监测结果明细",
            "resourceIcon": null,
            "resourceRoute": null,
            "resourcePath": "/ami/ma01-02-068/monitor/queryMonitorDetsDetail",
            "resourceUrl": null,
            "sortNo": 1,
            "creator": null,
            "createTime": "2022-06-11 09:42:48",
            "updater": null,
            "updateDate": "2022-06-11 09:42:48",
            "resourceType": "02",
            "resBusineType": null,
            "isVisible": 1,
            "showType": null,
            "resourceCode": "AMI-MA0102068-0109",
            "isOuterSysUrl": "0",
            "resBusineModule": "MF0102068",
            "resBusineModuleName": "实时监测配置",
            "isVisibleName": "显示",
            "isOuterSysUrlName": "否",
            "presourceId": null,
            "authFlagName": "不鉴权",
            "showTypeName": "",
            "resourceTypeName": "按钮"
          },
        ],
        total: 0,
        currPage: 1,
        pageSize: 15,
        loading: false,
      }
    },
    methods:{
      pageChange(val) {
        this.currPage = val.currPage;
        this.pageSize = val.pageSize;
      },
    }
      }
</script>
```
:::

### Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tableData | 显示的数据 | array | — | — |
| columns   | 列配置 | array | — | 详见下列columns配置 |

