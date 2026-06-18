import { getApiBaseUrl, resolveMediaUrl } from "./media";

export function mapApiService(service, apiBaseUrl = getApiBaseUrl()) {
  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    icon: service.icon || "flaticon-briefcase",
    image: resolveMediaUrl(service.featured_image, apiBaseUrl),
    shortDescription: service.short_description || "",
    description: service.detailed_description || service.short_description || "",
    highlights: service.highlights || [],
    isActive: service.is_active,
    raw: service,
  };
}

export async function fetchActiveServices() {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/api/v1/public/services`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const payload = await response.json();
  const services = payload.data || [];

  return services.map((service) => mapApiService(service, apiBaseUrl));
}

export async function fetchActiveService(identifier) {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(
    `${apiBaseUrl}/api/v1/public/services/${identifier}`,
    {
      headers: { Accept: "application/json" },
    }
  );

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  return mapApiService(payload.data, apiBaseUrl);
}
