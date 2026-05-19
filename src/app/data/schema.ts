import { getCanonicalUrl } from "../components/utils/CanonicalUrl";
import type { Project } from "./projects";
import type { Service } from "./services";

const BASE = getCanonicalUrl();
const EMAIL = "iam@subhrasekhar.in";
const SAME_AS = [
  "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
  "https://github.com/qsekhar",
  "https://stackoverflow.com/users/1917995",
];
const KNOWS_ABOUT = [
  "React", "Next.js", "Node.js", "TypeScript", "Python",
  "PostgreSQL", "MongoDB", "Docker", "AWS",
];

type Node = Record<string, unknown>;

/** Remove keys whose value is undefined/null/"" so optional fields stay absent. */
function clean<T extends Node>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== "")
  ) as T;
}

export const PERSON_ID = `${BASE}/#person`;
export const WEBSITE_ID = `${BASE}/#website`;
export const BUSINESS_ID = `${BASE}/#business`;

export function personSchema(): Node {
  return clean({
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Subhra Sekhar Mukherjee",
    url: BASE,
    jobTitle: "Full Stack Developer & Tech Consultant",
    email: EMAIL,
    image: `${BASE}/opengraph-image`,
    sameAs: SAME_AS,
    knowsAbout: KNOWS_ABOUT,
    worksFor: { "@id": BUSINESS_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  });
}

export function webSiteSchema(): Node {
  return clean({
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE,
    name: "Subhra Sekhar",
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  });
}

export function professionalServiceSchema(): Node {
  return clean({
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: "Subhra Sekhar Mukherjee — Full Stack Development & Consulting",
    url: BASE,
    image: `${BASE}/opengraph-image`,
    email: EMAIL,
    founder: { "@id": PERSON_ID },
    areaServed: "Worldwide",
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
  });
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): Node {
  const last = items[items.length - 1];
  return clean({
    "@type": "BreadcrumbList",
    "@id": `${getCanonicalUrl(last.path)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: getCanonicalUrl(it.path),
    })),
  });
}

export function projectCreativeWork(p: Project): Node {
  return clean({
    "@type": "CreativeWork",
    name: p.name,
    description: p.summary || p.description,
    url: p.urls && p.urls.length > 0 ? p.urls[0] : undefined,
    keywords: p.tech.join(", "),
    dateCreated: p.year,
    creator: { "@id": PERSON_ID },
  });
}

export function serviceSchema(s: Service): Node {
  return clean({
    "@type": "Service",
    name: s.title,
    description: s.description,
    serviceType: s.title,
    provider: { "@id": BUSINESS_ID },
    areaServed: "Worldwide",
  });
}

export function itemListSchema(elements: Node[], name: string): Node {
  return clean({
    "@type": "ItemList",
    name,
    itemListElement: elements.map((el, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: el,
    })),
  });
}

export function blogPostingSchema(input: {
  title: string;
  description?: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  keywords?: string[];
}): Node {
  const postUrl = getCanonicalUrl(`blog/posts/${input.slug}`);
  return clean({
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    image: `${postUrl}/opengraph-image`,
    url: postUrl,
    mainEntityOfPage: postUrl,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    keywords:
      input.keywords && input.keywords.length > 0
        ? input.keywords.join(", ")
        : undefined,
  });
}
