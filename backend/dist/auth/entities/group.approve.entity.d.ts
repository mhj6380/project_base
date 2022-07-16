import { User } from "./auth.entity";
export declare class GroupApprove {
    private setCreateDate;
    id: number;
    userId: number;
    categoryType: number;
    categoryUid: string;
    status: number;
    approveAt: Date;
    createdAt: Date;
    userInfo: User;
}
