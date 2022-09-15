import { createTest, destroyVM } from '../util';
import WaterMark from 'packages/water-mark';
describe('WaterMark', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(WaterMark, true);
    expect(vm.$el).to.exist;
  });
});

