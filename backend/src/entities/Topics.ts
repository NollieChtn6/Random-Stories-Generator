import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";

@Entity({ name: "topics" })
@ObjectType()
export class TopicEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id!: number;

	@Column({ nullable: false })
	@Field()
	label!: string;
}
