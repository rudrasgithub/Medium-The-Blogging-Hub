import { useParams } from "react-router-dom";
import { useUserBlogs } from "../hooks"

export const Userblogs=()=>{
    const {id}=useParams();
    console.log(id)
    const {loading,userblogs}=useUserBlogs({
        id: id || "2"
    });
    if(loading || !userblogs){
        return <div>
            loading...
        </div>
    }
    console.log(userblogs);

    return <div>
        {userblogs.map(blog=><UserBlogsList
                title={blog.title}
                content={blog.content}
                publishedDate={"25th March 2024"} 
            /> 
        )}
    </div>
}
interface UserBlogTypes{
    title:string;
    content:string;
    publishedDate:string;
}

function UserBlogsList({
    title,
    content,
    publishedDate
}:UserBlogTypes){
    return <div>
        <div className="text-2xl font-semibold">
            {title}
        </div>
        <div className="text-lg font-light">
            {content}
        </div>
        <div className="text-md font-thin">
                {content.slice(0,100)+"..."}
        </div>
        <div className="">
            {publishedDate}
        </div>
        <div className="pt-4 text-sm font-thin text-slate-500">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
    </div>
}