import Vue, {PluginObject} from 'vue'
import {AmiUIComponent, AmiUIComponentSize, AmiUIHorizontalAlignment} from './component'

import {AmiAlert} from './alert'
import {AmiAside} from './aside'
import {AmiAutocomplete} from './autocomplete'
import {AmiBadge} from './badge'
import {AmiBreadcrumb} from './breadcrumb'
import {AmiBreadcrumbItem} from './breadcrumb-item'
import {AmiButton} from './button'
import {AmiButtonGroup} from './button-group'
import {AmiCard} from './card'
import {AmiCarousel} from './carousel'
import {AmiCarouselItem} from './carousel-item'
import {AmiCascader} from './cascader'
import {AmiCheckbox} from './checkbox'
import {AmiCheckboxButton} from './checkbox-button'
import {AmiCheckboxGroup} from './checkbox-group'
import {AmiCol} from './col'
import {AmiCollapse} from './collapse'
import {AmiCollapseItem} from './collapse-item'
import {AmiColorPicker} from './color-picker'
import {AmiContainer} from './container'
import {AmiDatePicker} from './date-picker'
import {AmiDialog} from './dialog'
import {AmiDropdown} from './dropdown'
import {AmiDropdownItem} from './dropdown-item'
import {AmiDropdownMenu} from './dropdown-menu'
import {AmiFooter} from './footer'
import {AmiForm} from './form'
import {AmiFormItem} from './form-item'
import {AmiHeader} from './header'
import {AmiInput} from './input'
import {AmiInputNumber} from './input-number'
import {AmiLoading} from './loading'
import {AmiMain} from './main'
import {AmiMenu} from './menu'
import {AmiMenuItem} from './menu-item'
import {AmiMenuItemGroup} from './menu-item-group'
import {AmiMessage} from './message'
import {AmiMessageBox} from './message-box'
import {AmiNotification} from './notification'
import {AmiOption} from './option'
import {AmiOptionGroup} from './option-group'
import {AmiPagination} from './pagination'
import {AmiPopover} from './popover'
import {AmiProgress} from './progress'
import {AmiRate} from './rate'
import {AmiRadio} from './radio'
import {AmiRadioButton} from './radio-button'
import {AmiRadioGroup} from './radio-group'
import {AmiRow} from './row'
import {AmiSelect} from './select'
import {AmiSlider} from './slider'
import {AmiStep} from './step'
import {AmiSteps} from './steps'
import {AmiSubmenu} from './submenu'
import {AmiSwitch} from './switch'
import {AmiTable} from './table'
import {AmiTableColumn} from './table-column'
import {AmiTag} from './tag'
import {AmiTabs} from './tabs'
import {AmiTabPane} from './tab-pane'
import {AmiTimeline} from './timeline'
import {AmiTimelineItem} from './timeline-item'
import {AmiTimePicker} from './time-picker'
import {AmiTimeSelect} from './time-select'
import {AmiTooltip} from './tooltip'
import {AmiTransfer} from './transfer'
import {AmiTree, TreeData} from './tree'
import {AmiUpload} from './upload'
import {AmiLink} from './link'
import {AmiDivider} from './divider'
import {AmiIcon} from './icon'
import {AmiCalendar} from './calendar'
import {AmiImage} from './image'
import {AmiBacktop} from './backtop'
import {AmiInfiniteScroll} from './infinite-scroll'
import {AmiPageHeader} from './page-header'
import {AmiAvatar} from './avatar'
import {AmiDrawer} from './drawer'
import {AmiPopconfirm} from './popconfirm'
import {AmiSkeleton} from './skeleton'
import {AmiSkeletonItem} from './skeleton-item'
import {AmiCascaderPanel} from './cascader-panel'
import {AmiEmpty} from './empty'
import {AmiSpinner} from './spinner'
import {AmiDescriptions} from './descriptions'
import {AmiDescriptionsItem} from './descriptions-item'
import {AmiResult} from './result'
import { AmiInputCron } from './input-cron'
import { AmiBaseChart } from './base-chart'
import { AmiDraggable } from './draggable'
import { AmiInputIp } from './input-ip'
import { AmiCategorySelection } from './category-selection'
import { AmiVersionNumber } from './version-number'
import { AmiModelTitle } from './model-title'
import { AmiClamp } from './clamp'
import { AmiTextEditor } from './text-editor'
import { AmiMapBasic } from './map-basic'
import { AmiWaterMark } from './water-mark'
import { AmiVideo } from './video'
import { AmiCodeEditor } from './code-editor'
import { AmiGiantTree } from './giant-tree'
import { AmiTreeSelect } from './tree-select'
import { AmiSvgIcon } from './svg-icon'

