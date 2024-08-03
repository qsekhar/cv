export type Slug = string;
export type Metadata = {
  title: string;
  subtitle: string;
  date: string;
  slug: Slug;
};

export interface Post {
  metadata: Metadata;
  content: string;
}

export type Posts = Post[];
 

