export function BlogSkeleton() {
    return <div>
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-4.5 bg-gray-200 rounded-full dark:bg-gray-500 w-38 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}