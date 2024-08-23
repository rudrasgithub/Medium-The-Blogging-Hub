import { SignUpInput } from "@rudrasnpm/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth=({type}:{type:"signup" | "signin"})=>{
    const navigate=useNavigate();
    const [postInputs,setPostInputs]=useState<SignUpInput>({
        name:"",
        email:"",
        password:""
    });
    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?'signup':"signin"}`,postInputs);
            const jwt=await response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        }catch(e){
            alert("Failed to send request. Please try again later.");
            console.error("Request failed.",e);
        }
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold ">
                        Create an Account
                    </div>
                    <div className="text-slate-500">
                        {type==="signup"?"Already have an account?":"Don't have an account?"}
                        <Link to={type==="signup"?'/signin':'/signup'} className="underline pl-2">{type==="signup"?"Sign In":"Sign Up"}</Link>
                    </div>
                    
                </div>
                <div className="pt-8">
                    {type==="signup"?<LabelledInput label="Name" placeholder="Pasupuleti Rudrama Naidu..." onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            name:e.target.value
                        }))
                    }}/>:null}
                    <LabelledInput label="Username" placeholder="rudramanaidu99@gmail.com" onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            email:e.target.value
                        }))
                    }}/>
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            password:e.target.value
                        }))
                    }}/>
                </div>
                <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                 focus:ring-gray-300 font-medium rounded-lg text-sm mt-8 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                  dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type==="signup"?"Sign Up":"Sign In"}</button>
            </div>      
        </div>
    </div>
}
interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?: string;
}
function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
    return <div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-black pt-2">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder} required />
        </div>
    </div>
}