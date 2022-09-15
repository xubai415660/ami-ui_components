## Draggable 拖动

### 基本用法

:::demo

```html
当前状态: {{drag ? '拖动中' : '拖动结束'}}<br><br>
<ami-draggable
  v-model="myArray"
  chosen-class="chosen"
  :force-fallback="true"
  group="people"
  :animation="300"
  handleSelector=".item3"
  draggable-selector=".item"
  @start="onStart"
  @end="onEnd">
  <div class="item"
       v-for="(element, index) in myArray"
       :key="index">
    <span class="item3">点击我拖动————————{{element.id}}   </span>
    <span>{{element.name}}</span>
    
  </div>
</ami-draggable>
<script>
  export default {
    data() {
      return {
        drag: false,
        myArray: [
          {people: 'cn', id: 1, name: 'www.itxst.com'},
          {people: 'cn', id: 2, name: 'www.baidu.com'},
          {people: 'cn', id: 3, name: 'www.taobao.com'},
          {people: 'us', id: 4, name: 'www.google.com'}
        ]
      };
    },
    methods: {
      onStart() {
        this.drag = true;
      },
      onEnd() {
        this.drag = false;
      }
    }
  };
</script>
<style >
  .item {
    padding: 6px;
    background-color: #fdfdfd;
    border: solid 1px #f0f;
    margin-bottom: 10px;
    cursor: move;
  }

  .item:hover {
    background-color: #f1f1f1;
    cursor: move;
  }

  .chosen {
    border: solid 2px #3089dc !important;
  }
</style>

```
:::

### 两列或多列之间相互拖动
:::demo

```html
<!--使用draggable组件-->
<ami-row :gutter="20">
    <ami-col :span="8">
        <div class="board-column todo">
            <div class="board-column-header">Todo</div>
            <ami-draggable
                    class="board-column-content"
                    v-model="list1"
                    :group="group"
                    :animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    draggable-selector=".board-item"
                    @start="onStart">
              
            <div v-for="element in list1" :key="element.id" class="board-item">
                        {{ element.name }} {{ element.id }}
            </div>
            </ami-draggable>
        </div>
    </ami-col>
    <ami-col :span="8">
        <div class="board-column working">
            <div class="board-column-header">Working</div>
            <ami-draggable
                    class="board-column-content"
                    v-model="list2"
                    :group="group"
                    :animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    draggable-selector=".board-item"
                    @start="onStart"
                    @end="onEnd">
                <div v-for="element in list2" :key="element.id" class="board-item">
                        {{ element.name }} {{ element.id }}
                </div>
            </ami-draggable>
        </div>
    </ami-col>
    <ami-col :span="8">
        <div class="board-column done">
            <div class="board-column-header">Done</div>
            <ami-draggable
                    class="board-column-content"
                    v-model="list3"
                    :group="group"
                    :animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    draggable-selector=".board-item"
                    @start="onStart"
                    @end="onEnd">
                    <div v-for="element in list3" :key="element.id" class="board-item">
                        {{ element.name }} {{ element.id }}
                    </div>
            </ami-draggable>
        </div>
    </ami-col>
</ami-row>
<br><br>
list1: {{list1}}<br><br>
list2: {{list2}}<br><br>
list3: {{list3}}<br>
<script>
    export default {
        data() {
            return {
                drag: false,
                group: 'mission',
                list1: [
                    {name: 'Mission', id: 1},
                    {name: 'Mission', id: 2},
                    {name: 'Mission', id: 3},
                    {name: 'Mission', id: 4}
                ],
                list2: [
                    {name: 'Mission', id: 5},
                    {name: 'Mission', id: 6},
                    {name: 'Mission', id: 7}
                ],
                list3: [
                    {name: 'Mission', id: 8},
                    {name: 'Mission', id: 9},
                    {name: 'Mission', id: 10}
                ]
            };
        },
        methods: {
            onStart() {
                this.drag = true;
            },
            onEnd() {
                this.drag = false;
            }
        }
    };
</script>
<style lang="scss">
   
</style>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值           | Array  | — | — |
| sort     | 是否开启内部排序,如果设置为false,它所在组无法排序，在其他组可以拖动排序 | boolean    | — | true |
| width     | Dialog 的宽度 | string    | — | 50% |
| delay   | 鼠标按下后多久可以拖拽 |number | — | 0 |
| touch-start-threshold | 鼠标移动多少px才能拖动元素           | —   | — | — |
| disabled	     | 是否启用拖拽组件 | boolean    | — | true |
| animation     | 拖动时的动画效果 | number    | — | — |
| handle   | 只有当鼠标移动到css为mover类的元素上才能拖动 |string | — | — |
| filter | 设置了unmover样式的元素不允许拖动           | string  | — | — |
| draggable     | 设置了draggable样式的元素是可以被拖动的 | string    | — | — |
| ghost-class     | 被选中目标的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true | string    | — |— |
| drag-class   | 拖动元素的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true |string | — | — |
| scroll | 绑定值           | boolean  | — | true |
| scrollFn     | 滚动回调函数 | function    | — |  — |
| scrollSensitivity     | 距离滚动区域多远时，滚动滚动条 | string    | — |  — |
| scrollSpeed   | 滚动速度 |number | — | 0 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| start  | 开始拖动时触发的事件| e |
| add  | 从一个数组拖拽到另外一个数组时触发的事件 | e |
| remove  | 移除事件| e,originalEvent |
| update  | 拖拽变换位置时触发的事件 | e |
| end | 拖拽完成时的事件 | e |
| choose  | 鼠标点击选中要拖拽元素时的事件| e |
| unchoose	  | 选中后松开鼠标的事件 | e |
| sort  | 位置变化时的事件 | e |
| clone | 从一个数组拖拽到另外一个数组时触发的事件和add不同，clone是复制了数组元素 | e |

