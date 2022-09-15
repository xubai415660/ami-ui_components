import { createTest, destroyVM } from '../util';
import CodeEditor from 'packages/code-editor';
describe('CodeEditor', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(CodeEditor, true);
    expect(vm.$el).to.exist;
  });
});

