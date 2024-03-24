import { Link } from "react-router-dom";

interface BlogCardTypes{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:number;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardTypes) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md">
            <div className="flex">
                <Avatar name={authorName}/>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Dot/>
                </div>
                <div className="pl-2 font-thin text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100)+"..."}
            </div>
            <div className="pt-4 text-sm font-thin text-slate-500">
                {`${Math.ceil(content.length/100)} minute(s) read`}
            </div>
        </div>
    </Link>
}
export function Dot(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">
        
    </div>
}
export function Avatar({name}:{name:string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-500">
        <span className="text-md font-extralight text-white-600 dark:text-white-300">{name[0]}</span>
    </div>
}