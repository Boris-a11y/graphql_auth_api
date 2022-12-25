import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class addWorkoutInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  @Length(30, 255)
  description: string;

  @Field(() => String)
  muscle: string;
}
