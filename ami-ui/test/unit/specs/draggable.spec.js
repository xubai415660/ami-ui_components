import { createTest, destroyVM } from '../util';
import Draggable from 'packages/draggable';
describe('Draggable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(Draggable, true);
    expect(vm.$el).to.exist;
  });
});

