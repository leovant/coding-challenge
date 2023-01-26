import { Default, Integer, Min } from "@tsed/schema";

export class Pageable {
  @Integer()
  @Min(1)
  @Default(1)
  pageNumber: number = 1;

  @Integer()
  @Min(1)
  @Default(10)
  pageSize: number = 10;

  constructor(options: Partial<Pageable>) {
    options.pageNumber && (this.pageNumber = options.pageNumber);
    options.pageSize && (this.pageSize = options.pageSize);
  }

  get offset() {
    return this.pageNumber ? (this.pageNumber - 1) * this.limit : 0;
  }

  get limit() {
    return this.pageSize;
  }
}
