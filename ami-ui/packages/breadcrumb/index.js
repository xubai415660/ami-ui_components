import AmiBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
AmiBreadcrumb.install = function(Vue) {
  Vue.component(AmiBreadcrumb.name, AmiBreadcrumb);
};

export default AmiBreadcrumb;
