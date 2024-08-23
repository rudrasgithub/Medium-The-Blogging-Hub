import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog=()=>{
    const {id}=useParams()
    const {loading,blog}=useBlog({
        id:id || ""
    });
    if(loading || !blog){
        return <div>
            <Appbar/>
            <div className="flex justify-center flex-col h-screen">
                <div className="flex justify-center">
                    <Spinner/>
                    <Spinner/>
                    <Spinner/>
                </div>
            </div>
            
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}