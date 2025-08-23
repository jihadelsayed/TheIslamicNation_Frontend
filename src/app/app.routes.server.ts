import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // SSR everything by default:
  { path: '**', renderMode: RenderMode.Server },
  // If you want some static pages instead, override with Prerender on specific paths.
];
