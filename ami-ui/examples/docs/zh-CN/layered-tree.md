## LayeredTree 层级树

### 基础用法

:::demo
```html
<div style="width: 400px;height: 300px;">
  <ami-layered-tree v-model="list" :data="data" :props="defaultProps" :disabledList="disabled"></ami-layered-tree>
</div>
<script>
  export default {
    data() {
      return {
        disabled:[
        ],
        list: [
        ],
        data: [
          {
            "codeId": "31102",
            "codeName": "上",
            "codeList": null
          },
          {
            "codeId": "13103",
            "codeName": "冀",
            "codeList": null
          },
          {
            "codeId": "11102",
            "codeName": "北",
            "codeList": [
              {
                "codeId": "532300246768721920",
                "codeName": "全",
                "roleType": "01",
                "codeList": [
                  {
                    "codeId": "541229385258037248",
                    "account": "zhangshiyou",
                    "codeName": "张"
                  },
                  {
                    "codeId": "544239552387977216",
                    "account": "lx",
                    "codeName": "李"
                  }
                ]
              },
              {
                "codeId": "541001805632364544",
                "codeName": "开",
                "roleType": "01",
                "codeList": [
                  {
                    "codeId": "544239552387977216",
                    "account": "lx",
                    "codeName": "李"
                  }
                ]
              },
              {
                "codeId": "570238925398888448",
                "codeName": "测",
                "roleType": null,
                "codeList": [
                  {
                    "codeId": "569509176348119040",
                    "account": "test000001",
                    "codeName": "测"
                  }
                ]
              }
            ]
          },
          {
            "codeId": "62101",
            "codeName": "甘",
            "codeList": [
              {
                "codeId": "541001805632364544",
                "codeName": "开",
                "roleType": "01",
                "codeList": [
                  {
                    "codeId": "544981196867604480",
                    "account": "lyh",
                    "codeName": "李"
                  },
                  {
                    "codeId": "543823197746569216",
                    "account": "sunxiaoyi",
                    "codeName": "孙"
                  },
                  {
                    "codeId": "545232687477755904",
                    "account": "baochengyong",
                    "codeName": "鲍"
                  }
                ]
              }
            ]
          },
          {
            "codeId": "35101",
            "codeName": "福",
            "codeList": null
          },
          {
            "codeId": "15101",
            "codeName": "蒙",
            "codeList": null
          },
          {
            "codeId": "54101",
            "codeName": "西",
            "codeList": null
          },
          {
            "codeId": "21102",
            "codeName": "辽",
            "codeList": null
          },
          {
            "codeId": "50101",
            "codeName": "重",
            "codeList": null
          },
          {
            "codeId": "61102",
            "codeName": "陕",
            "codeList": null
          },
          {
            "codeId": "63101",
            "codeName": "青",
            "codeList": null
          },
          {
            "codeId": "23101",
            "codeName": "黑",
            "codeList": null
          }
        ],
        defaultProps: {
          children: 'codeList',
          label: 'codeName',
          key:'codeId'
        }
      };
    }
  };
</script>
```
:::

### LayeredTree Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 展示数据	   | Array  |  —   | — |
| v-model  |  双向绑定数据  |   Array   | — | — |
| disabledList  | 禁用数据 | Array |   —   | — |
| props  | 	配置选项，具体看下表 | object |   —   | — |



### props
| 参数       | 说明                | 类型     | 可选值  | 默认值  |
| -------- | ----------------- | ------ | ---- | ---- |
| label    | 指定节点标签为节点对象的某个属性值 | string | —    | —    |
| key  | 指定节点标签为节点对象的某个属性值 | string | —    | —    |
| children | 指定子树为节点对象的某个属性值(根据此属性判断是否有下级) | string | —    | —    |



### Menu Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 选中事件 | 当前选中值  |
| upDownData  | 上级 | 展示数据  |
| upDownData  | 下级 |  展示数据 |
