import matter from "gray-matter";
import { Metadata } from "../interfaces/Post";
import fs from "fs/promises";

const folder: string = process.env.POST_FOLDER || "";
const GetBlogPostMetadata = async (): Promise<Metadata[]> => {
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

export default GetBlogPostMetadata