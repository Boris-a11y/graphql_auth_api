import { AppDataSource } from "../../../../data-source";
import { Workout } from "../../../../entity/Workout";
import { Authorized, Mutation, Arg } from "type-graphql";
import { addWorkoutInput } from "../../inputs/addWorkoutInput";

export class createWorkout {
  @Authorized()
  @Mutation(() => Workout || null)
  createWorkout(@Arg("data") newWorkoutData: addWorkoutInput) {
    const workout = AppDataSource.createQueryBuilder()
      .insert()
      .into(Workout)
      .values(newWorkoutData)
      .execute();
    return workout;
  }
}
