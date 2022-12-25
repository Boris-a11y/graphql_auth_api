import { _Users } from "../resolvers/user/queries/user/_User";
import { deleteAllWorkouts } from "../resolvers/workout/mutations/deleteAllWorkouts/deleteAllWorkouts";
import { buildSchema } from "type-graphql";
import { customAuthChecker } from "./customAuthChecker";
import { Register } from "../resolvers/user/mutations/register/Register";
import { Login } from "../resolvers/user/mutations/login/Login";
import { Logout } from "../resolvers/user/mutations/logout/Logout";
import { ConfirmEmail } from "../resolvers/user/mutations/confirm-mail/ConfirmEmail";
import { _Workout } from "../resolvers/workout/queries/workout/Workout";
import { Workouts } from "../resolvers/workout/queries/workouts/Workouts";
import { createWorkout } from "../resolvers/workout/mutations/createWorkout/createWorkout";
import { updateWorkout } from "../resolvers/workout/mutations/updateWorkout/updateWorkout";
import { deleteWorkout } from "../resolvers/workout/mutations/deleteWorkout/deleteWorkout";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      deleteAllWorkouts,
      _Users,
      Register,
      Login,
      Logout,
      ConfirmEmail,
      _Workout,
      Workouts,
      createWorkout,
      updateWorkout,
      deleteWorkout,
    ],
    authChecker: customAuthChecker,
    nullableByDefault: true,
  });