import { AmiOnlineExcel } from './online-excel'
import { AmiTableHeaderSet } from './table-header-set'
import { AmiServiceTable } from './service-table'
import { AmiLayeredTree } from './layered-tree'

export interface InstallationOptions {
    locale: any,
    i18n: any,
    size: string
}

/** The version of Ami-ui */
export const version: string

/**
 * Install all Ami-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(AmiUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** AmiUI component common definition */
export type Component = AmiUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = AmiUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = AmiUIHorizontalAlignment

/** Show animation while loading data */
export const Loading: AmiLoading

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: AmiMessage

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: AmiMessageBox

/** Displays a global notification message at the upper right corner of the page */
export const Notification: AmiNotification

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Alert Component */
export class Alert extends AmiAlert {
}

/** Aside Component */
export class Aside extends AmiAside {
}

/** Autocomplete Component */
export class Autocomplete extends AmiAutocomplete {
}

/** Bagde Component */
export class Badge extends AmiBadge {
}

/** Breadcrumb Component */
export class Breadcrumb extends AmiBreadcrumb {
}

/** Breadcrumb Item Component */
export class BreadcrumbItem extends AmiBreadcrumbItem {
}

/** Button Component */
export class Button extends AmiButton {
}

/** Button Group Component */
export class ButtonGroup extends AmiButtonGroup {
}

/** Card Component */
export class Card extends AmiCard {
}

/** Cascader Component */
export class Cascader extends AmiCascader {
}

/** Carousel Component */
export class Carousel extends AmiCarousel {
}

/** Carousel Item Component */
export class CarouselItem extends AmiCarouselItem {
}

/** Checkbox Component */
export class Checkbox extends AmiCheckbox {
}

/** Checkbox Button Component */
export class CheckboxButton extends AmiCheckboxButton {
}

/** Checkbox Group Component */
export class CheckboxGroup extends AmiCheckboxGroup {
}

/** Colunm Layout Component */
export class Col extends AmiCol {
}

/** Collapse Component */
export class Collapse extends AmiCollapse {
}

/** Collapse Item Component */
export class CollapseItem extends AmiCollapseItem {
}

/** Color Picker Component */
export class ColorPicker extends AmiColorPicker {
}

/** Container Component */
export class Container extends AmiContainer {
}

/** Date Picker Component */
export class DatePicker extends AmiDatePicker {
}

/** Dialog Component */
export class Dialog extends AmiDialog {
}

/** Dropdown Component */
export class Dropdown extends AmiDropdown {
}

/** Dropdown Item Component */
export class DropdownItem extends AmiDropdownItem {
}

/** Dropdown Menu Component */
export class DropdownMenu extends AmiDropdownMenu {
}

/** Footer Component */
export class Footer extends AmiFooter {
}

/** Form Component */
export class Form extends AmiForm {
}

/** Form Item Component */
export class FormItem extends AmiFormItem {
}

/** Header Component */
export class Header extends AmiHeader {
}

/** Input Component */
export class Input extends AmiInput {
}

/** Input Number Component */
export class InputNumber extends AmiInputNumber {
}

/** Main Component */
export class Main extends AmiMain {
}

/** Menu that provides navigation for your website */
export class Menu extends AmiMenu {
}

/** Menu Item Component */
export class MenuItem extends AmiMenuItem {
}

/** Menu Item Group Component */
export class MenuItemGroup extends AmiMenuItemGroup {
}

/** Dropdown Select Option Component */
export class Option extends AmiOption {
}

/** Dropdown Select Option Group Component */
export class OptionGroup extends AmiOptionGroup {
}

/** Pagination Component */
export class Pagination extends AmiPagination {
}

/** Popover Component */
export class Popover extends AmiPopover {
}

/** Progress Component */
export class Progress extends AmiProgress {
}

/** Rate Component */
export class Rate extends AmiRate {
}

/** Radio Component */
export class Radio extends AmiRadio {
}

/** Radio Button Component */
export class RadioButton extends AmiRadioButton {
}

/** Radio Group Component */
export class RadioGroup extends AmiRadioGroup {
}

/** Row Layout Component */
export class Row extends AmiRow {
}

