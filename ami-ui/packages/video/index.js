import Video from './src/main';
/* istanbul ignore next */
Video.install = function(Vue) {
  Vue.component(Video.name, Video);
};
export default Video;
