import { Field, InputType } from "type-graphql";
import { IsEmail, MaxLength } from "class-validator";
import { isEmailAlreadyExist } from "../../../utils/isEmailExists";

@InputType()
export class registerInput {
  @isEmailAlreadyExist()
  @MaxLength(30)
  @Field()
  @IsEmail()
  email: string;

  @MaxLength(30)
  @Field()
  password: string;

  @Field()
  age: number;
}
