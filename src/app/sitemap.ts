import GetBlogPostMetadata from "./components/utils/GetBlogPostMetadata";
import { Metadata as Postmeta } from "./components/interfaces/Post";
import { MetadataRoute } from "next";


const url = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';


export const revalidate = 30000;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  const postSlugs : Postmeta[] = await GetBlogPostMetadata();
  
  const defaultPages : MetadataRoute.Sitemap = [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${url}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    }
    // other pages
  ];
 
  if(!postSlugs) {
    return [...defaultPages]
  }

  const sitemap : MetadataRoute.Sitemap = [
    ...defaultPages,
    ...postSlugs.map((e: Postmeta) => ({
      url: `${url}/blog/posts/${e.slug}`,
      lastModified: e.lastModified,
      changeFrequency: 'weekly' as any,
      priority: 0.8
    }))
  ];
 
  return sitemap;
}