import { createTest, destroyVM } from '../util';
import InputIp from 'packages/input-ip';
describe('InputIp', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(InputIp, true);
    expect(vm.$el).to.exist;
  });
});

