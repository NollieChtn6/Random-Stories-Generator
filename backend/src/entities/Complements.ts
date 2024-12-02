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

@Entity({ name: "complements" })
@ObjectType()
export class ComplementEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id!: number;

	@Column({ nullable: false })
	@Field()
	complement!: string;

	@ManyToOne(() => TopicEntity, { nullable: true, onDelete: "SET NULL" })
	@JoinColumn({ name: "topicId" })
	@Field(() => TopicEntity, { nullable: true })
	topic?: TopicEntity;
}
