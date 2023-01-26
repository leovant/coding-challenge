import { Controller, Inject } from "@tsed/di";
import { Get } from "@tsed/schema";
import { QueryParams } from "@tsed/platform-params";
import { NewsService } from "src/services/NewsService";
import { NewsModel } from "src/models/NewsModel";
import { UseAuth } from "@tsed/platform-middlewares";
import { AuthenticationMiddleware } from "src/middlewares/AuthenticationMiddleware";
import { Pageable } from "src/models/Pageable";
import { Pagination } from "src/models/Pagination";

@Controller("/news")
@UseAuth(AuthenticationMiddleware)
export class NewsController {
  constructor(@Inject(NewsService) private newsService: NewsService) {}

  @Get("/")
  async get(@QueryParams() pageableOptions: Pageable, @QueryParams('q') query: string): Promise<Pagination<NewsModel>> {
    const { limit, offset } = pageableOptions;
    const [values, totalCount] = await this.newsService.search(query, limit, offset);

    return new Pagination<NewsModel>({
      values,
      totalCount,
      pageable: pageableOptions
    });
  }
}
