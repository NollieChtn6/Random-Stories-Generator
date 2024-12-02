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

@Entity({ name: "places" })
@ObjectType()
export class PlaceEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id!: number;

	@Column({ nullable: false })
	@Field()
	place!: string;

	@ManyToOne(() => TopicEntity, { nullable: true, onDelete: "SET NULL" })
	@JoinColumn({ name: "topicId" })
	@Field(() => TopicEntity, { nullable: true })
	topic?: TopicEntity;
}
