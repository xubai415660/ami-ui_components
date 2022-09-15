import { createTest, destroyVM } from '../util';
import GiantTree from 'packages/giant-tree';
describe('GiantTree', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(GiantTree, true);
    expect(vm.$el).to.exist;
  });
});

