import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from "@nestjs/common";
import { IResponse } from "src/interface/response.interface";
import { ITopicList } from "src/interface/topic.interface";
import { CreateTopicDTO, UpdateTopicDTO } from "./dto/topic.dto";
import { Topic } from "./entities/topic.entity";
import { TopicService } from "./topic.service";

@Controller("topic")
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get("/list/:type")
  getList(@Param("type") type: string): Promise<ITopicList> {
    return this.topicService.getList(type);
  }

  @Post("/")
  createItem(@Body() body: CreateTopicDTO): Promise<Topic> {
    return this.topicService.createItem(body);
  }

  @Get("/:id")
  getOne(@Param("id") id: number): Promise<Topic> {
    return this.topicService.getOne(id);
  }

  @Put("/:id")
  updateItem(@Body() body: UpdateTopicDTO): Promise<IResponse> {
    return this.topicService.updateItem(body);
  }

  @Delete("/:id")
  deleteItem(@Param("id") id: number): Promise<IResponse> {
    return this.topicService.deleteItem(id);
  }
}
