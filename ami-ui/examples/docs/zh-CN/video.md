## Video 视频播放器


### 基础展示

:::demo 视屏播放器基于 `vue-video-player` 二次封装
```html
<ami-video  
  style="width: 60%"
  src="../../assets/video/oceans.mp4"

>
  
</ami-video>
```
:::


### Attribute
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- | -------------- |---------- |--------------------------------  |-------- |
| type | 视频类型	 | string | 'video/mp4'、'video/3gp'、'video/webm'、'video/ogg' | 	'video/mp4' |
| src	| 视频url地址| 	string | 	— | 	— | 
| poster	| 视频封面地址| 	string | 	— | 	— | 
| playback-rates	| 视频可选的播放速度	| array | 	— | 	[0.5, 1.0, 1.5, 2.0] | 
| autoplay	| 视频自动播放| 	boolean| 	— | 	false | 
| muted	| 视频消除音频| 	boolean| — | 	false | 
| loop	| 视频结束自动重播| 	boolean	| — | 	false| 
| preload	| 视频预加载| 	string| 	auto/metadata/none | 	auto | 
| aspect-ratio	| 视频纵横比| 	string| 	'4:3'/'16:9' | 	'16:9' | 
| fluid	| 视频按比例缩放以适应其容器| 	boolean| 	—|  	true
| not-supported-message	| 视频不支持提示消息| 	string | 	— | 	'此视频暂无法播放，请稍后再试' | 
| time-divider	| 当前时间和持续时间的分隔符| 	boolean	| —	| true |  
|ready	 | 将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。参数player| function | 	— | — |

### Methods
| 方法名      | 说明          | 参数 |
|----------- |-------------- | -- |
|play	 | 播放回调 | 	player | 
|pause	 | 暂停回调 | 	player | 
|ended	 | 视频播完回调 | 	player | 
|waiting	 | DOM元素上的readyState更改导致播放停止 | 	player | 
|playing	 | 已开始播放回调 | 	player
|loaded-data	 | 当播放器在当前播放位置下载数据时触发 | 	player | 
|time-update	 | 当前播放位置发生变化时触发 | 	player | 
|can-play	 | 媒体的readyState为HAVE_FUTURE_DATA或更高 | 	player | 
|can-play-through	 | 媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。 | 	player | 
|state-changed	 | 播放状态改变回调 | 	player | 
