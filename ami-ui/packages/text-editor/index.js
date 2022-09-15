import TextEditor from './src/main';
/* istanbul ignore next */
TextEditor.install = function(Vue) {
  Vue.component(TextEditor.name, TextEditor);
};
export default TextEditor;
