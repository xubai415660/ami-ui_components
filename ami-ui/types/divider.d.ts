import {AmiUIComponent} from './component'

export type ContentPosition = 'left' | 'center' | 'right'

/** Divider Component */
export declare class AmiDivider extends AmiUIComponent {
    /** enable vertical divider */
    vertical: boolean

    /** customize the content on the divider line */
    posiiton: ContentPosition
}
