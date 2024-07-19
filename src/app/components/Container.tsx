export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="container mx-2 sm:mx-auto my-2 sm:my-10 p-4 border border-solid border-secondary border-4 border-dashed rounded-3xl">{children}</div>;
}