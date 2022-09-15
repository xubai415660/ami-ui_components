import { createTest, destroyVM } from '../util';
import InputCron from 'packages/input-cron';
describe('InputCron', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(InputCron, true);
    expect(vm.$el).to.exist;
  });
});

