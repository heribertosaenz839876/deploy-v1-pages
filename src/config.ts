const allowedNodeEnvs = ["development", "staging", "production"] as const;

type AllowedNodeEnv = (typeof allowedNodeEnvs)[number];

function requireEnv(name: string, value: string | undefined): string {
  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function parsePort(value: string): number {
  const port = Number(value);
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("VITE_PORT must be a valid positive integer.");
  }
  return port;
}

function parseBoolean(name: string, value: string): boolean {
  const normalized = value.trim().toLowerCase();

  if (normalized === "true") return true;
  if (normalized === "false") return false;

  throw new Error(`${name} must be either "true" or "false".`);
}

function parseNodeEnv(value: string): AllowedNodeEnv {
  if (!allowedNodeEnvs.includes(value as AllowedNodeEnv)) {
    throw new Error(
      `VITE_NODE_ENV must be one of: ${allowedNodeEnvs.join(", ")}.`
    );
  }
  return value as AllowedNodeEnv;
}

export const appConfig = {
  appName: requireEnv("VITE_APP_NAME", import.meta.env.VITE_APP_NAME),
  port: parsePort(requireEnv("VITE_PORT", import.meta.env.VITE_PORT)),
  nodeEnv: parseNodeEnv(
    requireEnv("VITE_NODE_ENV", import.meta.env.VITE_NODE_ENV)
  ),
  logLevel: requireEnv("VITE_LOG_LEVEL", import.meta.env.VITE_LOG_LEVEL),
  featureXEnabled: parseBoolean(
    "VITE_FEATURE_X_ENABLED",
    requireEnv(
      "VITE_FEATURE_X_ENABLED",
      import.meta.env.VITE_FEATURE_X_ENABLED
    )
  ),
  publicEnvironment: requireEnv(
    "VITE_PUBLIC_ENVIRONMENT",
    import.meta.env.VITE_PUBLIC_ENVIRONMENT
  ),
  publicVersion: requireEnv(
    "VITE_PUBLIC_VERSION",
    import.meta.env.VITE_PUBLIC_VERSION
  ),
};