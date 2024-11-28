import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({ name: "complements" })
@ObjectType()
export class ComplementEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ nullable: false })
  @Field()
  complement!: string;
}
