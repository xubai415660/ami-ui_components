<template>
  <div class="ami-layered-tree">
    <div>
      <div class="ami-layered-tree__title">
        <i class="cursor ami-icon-arrow-left" @click="upDownData()"></i>
        <span>
          {{listData.label}}
        </span>
      </div>
      <div class="ami-layered-tree__divider">
        <span v-for="(item,index) in parents" :key="item.key">
          <i v-if="index!==0">{{item.label}}</i>
          <i v-if="index!==0 && index!==parents.length-1">/</i>
        </span>

      </div>
    </div>
      <div class="ami-layered-tree__list">
          <div  v-for="(item,index) in listData.children" :key='index' style="margin-top: 20px" class="ami-layered-tree__checkbox">
          <ami-checkbox
            :label="item.label"
            :value="checkedData_.includes(item.key)"
            :disabled="disabledList_.includes(item.key)"
            @change="checkedChange(item)">{{item.label}}</ami-checkbox>
            <span v-if="item.children" @click="downData(item)" class="cursor">下级</span>
          </div>
      </div>
  </div>
</template>
<script>
import AmiCheckbox from 'ami-ui/packages/checkbox';
import amiCheckboxGroup from 'ami-ui/packages/checkbox-group';

export default {
  name: 'AmiLayeredTree',
  components: {
    AmiCheckbox,
    amiCheckboxGroup
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    disabledList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    props: {
      type: Object,
      default: function() {
        return {
          children: 'children',
          label: 'label',
          key: 'key'
        };
      }
    }
  },
  data(){
    return{
      checkedList: this.value,
      listData: {},
      parents: []
    }
  },
  computed: {
    listData_() {
      const l= {
        [this.props.label]: '',
        [this.props.key]: '---',
        [this.props.children]: this.data
      }
      this.getTree(l)
      return l
    },
    checkedData_(){
      let l =[]
      this.checkedList.map((item)=>{
        l.push(item.key)
      })
      return l
    },
    disabledList_(){
      let l =[]
      this.disabledList.map((item)=>{
        l.push(item.key)
      })
      return l
    }
  },
  mounted(){
    this.init()
  },
  watch: {
    data: {
      deep: true,
      handler(){
        this.init()
      }
    }
  },
  methods: {
    /**
     * 初始化函数
     */
    init(){
      this.parents=[]
      this.listData=this.initData()
      this.parents.push(this.listData)
      return this.listData
    },
    /**
     * 初始化树结构数据
     * @returns {{}}
     */
    initData(){
      const l= {
        [this.props.label]: '',
        [this.props.key]: '---',
        [this.props.children]: this.data,
        ...this.data
      }
      this.getTree(l)
      return l
    },
    /**
     * 下级
     * */
    downData(i){
      this.listData=i;
      this.$emit('downData', this.listData)
      this.parents.push(i)
    },
    /**
     * 上级
     * */
    upDownData(){
      let index= this.parents.length-1
      if (index>0){
        this.parents.splice(index, 1)
        this.listData=this.parents[this.parents.length -1]
        this.$emit('upDownData', this.listData)
      }
    },
    /**
     * 选中与反选
     */
    checked(v){
      let flag =true
      this.checkedList.map((item, index)=>{
        if (item.key ===v.key){
          this.checkedList.splice(index, 1)
          flag=false
        }
      })
      if (flag) this.checkedList.push({...v, label: v.label, key: v.key})

    },
    /**
     * 递归处理 子集选中
     * @param l
     */
    checkedListFn(l){
      this.checked({...l, label: l.label, key: l.key})
      if(l.children && l.children.length !== 0) {
        for(let i = 0; i < l.children.length; i++) {
          this.checkedListFn(l.children[i])
        }
      }
    },
    /**
     * 选中事件
     */
    checkedChange(v){
      this.checkedListFn(v)
      this.$emit('input', this.checkedList)
      this.$emit('change', this.checkedList)
    },
    /**
    * 处理树结构数据
     */
    getTree(data) {
      data.label = data[this.props.label]; // 由于我须要的值跟返回的code是对应的，就直接给data添加了一个value属性 并把code 给它赋值
      data.key = data[this.props.key];
      if(data[this.props.children] && data[this.props.children].length !== 0) {
        data.children = data[this.props.children];
        for(let i = 0; i < data.children.length; i++) {
          this.getTree(data.children[i])
        }
      }
    }
  }
};
</script>
