import { Query, Arg } from "type-graphql";
import { Workout } from "../../../../entity/Workout";

export class _Workout {
  @Query(() => Workout)
  workout(@Arg("id") id: number): Promise<Workout | null> {
    return Workout.findOne({ where: { id } });
  }
}
