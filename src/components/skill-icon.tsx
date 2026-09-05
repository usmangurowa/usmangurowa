import * as si from "simple-icons";

export type SkillIconName = keyof typeof ICONS;

const ICONS = {
  typescript: si.siTypescript,
  javascript: si.siJavascript,
  python: si.siPython,
  react: si.siReact,
  expo: si.siExpo,
  nextjs: si.siNextdotjs,
  vue: si.siVuedotjs,
  nuxt: si.siNuxt,
  tailwind: si.siTailwindcss,
  shadcn: si.siShadcnui,
  radix: si.siRadixui,
  tanstack: si.siTanstack,
  reactquery: si.siReactquery,
  zod: si.siZod,
  node: si.siNodedotjs,
  bun: si.siBun,
  hono: si.siHono,
  express: si.siExpress,
  drizzle: si.siDrizzle,
  prisma: si.siPrisma,
  postgres: si.siPostgresql,
  redis: si.siRedis,
  betterauth: si.siBetterauth,
  temporal: si.siTemporal,
  supabase: si.siSupabase,
  firebase: si.siFirebase,
  vercel: si.siVercel,
  anthropic: si.siAnthropic,
  gemini: si.siGooglegemini,
  openrouter: si.siOpenrouter,
  braintrust: si.siBraintrust,
  docker: si.siDocker,
  coolify: si.siCoolify,
  cloudflare: si.siCloudflareworkers,
  turborepo: si.siTurborepo,
  pnpm: si.siPnpm,
  sentry: si.siSentry,
  posthog: si.siPosthog,
  resend: si.siResend,
  stripe: si.siStripe,
  paddle: si.siPaddle,
  whatsapp: si.siWhatsapp,
  telegram: si.siTelegram,
  vitest: si.siVitest,
  github: si.siGithub,
} as const;

export function SkillIcon({ name }: { name: SkillIconName }) {
  const icon = ICONS[name];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
