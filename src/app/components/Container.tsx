export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="container bg-background dark:bg-[#281a0c] mx-2 sm:mx-auto my-2 sm:my-10 p-4 border border-solid border-primary border-2 border-dashed rounded-xl">{children}</div>;
}
