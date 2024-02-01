import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function secondsToMin(seconds: string): string {
  return Math.floor(parseInt(seconds) / 60).toString();
}
