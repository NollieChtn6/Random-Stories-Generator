import { DataSource } from "typeorm";
import { ComplementEntity } from "../entities/Complements";
import { PlaceEntity } from "../entities/Places";
import { SubjectEntity } from "../entities/Subjects";
import { VerbEntity } from "../entities/Verbs";
import { TopicEntity } from "../entities/Topics";

const dataSource = new DataSource({
	type: "sqlite",
	database: "./random-stories-generator.sqlite",
	entities: [
		ComplementEntity,
		PlaceEntity,
		SubjectEntity,
		VerbEntity,
		TopicEntity,
	],
	synchronize: true,
});

export const initializeDataSource = () => {
	dataSource
		.initialize()
		.then(() => {
			console.log("Data Source has been initialized successfully");
		})
		.catch((error) => {
			console.log("Error during Data Source initialization", error);
		});
};
