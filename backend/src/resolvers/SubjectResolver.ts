import { Query, Resolver } from "type-graphql";
import { SubjectEntity } from "../entities/Subjects";

@Resolver()
export class SubjectResolver {
  @Query(() => [SubjectEntity])
  async complements(): Promise<SubjectEntity[]> {
    const subjects = await SubjectEntity.find();
    if (!subjects) {
      throw new Error("No subjects found");
    }
    return subjects;
  }
}
