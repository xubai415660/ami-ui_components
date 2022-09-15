<template>
  <div class="ami-video">
    <videoPlayer
      class="video__player"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      @ready="playerReadied"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)"
    ></videoPlayer>
  </div>
</template>
<script>
import {videoPlayer} from 'vue-video-player';
import 'videojs-contrib-hls';
export default {
  name: 'AmiVideo',
  components: {
    videoPlayer
  },
  props: {
    type: {
      // 类型
      type: String,
      default: 'video/mp4'
    },
    src: {
      // url地址
      type: String,
      required: true
    },
    poster: {
      // 封面地址
      type: String,
      default: ''
    },
    playbackRates: {
      // 可选的播放速度
      type: Array,
      default: function _default() {
        return [0.5, 1.0, 1.5, 2.0];
      }
    },
    autoplay: {
      // 如果为true,浏览器准备好时开始回放。
      type: Boolean,
      default: false
    },
    muted: {
      // 默认情况下将会消除任何音频。
      type: Boolean,
      default: false
    },
    loop: {
      // 是否视频一结束就重新开始。
      type: Boolean,
      default: false
    },
    preload: {
      // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      type: String,
      default: 'auto'
    },
    aspectRatio: {
      // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      type: String,
      default: '16:9'
    },
    fluid: {
      // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      type: Boolean,
      default: true
    },
    notSupportedMessage: {
      // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      type: String,
      default: '此视频暂无法播放，请稍后再试'
    },
    timeDivider: {
      // 当前时间和持续时间的分隔符
      type: Boolean,
      default: true
    },
    durationDisplay: {
      // 显示持续时间
      type: Boolean,
      default: true
    },
    remainingTimeDisplay: {
      // 是否显示剩余时间功能
      type: Boolean,
      default: false
    },
    fullscreenToggle: {
      // 是否显示全屏按钮
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      playerOptions: {
        playbackRates: this.playbackRates,
        autoplay: this.autoplay,
        muted: this.muted,
        loop: this.loop,
        preload: this.preload,
        language: 'zh-CN',
        aspectRatio: this.aspectRatio,
        fluid: this.fluid,
        sources: [
          {
            type: this.type,
            src: this.src
          }
        ],
        poster: this.poster,
        notSupportedMessage: this.notSupportedMessage,
        controlBar: {
          timeDivider: this.timeDivider,
          durationDisplay: this.durationDisplay,
          remainingTimeDisplay: this.remainingTimeDisplay,
          fullscreenToggle: this.fullscreenToggle
        }
      }
    };
  },
  methods: {
    // 播放回调
    onPlayerPlay(player) {
      this.$emit('play', player);
    },

    // 暂停回调
    onPlayerPause(player) {
      this.$emit('pause', player);
    },

    // 视频播完回调
    onPlayerEnded(player) {
      this.$emit('ended', player);
    },

    // DOM元素上的readyState更改导致播放停止
    onPlayerWaiting(player) {
      this.$emit('waiting', player);
    },

    // 已开始播放回调
    onPlayerPlaying(player) {
      this.$emit('playing', player);
    },

    // 当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata(player) {
      this.$emit('loaded-data', player);
    },

    // 当前播放位置发生变化时触发。
    onPlayerTimeupdate(player) {
      this.$emit('time-update', player);
    },

    // 媒体的readyState为HAVE_FUTURE_DATA或更高
    onPlayerCanplay(player) {
      this.$emit('can-play', player);
    },

    // 媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    onPlayerCanplaythrough(player) {
      this.$emit('can-play-through', player);
    },

    // 播放状态改变回调
    playerStateChanged(playerCurrentState) {
      this.$emit('state-changed', playerCurrentState);
    },

    // 将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied(player) {
      this.$emit('ready', player);
    }
  }
};
</script>
