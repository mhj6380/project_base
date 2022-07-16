import { S3Service } from "./s3.service";
export declare class S3Controller {
    private readonly s3Service;
    constructor(s3Service: S3Service);
    upload(data: any, thumbnail: boolean, extension: string): Promise<any>;
    resize(data: any): Promise<any>;
    test(): Promise<void>;
}
