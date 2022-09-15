import { createTest, destroyVM } from '../util';
import CategorySelection from 'packages/category-selection';
describe('CategorySelection', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(CategorySelection, true);
    expect(vm.$el).to.exist;
  });
});

