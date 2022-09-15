import { createTest, destroyVM } from '../util';
import Video from 'packages/video';
describe('Video', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(Video, true);
    expect(vm.$el).to.exist;
  });
});

