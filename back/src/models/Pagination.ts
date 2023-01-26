import { CollectionOf, Default, Generics, Integer, MinLength } from "@tsed/schema";
import { Pageable } from "./Pageable";

@Generics("T")
export class Pagination<T> extends Pageable {
  @CollectionOf("T")
  values: T[];

  @Integer()
  @MinLength(0)
  @Default(0)
  totalCount: number = 0;

  constructor({ values, totalCount, pageable }: Partial<Pagination<T>> & { pageable: Pageable }) {
    super(pageable);
    values && (this.values = values);
    totalCount && (this.totalCount = totalCount);
  }
}
