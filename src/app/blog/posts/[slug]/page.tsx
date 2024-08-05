import { NextPage } from "next";
import fs from "fs/promises";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import GetBlogPostMetadata from "../../../components/utils/GetBlogPostMetadata";
import { Metadata as Postmeta, Slug } from "../../../components/interfaces/Post";
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

    return content.replace(/---[\s\S]*?---/, "");
};

export async function generateStaticParams() {
    const postMetadata: Postmeta[] = await GetBlogPostMetadata();
    return postMetadata.map((meta: Postmeta) => ({ slug: meta.slug }));
}

const Post: NextPage<Props> = async (props: Props) => {
    const { slug } = props.params;
    const content = await getPostContent(slug);
    const postMetadata: Postmeta[] = await GetBlogPostMetadata();
    const otherLinks = postMetadata.filter(
        (meta: Postmeta) => meta.slug !== slug
    );
    const postLinks =
        otherLinks &&
        otherLinks.map((meta: Postmeta) => (
            <li key={meta.slug} className="smallBorderButtom">
                <Link href={`/blog/posts/${meta.slug}`}>
                    <h4 className="text-xl font-bold">{meta.title}</h4>
                </Link>
                
                <Link href={`/blog/posts/${meta.slug}`}>
                    <p className="text-sm font-normal text-lighttext dark:text-darktext">
                        {meta.date}
                    </p>
                </Link>
            </li>
        ));

    //
    return (
        <div>
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
            <div className="md:flex items-top gap-2 justify-between mt-4">
              <article className="prose dark:prose-invert lg:prose-xl w-full md:w-3/4">
                  <Markdown key={slug} className="mt-4">
                      {content}
                  </Markdown>
              </article>
              <ul className="flex flex-col gap-2 w-full md:w-1/4">
                {postLinks}
              </ul>
            </div>
            
        </div>
    );
};

export default Post;
