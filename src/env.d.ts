/// <reference types="astro/client" />
/// <reference path="./cloudflare-env.d.ts" />

type SiteRuntimeEnvironment = Env & import('./lib/config').SiteEnvironment;
