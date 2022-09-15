import CodeEditor from './src/main';
/* istanbul ignore next */
CodeEditor.install = function(Vue) {
  Vue.component(CodeEditor.name, CodeEditor);
};
export default CodeEditor;
