import dynamic from "next/dynamic";
import { Inter  } from "next/font/google";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import FadeInWhenVisible from "./components/animations/FadeInWhenVisible";
import TextAnimationToEntry from "./components/animations/TextAnimationToEntry";
import GetBlogPostMetadata from "./components/utils/GetBlogPostMetadata";
import { Metadata } from "./components/interfaces/Post";
import { LiaBlogSolid } from "react-icons/lia";
import Link from "next/link";

const TimeLine = dynamic(() => import("./components/TimeLine"));
const Skills = dynamic(() => import("./components/Skills"));
const OtherSkills = dynamic(() => import("./components/OtherSkills"));
const Projects = dynamic(() => import("./components/Projects"));
const SayHi = dynamic(() => import("./components/SayHi"));
const SayHiLink = dynamic(() => import("./components/SayHiLink"));

const stylish = Inter ({
    weight: "400",
    subsets: ["latin"],
});



export default async function Home() {
    const postMetadata: Metadata[] = await GetBlogPostMetadata();
    const postLinks =
        postMetadata &&
        postMetadata
        .sort((a , b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
        .slice(0, 3)
        .map((meta: Metadata) => (
            <li key={meta.slug} className="dottedBorder">
                <Link href={`/blog/posts/${meta.slug}`}><h2 className="text-xl font-bold">{meta.title}</h2></Link>
                <Link href={`/blog/posts/${meta.slug}`}><h3 className="text-lg font-normal text-lighttext dark:text-darktext truncate">{meta.subtitle}</h3></Link>
                <Link href={`/blog/posts/${meta.slug}`}><p className="text-sm font-normal text-lighttext dark:text-darktext">{meta.date}</p></Link>
            </li>
        ));

    return (
        <div className={stylish.className}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10">
                <div>
                    <FadeInWhenVisible delay={1.8}>
                        <h1>Full Stack Developer</h1>
                    </FadeInWhenVisible>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <FadeInWhenVisible delay={1.8}>
                        <h3>Since 2012</h3>
                        <a
                            href="./SubhraSekharMukherjeeResume.pdf"
                            download="SubhraSekharMukherjeeResume.pdf"
                            className="underline decoration-primary decoration-dotted underline-offset-2"
                        >
                            Download CV
                        </a>

                        <Link href="/blog" className="flex gap-2 text-primary items-center">
                            <LiaBlogSolid size={20} />
                            <span>My Blog</span>
                        </Link>
                    </FadeInWhenVisible>
                </div>
                <div className="md:flex md:flex-col md:items-end">
                    <FadeInWhenVisible delay={2.5}>
                        <ul>
                            {/* <li>
                                <a
                                    href="tel:+91 9674540974"
                                    className="flex items-center gap-2"
                                >
                                    {" "}
                                    <HiOutlinePhone size={20} /> +91
                                    9674 540 974
                                </a>
                            </li>*/}
                            <li>
                                <SayHiLink />
                            </li>
                            <li className="flex items-center gap-2 mt-1">
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=919674540974"
                                >
                                    <FaWhatsapp size={20} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/subhra-sekhar-mukherjee"
                                >
                                    <CiLinkedin size={20} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/qsekhar"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://discordapp.com/users/trozan7550/"
                                >
                                    <FaDiscord size={20} />
                                </a>
                            </li>
                        </ul>
                    </FadeInWhenVisible>
                </div>
                <div></div>
                <div className="col-span-2">
                    <span className="h1">
                        <TextAnimationToEntry delayOffset={0}>
                            Subhra Sekhar
                        </TextAnimationToEntry>
                    </span>
                </div>
                <div>
                    <span className="h1">
                        <TextAnimationToEntry delayOffset={1.2}>
                            Mukherjee
                        </TextAnimationToEntry>
                    </span>
                </div>

                <div></div>
                <div></div>
                <div></div>
                <div className="col-span-2">
                    <FadeInWhenVisible delay={2}>
                        <h3 className="my-4">Summary</h3>
                        <span className="text-lg text-justify indent-8">
                            Full Stack Developer with 12+ years in the game,
                            creating and dropping innovative software solutions.
                            I&lsquo;m all about teaming up with different squads
                            to deliver fire products that blow clients away.
                            I&lsquo;ve got mad skills in every part of the
                            software development cycle, from brainstorming and
                            design to testing and launching. I&lsquo;m solid in
                            both front-end and back-end tech and love using my
                            diverse skills to tackle tough challenges.
                        </span>
                    </FadeInWhenVisible>
                </div>
                <div></div>
                <div className="col-span-2 md:col-span-3">
                    <h3 className="my-4">
                        A small selection of my work, enjoy!
                    </h3>
                    <Projects />
                </div>
                <div className="col-span-2">
                    <Skills />
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col items-start align-middle justify-center">
                    <OtherSkills />
                </div>

                <div></div>
                <div className="col-span-2">
                    <TimeLine />
                </div>

                {/* <div className='col-span-2 md:col-span-3'>
        <Testimonials />
        </div> */}

                
                <div className="col-span-2 md:col-span-1">
                    <h3 className="my-4 mb-10">Some of my Articles</h3>
                    <ul className="flex flex-col gap-2">
                        {postLinks}
                    </ul>
                </div>

                <div className="col-span-2">
                    <SayHi />
                </div>

                
            </div>
        </div>
    );
}
