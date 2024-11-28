import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({ name: "verbs" })
@ObjectType()
export class VerbEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ nullable: false })
  @Field()
  singularForm!: string;

  @Column({ nullable: false })
  @Field()
  pluralForm!: string;
}
