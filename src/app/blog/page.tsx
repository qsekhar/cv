import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { Metadata as PostMeta } from "../components/interfaces/Post";
import GetBlogPostMetadata from "../components/utils/GetBlogPostMetadata";

export default async function Blog() {
    const postMetadata: PostMeta[] = await GetBlogPostMetadata();
    const postLinks =
        postMetadata &&
        postMetadata
            .sort((a , b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
            .map((meta: PostMeta) => (
            <li key={meta.slug} className="dottedBorder">
                <Link href={`/blog/posts/${meta.slug}`}><h2 className="text-2xl font-bold">{meta.title}</h2></Link>
                <Link href={`/blog/posts/${meta.slug}`}><h3 className="text-lg font-normal text-lighttext dark:text-darktext truncate">{meta.subtitle}</h3></Link>
                <Link href={`/blog/posts/${meta.slug}`}><p className="text-sm font-normal text-lighttext dark:text-darktext">{meta.date}</p></Link>
            </li>
        ));
    return (
        <div>
            <div className="flex items-center gap-2 smallBorderButtom">
                <Link href="/" className="">
                    <HiOutlineHome size={20} />
                </Link>
            </div>
            <h1 className="h1 my-8">SSM's Blog</h1>
            <ul className="flex flex-col gap-2">{postLinks}</ul>
        </div>
    );
}