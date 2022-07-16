import { Topic } from "src/topic/entities/topic.entity";

export interface ITopicList {
  totalCount: number;
  items: Topic[];
}
