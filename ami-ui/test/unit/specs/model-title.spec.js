import { createTest, destroyVM } from '../util';
import ModelTitle from 'packages/model-title';
describe('ModelTitle', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(ModelTitle, true);
    expect(vm.$el).to.exist;
  });
});

