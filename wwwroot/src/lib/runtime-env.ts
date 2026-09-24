import { env } from 'cloudflare:workers';

/** Worker bindings plus the optional variables and secrets declared in `SiteEnvironment`. */
export function siteEnv(): SiteRuntimeEnvironment {
  return env as SiteRuntimeEnvironment;
}
