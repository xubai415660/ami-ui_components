import { createTest, destroyVM } from '../util';
import SvgIcon from 'packages/svg-icon';
describe('SvgIcon', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(SvgIcon, true);
    expect(vm.$el).to.exist;
  });
});