/** Dropdown Select Component */
export class Select extends AmiSelect {
}

/** Slider Component */
export class Slider extends AmiSlider {
}

/** Step Component */
export class Step extends AmiStep {
}

/** Steps Component */
export class Steps extends AmiSteps {
}

/** Submenu Component */
export class Submenu extends AmiSubmenu {
}

/** Switch Component */
export class Switch extends AmiSwitch {
}

/** Table Component */
export class Table extends AmiTable {
}

/** Table Column Component */
export class TableColumn extends AmiTableColumn {
}

/** Tabs Component */
export class Tabs extends AmiTabs {
}

/** Tab Pane Component */
export class TabPane extends AmiTabPane {
}

/** Tag Component */
export class Tag extends AmiTag {
}

/** Timeline Component */
export class Timeline extends AmiTimeline {
}

/** Timeline Item Component */
export class TimelineItem extends AmiTimelineItem {
}

/** TimePicker Component */
export class TimePicker extends AmiTimePicker {
}

/** TimeSelect Component */
export class TimeSelect extends AmiTimeSelect {
}

/** Tooltip Component */
export class Tooltip extends AmiTooltip {
}

/** Transfer Component */
export class Transfer extends AmiTransfer {
}

/** Tree Component */
export class Tree<K = any, D = TreeData> extends AmiTree<K, D> {
}

/** Upload Component */
export class Upload extends AmiUpload {
}

/** Divider Component */
export class Divider extends AmiDivider {
}

/** Link Component */
export class Link extends AmiLink {
}

/** Image Component */
export class Image extends AmiImage {
}

/** Icon Component */
export class Icon extends AmiIcon {
}

/** Calendar Component */
export class Calendar extends AmiCalendar {
}

/** Backtop Component */
export class Backtop extends AmiBacktop {
}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<AmiInfiniteScroll>;

/** PageHeader Component */
export class PageHeader extends AmiPageHeader {
}

/** Avatar Component */
export class Avatar extends AmiAvatar {
}

/** Drawer Component */
export class Drawer extends AmiDrawer {
}

/** Popconfirm Component */
export class Popconfirm extends AmiPopconfirm {
}

/** Skeleton Component */
export class Skeleton extends AmiSkeleton {
}

/** Skeleton Item Component */
export class SkeletonItem extends AmiSkeletonItem {
}

/** CascaderPanel Component */
export class CascaderPanel extends AmiCascaderPanel {
}

/** Empty Component */
export class Empty extends AmiEmpty {
}

/** Spinner Component */
export class Spinner extends AmiSpinner {
}

/** Description Component */
export class Descriptions extends AmiDescriptions {
}

/** Description Item Component */
export class DescriptionsItem extends AmiDescriptionsItem {
}

/** Result Component */
export class Result extends AmiResult {
}

/** InputCron Component */
export class InputCron extends AmiInputCron {}

/** BaseChart Component */
export class BaseChart extends AmiBaseChart {}

/** Draggable Component */
export class Draggable extends AmiDraggable {}

/** InputIp Component */
export class InputIp extends AmiInputIp {}

/** CategorySelection Component */
export class CategorySelection extends AmiCategorySelection {}

/** VersionNumber Component */
export class VersionNumber extends AmiVersionNumber {}

/** ModelTitle Component */
export class ModelTitle extends AmiModelTitle {}

/** Clamp Component */
export class Clamp extends AmiClamp {}

/** TextEditor Component */
export class TextEditor extends AmiTextEditor {}

/** MapBasic Component */
export class MapBasic extends AmiMapBasic {}

/** WaterMark Component */
export class WaterMark extends AmiWaterMark {}

/** Video Component */
export class Video extends AmiVideo {}

/** CodeEditor Component */
export class CodeEditor extends AmiCodeEditor {}

/** GiantTree Component */
export class GiantTree extends AmiGiantTree {}

/** TreeSelect Component */
export class TreeSelect extends AmiTreeSelect {}

/** SvgIcon Component */
export class SvgIcon extends AmiSvgIcon {}


/** OnlineExcel Component */
export class OnlineExcel extends AmiOnlineExcel {}

/** TableHeaderSet Component */
export class TableHeaderSet extends AmiTableHeaderSet {}

/** ServiceTable Component */
export class ServiceTable extends AmiServiceTable {}

/** LayeredTree Component */
export class LayeredTree extends AmiLayeredTree {}
