import { handle } from '@astrojs/cloudflare/handler';
import { maintainStore } from './lib/store/maintenance';
import type { StoreEnv } from './lib/store/types';
export default {
  fetch: handle,
  scheduled(
    _controller: ScheduledController,
    env: Env & StoreEnv,
    ctx: ExecutionContext,
  ) {
    ctx.waitUntil(maintainStore(env));
  },
} satisfies ExportedHandler<Env & StoreEnv>;
