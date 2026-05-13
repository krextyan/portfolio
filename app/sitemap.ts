import { MetadataRoute } from 'next';
import { getAllLogSlugs } from '@/lib/logs';

export default function sitemap(): MetadataRoute.Sitemap {
  // Palitan ito ng iyong actual production domain
  const baseUrl = "https://krextyan-portfolio.vercel.app/";
  
  // Get all log pages
  const logs = getAllLogSlugs().map((slug) => ({
    url: `${baseUrl}/logs/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
    },
    ...logs,
  ];
}