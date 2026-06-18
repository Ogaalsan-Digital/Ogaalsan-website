import { getApiBaseUrl } from "./media";

export function getApiBaseUrlCandidates() {
  const configured =
    process.env.OGAALSAN_API_URL ||
    process.env.NEXT_PUBLIC_OGAALSAN_API_URL;

  const candidates = [
    configured,
    "http://127.0.0.1:9000",
    "http://localhost:9000",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
  ]
    .filter(Boolean)
    .map((url) => url.replace(/\/$/, ""));

  return [...new Set(candidates)];
}

export async function fetchPublicJson(path) {
  const candidates = getApiBaseUrlCandidates();
  let lastError = null;

  for (const baseUrl of candidates) {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} from ${baseUrl}${path}`);
      }

      const payload = await response.json();
      return { payload, apiBaseUrl: baseUrl };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`Failed to fetch ${path}`);
}

export function getResolvedApiBaseUrl() {
  return getApiBaseUrl().replace(/\/$/, "");
}
