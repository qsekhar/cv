export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
            {children}
        </div>
    );
}
