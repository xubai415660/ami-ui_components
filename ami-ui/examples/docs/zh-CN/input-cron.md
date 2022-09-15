## InputCron cron 表达式输入框

### 基础用法

:::demo `v-model`的值为当前被选中的`ami-input-cron`的 value 属性值 `title`更改弹窗标题

```html
<ami-input-cron
  title="时间表达式设置"
  v-model="formData.cronValue"
  clearable
></ami-input-cron>

<script>
  export default {
    data() {
      return {
        exeStartTime: String(new Date()),
        formData: {
          cronValue: "",
        },
      };
    },
  };
</script>
```

:::

### 禁用用法

:::demo `disabled`的值为禁用，禁用时候可以查看配置选项，不过都为禁用

```html
<ami-input-cron
  title="时间表达式设置"
  v-model="formData.cronValue"
  clearable
  disabled
  round
></ami-input-cron>

<script>
  export default {
    data() {
      return {
        exeStartTime: String(new Date()),
        formData: {
          cronValue: "11 9 2 * 4 ? *",
        },
      };
    },
  };
</script>
```

:::

### 配置完展示预览效果的

:::demo `preview` 配置完是否展示预览数据

```html
<ami-input-cron v-model="formData.cronValue" preview></ami-input-cron>

<script>
  export default {
    data() {
      return {
        exeStartTime: String(new Date()),
        formData: {
          cronValue: "",
        },
      };
    },
  };
</script>
```

:::

### 创建和值改变时回调

:::demo `remote` 回调函数，在创建和值改变时回调

```html
<ami-input-cron v-model="formData.cronValue" :remote="remote"></ami-input-cron>

<script>
  export default {
    data() {
      return {
        exeStartTime: "2015-09-02 12:23:10",
        formData: {
          cronValue: "11 9 2 * 4 ? *",
        },
      };
    },
    methods: {
      remote(val, time, cb) {
        const msg = `remote called: ${val} ${time}`;
        console.info(msg);
        setTimeout(() => {
          // get result for e via http...
          const result = msg;
          // ...
          // callback
          cb(result);
        }, 200);
      },
    },
  };
</script>
```

:::

### 基础用法-促发事件

:::demo `@click` 促发事件，弹窗内确定按钮触发事件

```html
<ami-input-cron
  v-model="formData.cronValue"
  @click="sublist"
  clearable
></ami-input-cron>

<script>
  export default {
    data() {
      return {
        exeStartTime: String(new Date()),
        formData: {
          cronValue: "",
        },
      };
    },
    methods: {
      /*
       * 点击事件
       */
      sublist() {
        alert("触发点击");
      },
    },
  };
</script>
```

:::

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。

```html
<ami-button type="text" @click="dialogVisible = true"
  >点击打开 Dialog</ami-button
>

<ami-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose"
>
  <span>
    <ami-input-cron v-model="cronValue" clearable></ami-input-cron>
  </span>
  <span slot="footer" class="dialog-footer">
    <ami-button @click="dialogVisible = false">取 消</ami-button>
    <ami-button type="primary" @click="dialogVisible = false">确 定</ami-button>
  </span>
</ami-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        cronValue: "",
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm("确认关闭？")
          .then((_) => {
            done();
          })
          .catch((_) => {});
      },
    },
  };
</script>
```

:::

### Attributes

| 参数         | 说明                           | 类型                     | 可选值                | 默认值 |
| ------------ | ------------------------------ | ------------------------ | --------------------- | ------ |
| v-model      | 双向绑定                       | String                   | —                     | 空     |
| disabled     | 禁用（是否禁止编辑）           | Boolean                  | true / false          | false  |
| placeholder  | 输入框占位文本                 | String                   | —                     | —      |
| clearable    | 是否显示清除按钮               | Boolean                  | true / false          | false  |
| configure    | 输入框按钮文字                 | String                   | ——                    | ——     |
| exeStartTime | 执行时间                       | Number / String / Object | —                     | 空     |
| hideSecond   | 隐藏选择--秒，年               | Boolean                  | true / false          | false  |
| hideYear     | 隐藏选择--年                   | Boolean                  | true / false          | false  |
| size         | 尺寸                           | String                   | 默认/large/small/mini | 默认   |
| round        | 是否圆角按钮                   | Boolean                  | true / false          | false  |
| icon         | 图标（ami-icon-date）可更换    | String                   | ——                    | ——     |
| title        | Dialog 标题区的内容            | String                   | ——                    | ——     |
| remote       | 回调函数，在创建和值改变时回调 | Function                 |                       | null   |
| preview      | 配置完是否展示预览数据         | Boolean                  | true / false          | false  |

### Input Events

| 事件说明 | 说明                                        | 回调参数 |
| -------- | ------------------------------------------- | -------- |
| clear    | 在点击由 clearable 属性生成的清空按钮时触发 | ——       |
| click    | 在值改变点击确定后触发                      | ——       |
