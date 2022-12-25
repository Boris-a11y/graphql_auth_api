import { MyContext } from "src/types/MyContext";
import { COOKIE_NAME } from "../../../../utils/constants";
import { Ctx, Mutation } from "type-graphql";

export class Logout {
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve, reject) => {
      if (req.session) {
        req.session.destroy((error) => {
          error ? reject(error) : res.clearCookie(COOKIE_NAME);
          resolve(true);
        });
      }
    });
  }
}
