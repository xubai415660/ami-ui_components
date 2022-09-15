<template>
  <div class="ami-code-editor"  ref="cm" :class="{ merge }">
    <div ref="mergeview" v-if="merge"></div>
    <textarea ref="textarea" :name="name" v-else></textarea>
  </div>
</template>

<script>

// lib
import _CodeMirror from 'codemirror';
const CodeMirror = window.CodeMirror || _CodeMirror;

// pollfill
if (typeof Object.assign != 'function') {
  Object.defineProperty(Object, 'assign', {
    value(target, varArgs) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      const to = Object(target);
      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index];
        if (nextSource != null) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
// 核心样式
// import 'codemirror/lib/codemirror.css';
// 引入主题后还需要在 options 中指定主题才会生效
// import 'codemirror/theme/solarized.css';
// import 'codemirror/theme/idea.css';
// 模式
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/yaml/yaml.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/mode/nginx/nginx.js';
import 'codemirror/mode/php/php.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/javascript/javascript.js';

import 'codemirror/mode/htmlmixed/htmlmixed';
// require active-line.js
import 'codemirror/addon/selection/active-line.js';
// closebrackets
import 'codemirror/addon/edit/closebrackets.js';
// keyMap
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/keymap/sublime.js';
// 引入代码自动提示插件
// import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/xml-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';
import 'codemirror/addon/hint/html-hint.js';
// merge js
import 'codemirror/addon/merge/merge.js';
// merge css
import 'codemirror/addon/merge/merge.css';
// export
export default {
  name: 'AmiCodeEditor',
  data() {
    return {
      content: '',
      codemirror: null,
      cminstance: null
    };
  },
  props: {
    code: String,
    value: String,
    marker: Function,
    unseenLines: Array,
    name: {
      type: String,
      default: 'codemirror'
    },
    merge: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({})
    },
    events: {
      type: Array,
      default: () => ([])
    },
    globalOptions: {
      type: Object,
      default: () => ({
        tabSize: 2,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/x-sql',
        theme: 'idea',
        smartIndent: true,
        hintOptions: { // 自定义提示选项
          completeSingle: false // 当匹配只有一项的时候是否自动补全
        }
      })
    },
    globalEvents: {
      type: Array,
      default: () => ([])
    }
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        for (const key in options) {
          this.cminstance.setOption(key, options[key]);
        }
      }
    },
    merge() {
      this.$nextTick(this.switchMerge);
    },
    code(newVal) {
      this.handerCodeChange(newVal);
    },
    value(newVal) {
      this.handerCodeChange(newVal);
    }
  },
  methods: {
    initialize() {
      const cmOptions = Object.assign({}, this.globalOptions, this.options);
      if (this.merge) {
        this.codemirror = CodeMirror.MergeView(this.$refs.mergeview, cmOptions);
        this.cminstance = this.codemirror.edit;
      } else {
        this.codemirror = CodeMirror.fromTextArea(this.$refs.textarea, cmOptions);
        this.cminstance = this.codemirror;
        this.cminstance.setValue(this.code || this.value || this.content);
      }
      this.cminstance.on('change', cm => {
        this.content = cm.getValue();
        if (this.$emit) {
          this.$emit('input', this.content);
        }
      });

      // 所有有效事件（驼峰命名）+ 去重
      const tmpEvents = {};
      const allEvents = [
        'scroll',
        'changes',
        'beforeChange',
        'cursorActivity',
        'keyHandled',
        'inputRead',
        'electricInput',
        'beforeSelectionChange',
        'viewportChange',
        'swapDoc',
        'gutterClick',
        'gutterContextMenu',
        'focus',
        'blur',
        'refresh',
        'optionChange',
        'scrollCursorIntoView',
        'update'
      ]
        .concat(this.events)
        .concat(this.globalEvents)
        .filter(e => (!tmpEvents[e] && (tmpEvents[e] = true)))
        .forEach(event => {
          // 循环事件，并兼容 run-time 事件命名
          this.cminstance.on(event, (...args) => {
            // console.log('当有事件触发了', event, args)
            this.$emit(event, ...args);
            const lowerCaseEvent = event.replace(/([A-Z])/g, '-$1').toLowerCase();
            if (lowerCaseEvent !== event) {
              this.$emit(lowerCaseEvent, ...args);
            }
          });
        });

      this.$emit('ready', this.codemirror);
      this.unseenLineMarkers();

      // prevents funky dynamic rendering
      this.refresh();
    },
    refresh() {
      this.$nextTick(() => {
        this.cminstance.refresh();
      });
    },
    destroy() {
      // garbage cleanup
      const element = this.cminstance.doc.cm.getWrapperElement();
      element && element.remove && element.remove();
    },
    handerCodeChange(newVal) {
      const cm_value = this.cminstance.getValue();
      if (newVal !== cm_value) {
        const scrollInfo = this.cminstance.getScrollInfo();
        this.cminstance.setValue(newVal);
        this.content = newVal;
        this.cminstance.scrollTo(scrollInfo.left, scrollInfo.top);
      }
      this.unseenLineMarkers();
    },
    unseenLineMarkers() {
      if (this.unseenLines !== undefined && this.marker !== undefined) {
        this.unseenLines.forEach(line => {
          const info = this.cminstance.lineInfo(line);
          this.cminstance.setGutterMarker(line, 'breakpoints', info.gutterMarkers ? null : this.marker());
        });
      }
    },
    switchMerge() {
      // Save current values
      const history = this.cminstance.doc.history;
      const cleanGeneration = this.cminstance.doc.cleanGeneration;
      this.options.value = this.cminstance.getValue();

      this.destroy();
      this.initialize();

      // Restore values
      this.cminstance.doc.history = history;
      this.cminstance.doc.cleanGeneration = cleanGeneration;
    }
  },
  mounted() {
    this.initialize();
  },
  beforeDestroy() {
    this.destroy();
  }
};
</script>
