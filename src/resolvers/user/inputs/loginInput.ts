import { Field, InputType } from "type-graphql";
import { IsEmail, MaxLength } from "class-validator";

@InputType()
export class loginInput {
  @Field()
  @MaxLength(30)
  @IsEmail()
  email: string;

  @MaxLength(30)
  @Field()
  password: string;
}
