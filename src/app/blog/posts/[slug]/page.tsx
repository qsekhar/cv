import { NextPage } from "next";
import fs from "fs/promises";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import GetBlogPostMetadata from "../../../components/utils/GetBlogPostMetadata";
import { Metadata, Slug } from "../../../components/interfaces/Post";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaBlogSolid } from "react-icons/lia";

interface Props {
    params: {
        slug: Slug;
    };
}

const folder: string = process.env.POST_FOLDER || "";

if (!folder) {
    throw new Error("POST_FOLDER environment variable is not defined.");
}

const getPostContent = async (slug: Slug) => {
    const file = `${folder}/${slug}.md`;

    try {
        await fs.stat(file);
    } catch (err) {
        notFound();
    }
    const content = await fs.readFile(file, "utf8");

    return content.replace(/---[\s\S]*?---/, '');
};

export async function generateStaticParams() {
    const postMetadata: Metadata[] = await GetBlogPostMetadata();
    return postMetadata.map((meta: Metadata) => ({ slug: meta.slug }));
}

const Post: NextPage<Props> = async (props: Props) => {
    const { slug } = props.params;
    const content = await getPostContent(slug);
    //
    return (
        <article className="prose dark:prose-invert lg:prose-xl w-full">
            <div className="flex items-center gap-2 smallBorderButtom">
                <Link
                    href="/"
                    className="flex gap-2 text-primary items-center justify-start align-middle"
                >
                    <HiOutlineHome size={20} />
                </Link>

                <RiArrowRightSLine size={20} />

                <Link href="/blog" className="flex gap-2 text-primary">
                    <LiaBlogSolid size={20} />
                </Link>
            </div>
            <Markdown key={slug} className="w-full mt-4">
                {content}
            </Markdown>
        </article>
    );
};

export default Post;
