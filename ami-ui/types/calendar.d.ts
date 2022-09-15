import {AmiUIComponent} from './component'

export type DateType = Date | String | Number

/** Calendar Component */
export declare class AmiCalendar extends AmiUIComponent {
    /** Binding value */
    value: DateType

    /** Specify the display range of the calendar */
    range: DateType[]

    /** First day of week */
    firstDayOfWeek: number
}
