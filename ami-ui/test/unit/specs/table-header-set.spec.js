import { createTest, destroyVM } from '../util';
import TableHeaderSet from 'packages/table-header-set';
describe('TableHeaderSet', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(TableHeaderSet, true);
    expect(vm.$el).to.exist;
  });
});

