## TextEditor 富文本编辑器


:::demo 过v-model绑定数据 通过plugins设置需要的插件,默认全部插件 通过toolbar设置需要的工具栏, 默认全部工具栏

```html
<ami-text-editor v-model="data" :dark="false" lang="zh_CN" cdn-url="../tinymce"/>
<br>
<hr>
<br>
<div>
  <p>展示内容如下：</p>
</div>

<div v-html="data"/>
<script>
  export default {
    data() {
      return {
        data: '<h1>这里是文本!这里是文本！</h1>',
        plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave indent2em autoresize axupimgs',
        toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
        styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
        table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | indent2em lineheight axupimgs | help |'
      }
    },
    methods: {}
  }
</script>
```
:::
### 禁用状态

:::demo 

```html
<ami-text-editor v-model="data" disabled :dark="false" lang="zh_CN" id="disabled" cdn-url="../tinymce"/>
<br>
<hr>
<br>
<div>
</div>

<script>
  export default {
    data() {
      return {
        data: '这里是文本的禁用状态!',
      }
    },
    methods: {}
  }
</script>
```
:::
### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model/vaule | 绑定值	 | string | — | — |
| id | 组件实例id（同一页面多次使用必传) | string | — | — |
| disabled | 是否禁用	 | boolean | — | false |
| height | 编辑器高度	 | boolean | — | false |
| plugins | 需要的插件	 | string	 | — | ```print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave indent2em autoresize  imagetools importword layout letterspacing lineheight formatpainter ```|
| toolbar | 工具栏	 | string | — | ```importword layout | styleselect fontselect fontsizeselect | code undo redo restoredraft | cut copy paste pastetext formatpainter | forecolor backcolor letterspacing bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat | table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | indent2em lineheight  imagetools | help ```|
| cdn-url	 | 资源cdn地址(支持自定义主题和语言) | string | — | `/ami/cdn/tinymce` |


