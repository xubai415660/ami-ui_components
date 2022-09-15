import {AmiUIComponent} from './component'
import {VNode} from 'vue'

interface AmiResultSlots {
    /* title slot: custom title */
    title: VNode[]

    /* icon slot: custom icon */
    icon: VNode[]

    /* subTitle slot: custom sub title */
    subTitle: VNode[]

    /* extra slot: custom extra area, display on the top right */
  extra: VNode[]

  [key: string]: VNode[]
}

/** Used to give feedback on the result of user's operation or access exception. **/
export declare class AmiResult extends AmiUIComponent {

    /* title */
    title: string

    /* sub title */
    subTitle: string

    /* icon type */
    icon: 'success' | 'warning' | 'info' | 'error'

    $slots: AmiResultSlots
}
