import { ExportedHandler } from "@cloudflare/workers-types";

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    _ctx: ExecutionContext,
  ): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
