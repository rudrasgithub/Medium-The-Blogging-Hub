import { Appbar } from "./Appbar"
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