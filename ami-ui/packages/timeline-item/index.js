import AmiTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
AmiTimelineItem.install = function(Vue) {
  Vue.component(AmiTimelineItem.name, AmiTimelineItem);
};

export default AmiTimelineItem;
