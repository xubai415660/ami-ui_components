import { createTest, destroyVM } from '../util';
import OnlineExcel from 'packages/online-excel';
describe('OnlineExcel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(OnlineExcel, true);
    expect(vm.$el).to.exist;
  });
});

