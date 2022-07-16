import { IResponse } from "src/interface/response.interface";
import { ITopicList } from "src/interface/topic.interface";
import { CreateTopicDTO, UpdateTopicDTO } from "./dto/topic.dto";
import { Topic } from "./entities/topic.entity";
import { TopicService } from "./topic.service";
export declare class TopicController {
    private readonly topicService;
    constructor(topicService: TopicService);
    getList(type: string): Promise<ITopicList>;
    createItem(body: CreateTopicDTO): Promise<Topic>;
    getOne(id: number): Promise<Topic>;
    updateItem(body: UpdateTopicDTO): Promise<IResponse>;
    deleteItem(id: number): Promise<IResponse>;
}
