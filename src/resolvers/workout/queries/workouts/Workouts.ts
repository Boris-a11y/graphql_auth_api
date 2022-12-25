import { Authorized, Query } from "type-graphql";
import { Workout } from "../../../../entity/Workout";

export class Workouts {
  @Authorized()
  @Query(() => [Workout])
  workouts(): Promise<Workout[]> {
    return Workout.find();
  }
}
