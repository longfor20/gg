import type { APIRoute } from "astro";
import { getPinnedRepositories } from "../../../utils/github";

export const get: APIRoute = async () => {
  try {
    const repositories = await getPinnedRepositories();
    return new Response(JSON.stringify(repositories), {
      headers: new Headers({
        "Cache-Control": `public, max-age=${10}`,
        "Content-Type": "application/json",
      }),
    });
  } catch {
    return new Response(null, {
      status: 500,
    });
  }
};