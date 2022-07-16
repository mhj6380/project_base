export declare class CreateBoardContentDTO {
    readonly contentKey: string;
    readonly boardKey: string;
    readonly title: string;
    readonly subTitle: string;
    readonly webUrl: string;
    readonly content: string;
    readonly author: number;
    readonly thumbnail?: string;
    readonly tags?: string;
    readonly contentType?: string;
    readonly blockPremium?: boolean;
    readonly isPremium?: boolean;
    readonly visibleLevel?: number;
    readonly reservedAt?: string;
    readonly wrapperKey: string;
    readonly templateKey: string;
    readonly imageList: string;
    readonly youtubeUrl: string;
    readonly publicType: number;
}
