import Vue from 'vue'

/** AmiUI component common definition */
export declare class AmiUIComponent extends Vue {
    /** Install component into Vue */
    static install(vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type AmiUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type AmiUIHorizontalAlignment = 'left' | 'center' | 'right'
