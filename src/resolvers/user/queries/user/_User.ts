import { Query, Resolver } from "type-graphql";
import { User } from "../../../../entity/User";

@Resolver()
export class _Users {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await User.find();
    return users;
  }
}
