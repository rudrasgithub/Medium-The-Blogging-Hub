import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { Dropdown } from "flowbite-react";

export const Appbar=()=>{
    return <div className="border-b flex justify-between px-10 py-4">
        <div>
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-semibold">
                    Medium
            </Link>
        </div>
        <div className="flex justify-between">
            <div className="flex justify-center flex-col">
                <Link to={'/publish'}>
                    <button type="button" className=" mr-4 text-white bg-green-700
                    hover:bg-green-800 focus:outline-none focus:ring-4
                    focus:ring-green-300 font-medium rounded-full text-sm
                    px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600
                    dark:hover:bg-green-700
                    dark:focus:ring-green-800">New</button>
                </Link>
            </div>
            <div className="flex justify-center flex-col">
                <Dropdown label="Dropdown" dismissOnClick={true} renderTrigger={() => <div className="hover:cursor-pointer"><Avatar name="Rudra"/></div>}>
                    <Dropdown.Item><Link to={'/myblogs'}>My Blogs</Link></Dropdown.Item>
                    <Dropdown.Item><Link onClick={()=>{
                        localStorage.clear();
                    }}to={'/signin'}>Sign out</Link></Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    </div>
}