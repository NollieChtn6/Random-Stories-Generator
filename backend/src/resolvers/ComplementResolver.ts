import { Query, Resolver } from "type-graphql";
import { ComplementEntity } from "../entities/Complements";

@Resolver()
export class ComplementResolver {
  @Query(() => [ComplementEntity])
  async complements(): Promise<ComplementEntity[]> {
    const complements = await ComplementEntity.find();
    if (!complements) {
      throw new Error("No complements found");
    }
    return complements;
  }
}
