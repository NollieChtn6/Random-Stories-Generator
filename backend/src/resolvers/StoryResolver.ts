import { Resolver, Query } from "type-graphql";
import { ComplementEntity } from "../entities/Complements";
import { PlaceEntity } from "../entities/Places";
import { SubjectEntity } from "../entities/Subjects";
import { VerbEntity } from "../entities/Verbs";

@Resolver()
export class StoryResolver {
	@Query(() => String)
	async randomStory() {
		const subject = await SubjectEntity.createQueryBuilder()
			.orderBy("RANDOM()")
			.getOne();

		const verb = await VerbEntity.createQueryBuilder()
			.orderBy("RANDOM()")
			.getOne();

		const complement = await ComplementEntity.createQueryBuilder()
			.orderBy("RANDOM()")
			.getOne();

		const place = await PlaceEntity.createQueryBuilder()
			.orderBy("RANDOM()")
			.getOne();

		if (!subject || !verb || !complement || !place) {
			throw new Error("Missing data to generate story");
		}
		const verbForm = subject.isPlural ? verb.pluralForm : verb.singularForm;

		const randomStory = `${subject.subject} ${verbForm} ${complement.complement} ${place.place}.`;
		return randomStory;
	}
}
