import { Repository } from "typeorm";
import { Splash } from "./entities/splash.entity";
import { TestData } from "./entities/test.data.entity";
export declare class AppService {
    private readonly splashRepository;
    private readonly testDataRepository;
    constructor(splashRepository: Repository<Splash>, testDataRepository: Repository<TestData>);
    devTool(): Promise<void>;
    policy(): Promise<Splash>;
    testDataUpdate(body: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    getTestData(field: string): Promise<any>;
}
