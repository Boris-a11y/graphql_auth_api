import { User } from "../../../../entity/User";
import { MyContext } from "src/types/MyContext";
import { errorMessages } from "../../../../utils/errorMessages";
import { Mutation, Arg, Ctx } from "type-graphql";
import { loginInput } from "../inputs/../../inputs/loginInput";
import * as argon2 from "argon2";

export class Login {
  constructor() {}
  @Mutation(() => User)
  async login(
    @Arg("data") { email, password }: loginInput,
    @Ctx() { req }: MyContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error(errorMessages.invalidEmailError);
    }

    const checkPassword = await argon2.verify(user.password, password);
    if (!checkPassword) {
      throw new Error(errorMessages.invalidPasswordError);
    }

    if (!user.confirmedEmail) {
      throw new Error("confirm your email");
    }
    req.session.userId = user.id;

    return user;
  }
}
