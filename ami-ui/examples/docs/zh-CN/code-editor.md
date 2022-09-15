## CodeEditor 代码编辑器

本插件是基于codemirror二次封装实现 

### 基础用法

:::demo

```html
<ami-code-editor v-model="value" @scroll="scroll" :options="options" ref="cm"/>
<script>
  export default {
    data(){
      return{
        value:'',
        options:{
          tabSize: 6,
         }
       }
      },
    mounted() {
      // 代码提示功能 当用户有输入时，显示提示信息
      this.$refs.cm.codemirror.on('inputRead', (cm) => {
        cm.showHint();
      });
    },
    methods: {
    scroll(aa){
      console.log(aa)
      },
    }
  }
</script>
```
:::



### 可选编辑器类型

:::demo

```html
  <template>
  <ami-row class="ami-code-editor">
    <ami-select v-model="options.mode" placeholder="请选择">
      <ami-option
        v-for="item in editorList"
        :key="item"
        :label="item"
        :value="item"
      >
      </ami-option>
    </ami-select>
  </ami-row>
 
  <ami-code-editor v-model="value" @scroll="scroll" :options="options" ref="cm"/>
</template>
<script>
  export default {
    data(){
      return{
        value:'',
        editorList:[
          'text/x-sql','script/x-vue','text/javascript','application/x-powershell','text/x-yaml','text/css ','text/x-sass ','text/jsx' ,'text/x-nginx-conf' ,'text/x-php','text/x-python'
        ],
        options:{
          mode:'text/x-sql'
        }
      }
    },
    mounted() {
      // 代码提示功能 当用户有输入时，显示提示信息
      this.$refs.cm.codemirror.on('inputRead', (cm) => {
        cm.showHint();
      });
    },
    methods: {
      scroll(aa){
      console.log(aa)
      }
    }
  }
</script>

```
:::


### 通过方法获取、设置编辑器数据

:::demo

```html
<ami-code-editor v-model="value" :options="options" ref="cm"/>
<div style="width: 100%;height: 300px;margin-top: 10px">
  <ami-button @click="getVal">获取编辑器数据</ami-button> <ami-button @click="setVal">设置编辑器数据</ami-button>
  <span style="margin-top: 10px;display:inline-block;width: 100%;height: 200px;border: #e6e6e6 1px solid">
    {{getValue}}
  </span>
</div>
   

<script>
  export default {
    data(){
      return{
        value:'',
        getValue:'',
        options:{
          tabSize: 6,
        }
      }
    },
    computed: {
      codemirror () {
        return this.$refs['cm'].codemirror
      }
    },
    mounted() {
      // 代码提示功能 当用户有输入时，显示提示信息
      this.$refs.cm.codemirror.on('inputRead', (cm) => {
        cm.showHint();
      });
    },
    methods: {
      getVal(){
      this.getValue = this.codemirror.getValue()
      },
      setVal(){
        this.codemirror.setValue('SELECT * FROM')
      }
   }
  }
</script>
```
:::

### 弹窗使用

:::demo

```html
<ami-button type="text" @click="dialogVisible = true" >点击打开 Dialog</ami-button>

<ami-dialog
  title="提示"
  :titleIcon="false"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose"
  @opened="opened"
  :close-on-click-modal="false"
>
 <ami-code-editor  v-model="value" @scroll="scroll"  ref="code"/>
  <span slot="footer" class="dialog-footer">
    <ami-button @click="dialogVisible = false">取 消</ami-button>
    <ami-button type="primary" @click="dialogVisible = false">确 定</ami-button>
  </span>
</ami-dialog>
<script>
  export default {
    data(){
      return{
        value:'',
        dialogVisible: false
       }
      },
    mounted() {
    },
    methods: {
      opened(){
      // 代码提示功能 当用户有输入时，显示提示信息
          this.$refs.code.codemirror.on("inputRead", (cm) => {
            cm.showHint();
          });
      },
      scroll(aa){
      console.log(aa)
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

```
:::


### Attributes
| 参数        | 说明         | 类型      | 可选值                 | 默认值 |
|-----------|------------|----------|---------------------|--|
| v-model   | 输入值(双向绑定) | String | —                   |— |
| code   | 输入值(单项赋值，优先级大于v-model) | String | —             |— |
| events  |     注册事件            | Array  |  —             |  —    |
| options   | 配置选项，具体见下表 | Object | —             |— |


