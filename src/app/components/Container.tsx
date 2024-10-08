export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="container dark:bg-darkbackground text-lighttext dark:text-darktext mx-2 sm:mx-auto my-2 sm:my-10 p-4">
            {children}
        </div>
    );
}
