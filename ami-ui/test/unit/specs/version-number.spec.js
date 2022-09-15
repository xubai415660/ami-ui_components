import { createTest, destroyVM } from '../util';
import VersionNumber from 'packages/version-number';
describe('VersionNumber', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(VersionNumber, true);
    expect(vm.$el).to.exist;
  });
});