### options 
| 参数        | 说明         | 类型      | 可选值                 | 默认值 |
|-----------|------------|----------|---------------------|--|
| mode  | 编辑器类型 | String/Object  | `'text/x-sql'|'script/x-vue'|'text/javascript'|'application/x-powershell'|'text/x-yaml'|'text/css '|'text/x-sass '|'text/jsx' |'text/x-nginx-conf' |'text/x-php'|'text/x-python'`  | `text/x-sql` |
| theme |   代码风格  | String  |  `'idea'|'solarized'`  |  `idea`   |
| value |   代码风格  | String  |  `'idea'|'solarized'`  |  `idea`   |
| tabSize   | 编辑器的初始值（文本） | string/CodeMirror.Doc | —             |  —   |
| lineNumbers | 是否使用行号      |boolean |  —  |   true |
| smartIndent | 自动缩进是否开启      |boolean |   —  |   true |
| tabSize |tab字符的宽度 | number |— | 4 |
| lineSeparator | 明确指定编辑器使用的行分割符（换行符）      |string/null |  —  |   null |
| indentWithTabs | 在缩进时，是否需要把 n*tab宽度个空格替换成n个tab字符      |boolean |  —  |   false |
| electricChars | 在输入可能改变当前的缩进时，是否重新缩进(仅在mode支持缩进时有效)      |boolean |  —  |   true |
| specialChars | 需要被占位符(placeholder)替换的特殊字符的正则表达式      |RegExp |  —  |   `/[\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/` |
| specialCharPlaceholder | 这是一个接收由specialChars选项指定的字符作为参数的函数，此函数会产生一个用来显示指定字符的DOM节点      | function |  —  |  — |
| extraKeys | 给编辑器绑定与前面keyMap配置不同的快捷键。      |object |  —  |  —  |
| lineWrapping | 在长行时文字是换行还是滚动     |boolean |   `wrap|scroll`  |   scroll |
| lineNumbers | 是否在编辑器左侧显示行号      |boolean |  —  |   true |
| firstLineNumber | 行号从哪个数开始计数      |number |  —  |   1 |
| lineNumberFormatter | 设置行号函数      |function |  —  |  — |
| gutters | 用来添加额外的gutter（在行号gutter前或代替行号gutter）。值应该是CSS名称数组，每一项定义了用于绘制gutter背景的宽度（还 有可选的背景）。为了能明确设置行号gutter的位置（默认在所有其它gutter的右边），也可以包含CodeMirror-linenumbers 类。类名是用于传给setGutterMarker的键名(keys)。      |Array |  —  |   — |
| fixedGutter | 设置gutter跟随编辑器内容水平滚动还是固定在左侧      |boolean |  —  |   true |
| scrollbarStyle | 设置滚动条      |string |  `null|Addons` |   native |
| coverGutterNextToScrollbar | 当fixedGutter启用，并且存在水平滚动条时，在滚动条最左侧默认会显示gutter，当此项设置为true时，gutter会被带有CodeMirror-gutter-filler类的元素遮挡。      |boolean |  —  |   false |
| inputStyle | 选择CodeMirror处理输入和焦点的方式 ,在移动浏览器上，默认是 contenteditable，在桌面浏览器上，默认是textarea     |`textarea|contenteditable` |  —  |   true |
| readOnly | 编辑器是否只读      |boolean |  —  |   false |
| showCursorWhenSelecting | boolean      |boolean |  —  |   false |
| lineWiseCopyCut | 启用时，如果在复制或剪切时没有选择文本，那么就会自动操作光标所在的整行。      |boolean |  —  |   false |
| undoDepth | 最大撤消次数      |number |  —  |   200 |
| historyEventDelay | 在输入或删除时引发历史事件前的毫秒数。      |number |  —  |    — |
| tabindex | 编辑器的tabindex  | number |  —  |    — |
| autofocus | 是否在初始化时自动获取焦点      |boolean |  —  |   false |

###  Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| scroll |  滚动条事件    |   —     |
| changes | 文本被修改后触发   |  —     |
| beforeChange |  内容改变前被调用    |   —      |
| cursorActivity | 当鼠标点击内容区、选中内容、修改内容时被触发   |   —      |
| keyHandled |  当一个都dom元素的事件触发时调用，name为操作名称    |    —      |
| inputRead |  当一个新的input从隐藏的textara读取出时调用    |   —     |
| electricInput |  收到指定的electrict输入时触发，会影响行缩进    |   —     |
| beforeSelectionChange |  选中的区域被改变时调用，obj对象是选择的范围和改变的内容    |   —     |
| viewportChange |  编辑器的视口( view port )改变（滚动，编辑或其它动作）时触发    |   —     |
| swapDoc |  使用swapDoc替换编辑器内的文档时触发    |   —     |
| gutterClick |  编辑器的gutter(行号区域)点击时触发   |   —     |
| gutterContextMenu |  编辑器的gutter(行号区域)收到上下文菜单事件时触发    |   —     |
| focus |  获得焦点时触发   |   —     |
| blur |   失去焦点时触发   |   —     |
| refresh |  刷新事件    |   —     |
| optionChange |  配置信息改变事件    |   —     |
| scrollCursorIntoView |  —    |   —     |
| update |  编辑器内容被改变时触发    |   —      |

### Methods
| 方法名 | 说明 | 参数 |
|---------|---------|---------|
| setValue |  设置编辑器内容    |   value     |
| getValue |  获取编辑器内容   |   —     |
| getLine |  获取第n行的内容    |   —     |
| lineCount |  获取当前行数    |   —     |
| lastLine |  获取最后一行的行号    |   —     |
| isClean |  boolean类型判断编译器是否是clean的    |   —     |
| getSelection |  获取选中内容    |   —     |
| getSelections |  返回array类型选中内容    |   —     |
| replaceSelection |  替换选中的内容    |   value     |
| getCursor |  获取光标位置,返回    |   line,char     |
| setOption |  置编译器属性   |   "",""     |
| getOption |  获取编译器属性    |     —    |
| addKeyMap |  添加key-map键值，该键值具有比原来键值更高的优先级    |    —     |
| removeKeyMap |  移除key-map    |    —     |
| removeOverlay |  移除Overlay   |    —     |
| setSize |  设置编译器大小    |   width,height     |
| scrollTo |  设置scroll到position位置    |    x,y     |
| refresh |  刷新编辑器    |    —     |



