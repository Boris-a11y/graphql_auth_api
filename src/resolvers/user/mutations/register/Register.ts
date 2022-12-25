import { User } from "../../../../entity/User";
import { Resolver, Mutation, Arg } from "type-graphql";
import { registerInput } from "../../inputs/registerInput";
import * as argon2 from "argon2";

@Resolver()
export class Register {
  @Mutation(() => User)
  async register(
    @Arg("data") { email, password, age }: registerInput
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password, {
      saltLength: 15,
    });

    const user = User.create({ email, password: hashedPassword, age }).save();

    return user;
  }
}
