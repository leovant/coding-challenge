import { Property } from "@tsed/schema";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'news'})
export class NewsModel {
  @Property()
  @PrimaryColumn()
  id: string;

  @Property()
  @Column()
  title: string;

  @Property()
  @Column()
  description: string;

  @Property()
  @Column()
  imageUrl: string;

  @Property()
  @Column()
  thumbnail: string;

  @Property()
  @Column()
  body: string;

  @Property()
  @Column()
  url: string;
}
