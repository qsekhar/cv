/**
 * Utility function to generate canonical URLs for pages
 */

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://www.subhrasekhar.in';

export function getCanonicalUrl(path: string = ''): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure base URL doesn't end with slash and path doesn't start with slash
  const baseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  
  // Return full canonical URL
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}

export function generateCanonicalMetadata(path: string = '') {
  return {
    alternates: {
      canonical: getCanonicalUrl(path)
    }
  };
}

/**
 * Generates canonical + openGraph + twitter metadata for a page.
 * Use as `...generatePageMetadata({ path, title, description })` inside `export const metadata`.
 */
export function generatePageMetadata({
  path,
  title,
  description,
  type = 'website',
}: {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article' | 'profile';
}) {
  const url = getCanonicalUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: 'Subhra Sekhar',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
  };
}
