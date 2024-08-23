import { Link } from "react-router-dom"
import { Appbar } from "./Appbar"
import { Dropdown } from "flowbite-react";
import { Userblogs } from "../pages/Userblogs";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Myblogs=()=>{
    return <div>
        <Appbar/>
        <div className="mx-36 mt-16 max-w-screen-sm">
            <div className="mx-12 h-max max-w-screen-sm">
                <div className="px-4 flex justify-between w-full">
                    <div className="flex font-semibold text-5xl">
                        Your blogs
                    </div>
                </div>
                <div className="flex justify-between mt-12">
                    <div className="text-md font-normal pl-5">
                        <Userblogs/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export function ManageBlog(){
    return <div>
        <Dropdown 
            dismissOnClick={false} renderTrigger={() =>
            <div>
                <svg className="hover:cursor-pointer w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </div>
            }
        >
            <Dropdown.Item className="text-red-600" onClick={DeleteBlog}>Delete blog</Dropdown.Item>
        </Dropdown>
    </div>
}
function DeleteBlog(){
    async function deleteNow(){
        await axios.delete(`${BACKEND_URL}/api/v1/blog/1`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
    }
    deleteNow()
}