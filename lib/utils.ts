import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // Returns true if the icon exists
  } catch {
    return false;
  }
};

export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech,
      url: (await checkIconExists(url)) ? url : "/tech.svg",
    }))
  );

  return results;
};

/**
 * Returns a deterministic cover image for a given interview ID.
 * Using Math.random() here caused a server/client hydration mismatch
 * because the server picked one image and the client picked a different one,
 * which triggered an infinite Fast Refresh reload loop in Next.js dev mode.
 *
 * Fix: hash the interviewId to a stable index so server and client always
 * compute the same cover image for the same interview.
 */
export const getRandomInterviewCover = (interviewId?: string) => {
  if (!interviewId) {
    // Fallback for cases where no id is available — use first cover (stable)
    return `/covers${interviewCovers[0]}`;
  }
  // Simple deterministic hash: sum char codes, mod by array length
  const hash = interviewId
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % interviewCovers.length;
  return `/covers${interviewCovers[index]}`;
};