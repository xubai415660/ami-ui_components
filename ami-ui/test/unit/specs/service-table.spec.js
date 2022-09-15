import { createTest, destroyVM } from '../util';
import ServiceTable from 'packages/service-table';
describe('ServiceTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(ServiceTable, true);
    expect(vm.$el).to.exist;
  });
});

