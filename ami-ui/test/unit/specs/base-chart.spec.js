import { createTest, destroyVM } from '../util';
import BaseChart from 'packages/base-chart';
describe('BaseChart', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(BaseChart, true);
    expect(vm.$el).to.exist;
  });
});

