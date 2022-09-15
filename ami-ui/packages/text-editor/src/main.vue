<template>
  <!-- 富文本 -->
  <div>
    <editor
      :id="id"
      v-model="content"
      :init="init"
      @onClick="onClick"
      :disabled="disabled"
    ></editor>
  </div>
</template>


<script>
import {uuid} from '../../../src/utils/util';
import tinymce from "tinymce/tinymce"; // version: 5.0.1
import Editor from "@tinymce/tinymce-vue"; // version: 3.0.1'
require('tinymce/icons/default/icons');
require('tinymce/themes/silver/theme');
// 扩展插件
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/bbcode';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/fullpage';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/importcss';
import './plugins/indent2em';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/legacyoutput';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/noneditable';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/print';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/tabfocus';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/toc';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';
import './plugins/importword';
import './plugins/layout';
import './plugins/letterspacing';
import './plugins/lineheight';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import './plugins/axupimgs';
import './plugins/formatpainter';
export default {
  name: 'AmiTextEditor',
  components: {
    Editor
  },
  props: {
    id: {
      type: String,
      default: uuid()
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: String,
      default:
        'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave indent2em autoresize axupimgs imagetools importword layout letterspacing lineheight formatpainter'
    },
    toolbar: {
      type: [String, Array],
      default:
        'importword layout | ' +
        'styleselect fontselect fontsizeselect formatpainter | ' +
        'code undo redo restoredraft | ' +
        'copy cut paste pastetext | ' +
        'forecolor backcolor letterspacing bold italic underline strikethrough link anchor ' +
        '| alignleft aligncenter alignright alignjustify outdent indent |' +
        ' bullist numlist | blockquote subscript superscript removeformat |' +
        ' table image media charmap emoticons hr pagebreak insertdatetime print preview ' +
        '| fullscreen | indent2em lineheight  imagetools ' +
        '| help |'
    },
    cdnUrl: {
      type: String,
      default: '/ami/cdn/tinymce'
    },
    dark: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String,
      default: 'zh_CN'
    },
    height: {
      type: Number,
      default: 500
    }

  },
  data() {
    return {
      //初始化配置
      init: {
        language_url: this.cdnUrl + '/langs/' + this.lang + '.js',
        language: this.lang,
        skin_url: this.cdnUrl + '/skins/ui/oxide' + (this.dark ? '-dark' : ''),
        height: this.height,
        min_height: this.height,
        max_height: this.height,
        toolbar_mode: "wrap",
        plugins: this.plugins,
        toolbar: this.toolbar,
        content_style: "p {margin: 5px 0;}",
        content_css: this.cdnUrl + '/skins/content/default/content.css',
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        font_formats:
          "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
        branding: false,
        //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          let img = 'data:image/jpeg;base64,' + blobInfo.base64();
          success(img);
        }
      },
      content: this.value
    };
  },
  methods: {
    onClick(e) {
      this.$emit("onClick", e, tinymce);
    }
  },
  watch: {
    value(newValue) {
      this.content = newValue;
    },
    content(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
<style scoped lang="scss">
</style>
