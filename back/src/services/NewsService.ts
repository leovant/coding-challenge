import { Injectable } from "@tsed/di";
import { Inject } from "@tsed/di";
import { DataSource } from "typeorm";
import { SQLITE_DATA_SOURCE } from '../datasources/SqliteDatasource';
import { NewsModel } from "src/models/NewsModel";

@Injectable()
export class NewsService {
  constructor(@Inject(SQLITE_DATA_SOURCE) private dataSource: DataSource) {}

  async search(query: string, limit: number, offset: number) {
    console.log(query, limit, offset)
    return await this.dataSource.getRepository(NewsModel)
      .createQueryBuilder()
      .where("title like '%' || :title || '%'", {title: query})
      .orWhere("description like '%' || :desc || '%'", {desc: query})
      .orWhere("body like '%' || :body || '%'", {body: query})
      .limit(limit)
      .offset(offset)
      .getManyAndCount();
  }
}
