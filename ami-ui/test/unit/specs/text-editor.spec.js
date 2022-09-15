import { createTest, destroyVM } from '../util';
import TextEditor from 'packages/text-editor';
describe('TextEditor', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(TextEditor, true);
    expect(vm.$el).to.exist;
  });
});

