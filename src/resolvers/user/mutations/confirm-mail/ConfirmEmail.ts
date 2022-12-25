import { User } from "../../../../entity/User";
import { redis } from "../../../../redis";
import { Mutation, Arg } from "type-graphql";

export class ConfirmEmail {
  @Mutation(() => Boolean)
  async confirmEmail(@Arg("token") uniqueId: string): Promise<boolean> {
    const userId = await redis.get(uniqueId);

    if (!userId) {
      return false;
    }
    await User.update({ id: userId as any }, { confirmedEmail: true });
    await redis.del(uniqueId);

    return true;
  }
}
