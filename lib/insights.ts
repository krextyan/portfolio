import insightsData from "@/data/insights.json";
import type { Insight } from "./types";

export function getAllInsights(): Insight[] {
  return [...(insightsData as Insight[])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllInsightCategories(): string[] {
  return Array.from(
    new Set(getAllInsights().map((insight) => insight.category))
  ).sort();
}

export function getAllInsightTags(): string[] {
  return Array.from(
    new Set(getAllInsights().flatMap((insight) => insight.tags))
  ).sort();
}
