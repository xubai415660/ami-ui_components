import { createTest, destroyVM } from '../util';
import LayeredTree from 'packages/layered-tree';
describe('LayeredTree', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(LayeredTree, true);
    expect(vm.$el).to.exist;
  });
});

