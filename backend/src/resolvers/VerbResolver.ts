import { Query, Resolver } from "type-graphql";
import { VerbEntity } from "../entities/Verbs";

@Resolver()
export class VerbResolver {
  @Query(() => [VerbEntity])
  async complements(): Promise<VerbEntity[]> {
    const verbs = await VerbEntity.find();
    if (!verbs) {
      throw new Error("No verbs found");
    }
    return verbs;
  }
}
