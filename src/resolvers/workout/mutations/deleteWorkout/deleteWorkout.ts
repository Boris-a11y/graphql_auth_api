import { AppDataSource } from "../../../../data-source";
import { Workout } from "../../../../entity/Workout";
import { Authorized, Mutation, Arg } from "type-graphql";

export class deleteWorkout {
  @Authorized()
  @Mutation(() => Boolean)
  deleteWorkout(@Arg("id") id: number): boolean {
    AppDataSource.createQueryBuilder()
      .delete()
      .from(Workout)
      .where("id = :id", { id })
      .execute();
    return true;
  }
}
