import { createTest, destroyVM } from '../util';
import MapBasic from 'packages/map-basic';
describe('MapBasic', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(MapBasic, true);
    expect(vm.$el).to.exist;
  });
});

