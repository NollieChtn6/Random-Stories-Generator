import { Query, Resolver } from "type-graphql";
import { PlaceEntity } from "../entities/Places";

@Resolver()
export class PlaceResolver {
  @Query(() => [PlaceEntity])
  async complements(): Promise<PlaceEntity[]> {
    const places = await PlaceEntity.find();
    if (!places) {
      throw new Error("No places found");
    }
    return places;
  }
}
