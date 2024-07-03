// upload.d.ts

export interface UploadAttributes {
  [key: string]: string;
}

export interface UploadResult {
  status: boolean;
  message: string;
  list: File[];
}

export declare function upload(attribute: UploadAttributes, callback: (result: UploadResult) => void): void;
