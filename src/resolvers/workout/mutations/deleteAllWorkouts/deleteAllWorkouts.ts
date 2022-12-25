import { Workout } from "../../../../entity/Workout";
import { Authorized, Mutation, Resolver } from "type-graphql";
import { AppDataSource } from "../../../../data-source";

@Resolver()
export class deleteAllWorkouts {
  @Authorized()
  @Mutation(() => Boolean)
  deleteAllWorkouts(): boolean {
    AppDataSource.createQueryBuilder().delete().from(Workout).execute();
    return true;
  }
}
