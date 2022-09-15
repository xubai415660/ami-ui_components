import AmiCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
AmiCarouselItem.install = function(Vue) {
  Vue.component(AmiCarouselItem.name, AmiCarouselItem);
};

export default AmiCarouselItem;
