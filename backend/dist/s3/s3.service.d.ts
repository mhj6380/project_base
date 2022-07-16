import { ConfigService } from "@nestjs/config";
export declare class S3Service {
    private readonly config;
    constructor(config: ConfigService);
    test(): Promise<void>;
    upload(base64Image: string, thumbnail: boolean, extension?: string): Promise<any>;
    resize(body: string): Promise<string>;
}
