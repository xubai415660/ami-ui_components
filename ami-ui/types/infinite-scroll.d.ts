import { VNodeDirective } from 'vue'

export interface AmiInfiniteScroll extends VNodeDirective {
    name: 'infinite-scroll',
    value: Function
}
