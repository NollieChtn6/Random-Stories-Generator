import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({ name: "subjects" })
@ObjectType()
export class SubjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ nullable: false })
  @Field()
  subject!: string;

  @Column({ nullable: false })
  @Field()
  isPlural!: boolean;
}
