import { Req } from "@tsed/common";
import { Unauthorized } from "@tsed/exceptions";
import {Middleware, MiddlewareMethods} from "@tsed/platform-middlewares";
import {Context} from "@tsed/platform-params";

@Middleware()
export class AuthenticationMiddleware implements MiddlewareMethods {
  use(@Req() request: Req, @Context() ctx: Context) {
    const expectedKey = 'e28105562fmsh01edebafeeb6117p1f37e7jsn0221a314ae3d';
    const expectedHost = 'contextualwebsearch-websearch-v1.p.rapidapi.com';

    const key = request.headers['x-rapidapi-key'];
    const host = request.headers['x-rapidapi-host'];

    if (key !== expectedKey || host !== expectedHost) {
      throw new Unauthorized("Unauthorized");
    }
  }
}
