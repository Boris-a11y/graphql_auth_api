import { AppDataSource } from "../../../../data-source";
import { Workout } from "../../../../entity/Workout";
import { Authorized, Mutation, Arg } from "type-graphql";
import { addWorkoutInput } from "../../inputs/addWorkoutInput";

export class updateWorkout {
  @Authorized()
  @Mutation(() => Workout)
  updateWorkout(
    @Arg("id") id: number,
    @Arg("data") newWorkoutData: addWorkoutInput
  ): void {
    AppDataSource.createQueryBuilder()
      .update(Workout)
      .set({
        title: newWorkoutData.title,
        description: newWorkoutData.description,
        muscle: newWorkoutData.muscle,
      })
      .where("id = :id", { id })
      .execute();
  }
}
