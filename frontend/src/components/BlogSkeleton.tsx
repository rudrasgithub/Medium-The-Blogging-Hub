import { Dot } from "./BlogCard"

export const BlogSkeleton=()=>{
    return <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md">
            <div className="flex">
                <div className="h-4 w-48 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="flex justify-center flex-col pl-2">
                    <Dot/>
                </div>
                <div className="pl-2 font-thin text-sm flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="pt-4 text-sm font-thin text-slate-500">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}