import {AmiUIComponent, AmiUIComponentSize} from './component'

export type TagType = 'primary' | 'gray' | 'success' | 'warning' | 'danger'
export type TagTheme = 'dark' | 'light' | 'plain'

/** Tag Component */
export declare class AmiTag extends AmiUIComponent {
    /** Tag type */
    type: TagType

    /** Whether Tab can be removed */
    closable: boolean

    /** Whether the removal animation is disabled */
    disableTransitions: boolean

    /** Whether Tag has a highlighted border */
  hit: boolean

  /** Background color of the tag */
  color: string

  /** Tag size */
  size: AmiUIComponentSize

  /** Tag theme */
  effect: TagTheme
}
