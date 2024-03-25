import { Link } from "react-router-dom"
import { Appbar } from "./Appbar"
import { Dropdown } from "flowbite-react";
import { Userblogs } from "../pages/Userblogs";
export const Myblogs=()=>{
    return <div>
        <Appbar/>
        <div className="mx-36 mt-16 max-w-screen-sm">
            <div className="mx-12 h-max max-w-screen-sm">
                <div className="px-4 flex justify-between w-full">
                    <div className="flex font-semibold text-5xl">
                        Your blogs
                    </div>
                    <div>
                        <Link to={'/publish'}>
                            <button type="button" className=" mr-4 text-white bg-green-700
                            hover:bg-green-800 focus:outline-none focus:ring-4
                            focus:ring-green-300 font-medium rounded-full text-sm
                            px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600
                            dark:hover:bg-green-700
                            dark:focus:ring-green-800">Write a blog</button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between mt-12">
                    <div className="text-md font-normal pl-5">
                        <Userblogs/>
                    </div>
                    <div className="pr-5">
                        <ManageBlog/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
function ManageBlog(){
    return <div>
        <Dropdown dismissOnClick={false} renderTrigger={() => <div>
                <svg className="hover:cursor-pointer w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </div>}>
            <Dropdown.Item>Edit blog</Dropdown.Item>
            <Dropdown.Item>Delete blog</Dropdown.Item>
        </Dropdown>
    </div>
}