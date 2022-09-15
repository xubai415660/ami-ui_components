import {AmiUIComponent} from './component'

export type ListType = 'text' | 'picture' | 'picture-card'
export type FileUploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

export interface FileListItem {
  name: string,
  url: string,
  status?: FileUploadStatus
}

export interface AmiUploadInternalRawFile extends File {
    uid: number
}

export interface AmiUploadInternalFileDetail {
    status: FileUploadStatus,
    name: string,
    size: number,
    percentage: number,
    uid: number,
    raw: AmiUploadInternalRawFile,
    url?: string
}

export interface AmiUploadProgressEvent extends ProgressEvent {
    percent: number
}

export interface HttpRequestOptions {
    headers: object,
    withCredentials: boolean,
    file: File,
    data: object,
    filename: string,
    action: string,
    onProgress: (e: AmiUploadProgressEvent) => void,
    onSuccess: (response: any) => void,
    onError: (err: ErrorEvent) => void
}

/** Upload Component */
export declare class AmiUpload extends AmiUIComponent {
    /** Request URL (required) */
    action: string

    /** Request headers */
    headers: object

    /** Whether uploading multiple files is permitted */
    multiple: boolean

    /** Additions options of request */
  data: object

  /** Key name for uploaded file */
  name: string

  /** Whether cookies are sent */
  withCredentials: boolean

  /** Whether to show the uploaded file list */
  showFileList: boolean

  /** Whether to activate drag and drop mode */
  drag: boolean

  /** Accepted file types, will not work when thumbnail-mode is true */
  accept: string

  /** Hook function when clicking the uploaded files */
  onPreview: (file: AmiUploadInternalFileDetail) => void

  /** Hook function when files are removed */
  onRemove: (file: AmiUploadInternalFileDetail, fileList: AmiUploadInternalFileDetail[]) => void

  /** Hook function when uploaded successfully */
  onSuccess: (response: any, file: AmiUploadInternalFileDetail, fileList: AmiUploadInternalFileDetail[]) => void

  /** Hook function when some errors occurs */
  onError: (err: ErrorEvent, file: AmiUploadInternalFileDetail, fileList: AmiUploadInternalFileDetail[]) => void

  /** Hook function when some progress occurs */
  onProgress: (event: AmiUploadProgressEvent, file: AmiUploadInternalFileDetail, fileList: AmiUploadInternalFileDetail[]) => void

  /** Hook function when file status change */
  onChange: (file: AmiUploadInternalFileDetail, fileList: AmiUploadInternalFileDetail[]) => void

  /** Hook function before uploading with the file to be uploaded as its parameter. If false or a Promise is returned, uploading will be aborted */
  beforeUpload: (file: AmiUploadInternalRawFile) => boolean | Promise<File | Blob | boolean>

  /** Whether thumbnail is displayed */
  thumbnailMode: boolean

  /** Default uploaded files */
  fileList: FileListItem[]

  /** Type of fileList */
  listType: ListType

  /** Whether to auto upload file */
  autoUpload: boolean

  /** Override default xhr behavior, allowing you to implement your own upload-file's request */
  httpRequest: (options: HttpRequestOptions) => void

  /** Whether to disable upload */
  disabled: boolean

  /** Maximum number of uploads allowed */
  limit: number

  /** Hook function when limit is exceeded */
  onExceed: (file: AmiUploadInternalFileDetail, fileList: AmiUploadInternalFileDetail[]) => void

  /** Clear the upload file list */
  clearFiles (): void;

    /** Abort specified file */
    abort(file: AmiUploadInternalFileDetail): void

  /** Upload the file list manually */
  submit ():void;
}
