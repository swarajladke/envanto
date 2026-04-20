import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function escapeSvg(text: string) {
  return encodeURIComponent(text.replace(/\n/g, "").replace(/\s\s+/g, " "));
}

export function createMockImage(
  title: string,
  from = "#7C3AED",
  to = "#1A1A1A",
  w = 1200,
  h = 800
) {
  const svg = `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="${w}" y2="${h}">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="${w}" height="${h}" rx="24" fill="url(#g)"/>
      <rect width="${w}" height="${h}" rx="24" fill="url(#grid)"/>
      <circle cx="${w * 0.84}" cy="${h * 0.22}" r="${h * 0.28}" fill="rgba(255,255,255,0.08)"/>
      <circle cx="${w * 0.15}" cy="${h * 0.76}" r="${h * 0.18}" fill="rgba(0,0,0,0.16)"/>
      <text x="${w * 0.08}" y="${h * 0.56}" fill="#F5F5F5" font-size="${Math.max(
    28,
    w * 0.04
  )}" font-family="Inter, Arial, sans-serif" font-weight="700">
        ${title}
      </text>
      <text x="${w * 0.08}" y="${h * 0.67}" fill="rgba(245,245,245,0.9)" font-size="${Math.max(
    14,
    w * 0.018
  )}" font-family="Inter, Arial, sans-serif">
        Premium digital product preview
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${escapeSvg(svg)}`;
}
