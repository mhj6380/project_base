import { Topic } from "./entities/topic.entity";
import { Repository } from "typeorm";
import { ITopicList } from "src/interface/topic.interface";
import { IResponse } from "src/interface/response.interface";
import { CreateTopicDTO, UpdateTopicDTO } from "./dto/topic.dto";
export declare class TopicService {
    private readonly topicRepository;
    constructor(topicRepository: Repository<Topic>);
    getList(type: string): Promise<ITopicList>;
    createItem(body: CreateTopicDTO): Promise<Topic>;
    getOne(id: number): Promise<Topic>;
    updateItem(body: UpdateTopicDTO): Promise<IResponse>;
    deleteItem(id: number): Promise<IResponse>;
}
