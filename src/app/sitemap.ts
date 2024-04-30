import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: 'https://jennamat.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ]
  }