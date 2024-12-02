import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { TopicEntity } from "./Topics";

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

	@ManyToOne(() => TopicEntity, { nullable: true, onDelete: "SET NULL" })
	@JoinColumn({ name: "topicId" })
	@Field(() => TopicEntity, { nullable: true })
	topic?: TopicEntity;
}
