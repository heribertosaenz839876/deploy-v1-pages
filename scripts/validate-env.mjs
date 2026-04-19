import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";

const envPath = path.resolve(".env");

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const allowedNodeEnvs = ["development", "staging", "production"];

function fail(message) {
  console.error(`${message}`);
  process.exit(1);
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    fail(`Missing required environment variable: ${name}`);
  }
  return value;
}

function validatePort(name) {
  const value = requireEnv(name);
  const port = Number(value);

  if (!Number.isInteger(port) || port <= 0) {
    fail(`${name} must be a valid positive integer.`);
  }
}

function validateBoolean(name) {
  const value = requireEnv(name).trim().toLowerCase();
  if (value !== "true" && value !== "false") {
    fail(`${name} must be either "true" or "false".`);
  }
}

function validateNodeEnv(name) {
  const value = requireEnv(name);
  if (!allowedNodeEnvs.includes(value)) {
    fail(`${name} must be one of: ${allowedNodeEnvs.join(", ")}.`);
  }
}

function validateMinLength(name, minLength = 8) {
  const value = requireEnv(name);
  if (value.length < minLength) {
    fail(`${name} must be at least ${minLength} characters long.`);
  }
}

validatePort("VITE_PORT");
validateNodeEnv("VITE_NODE_ENV");
validateBoolean("VITE_FEATURE_X_ENABLED");

requireEnv("VITE_APP_NAME");
requireEnv("VITE_LOG_LEVEL");
requireEnv("VITE_PUBLIC_ENVIRONMENT");
requireEnv("VITE_PUBLIC_VERSION");

validateMinLength("DB_PASSWORD", 8);
validateMinLength("API_KEY", 8);
validateMinLength("JWT_SECRET", 8);

console.log("Environment validation passed.");