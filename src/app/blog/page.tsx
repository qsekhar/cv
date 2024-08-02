import fs from "fs/promises";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import matter from "gray-matter";
import { Metadata, Posts, Post } from "../components/interfaces/Post";

const folder: string = process.env.POST_FOLDER || "";
const getBlogPostMetadata = async (): Promise<Metadata[]> => {
    const isDirectory = await fs
        .stat(folder)
        .then((stat) => stat.isDirectory());
    if (!isDirectory) {
        throw new Error(
            `Folder ${folder} does not exist or is not a directory`
        );
    }
    const files = await fs.readdir(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    // get the blog post slug from the markdown file name
    const metadatas =  markdownPosts.map(async (file) => {
        const slug = file.replace(".md", "");
        const matterResult = matter(await fs.readFile(`${folder}/${file}`, "utf-8"))
        const { title, date, subtitle } =  matterResult.data;
        return { title, subtitle, date, slug };
    });

    return Promise.all(metadatas);
};

export default async function Blog() {
    const postMetadata: Metadata[] = await getBlogPostMetadata();
    const postLinks =
        postMetadata &&
        postMetadata.map((meta: Metadata) => (
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
            <h1 className="h1 my-8">Subhra's Blog</h1>
            <ul className="flex flex-col gap-2">{postLinks}</ul>
        </div>
    );
}