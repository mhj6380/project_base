import { OneSignalService } from "onesignal-api-client-nest";
import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    private readonly oneSignalService;
    constructor(appService: AppService, oneSignalService: OneSignalService);
    home(): string;
    devTool(): Promise<void>;
    testDataUpdate(body: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    getTestData(field: any): Promise<any>;
}
