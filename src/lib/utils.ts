import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prepends the base URL to a path for GitHub Pages deployment
 * @param path - The path starting with /
 * @returns The path with base URL prepended
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove trailing slash from base and leading slash from path to avoid double slashes
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
