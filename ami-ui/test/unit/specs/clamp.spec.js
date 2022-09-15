import { createTest, destroyVM } from '../util';
import Clamp from 'packages/clamp';
describe('Clamp', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(Clamp, true);
    expect(vm.$el).to.exist;
  });
});

