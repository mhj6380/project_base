export declare class CreateScheduleDTO {
    readonly title: string;
    readonly content: string;
    readonly startAt: string;
    readonly endAt: string;
    readonly userId: number;
    readonly categoryUid: string;
    readonly useRange: boolean;
}
declare const UpdateScheduleDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreateScheduleDTO>>;
export declare class UpdateScheduleDTO extends UpdateScheduleDTO_base {
    readonly id: number;
}
export {};
