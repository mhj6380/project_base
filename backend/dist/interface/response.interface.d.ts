export interface IResponse {
    readonly statusCode: number;
    readonly message: string;
    readonly item?: any;
}
