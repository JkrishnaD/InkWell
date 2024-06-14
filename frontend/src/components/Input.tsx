import { ChangeEvent, useState } from "react"
import { signUpType } from "@jaya5063/inkwell-common/dist/zod"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export function Login({ type }: { type: "signin" | "signup" }) {
    const [postInputs, setPostInputs] = useState<signUpType>({
        name: "",
        password: "",
        email: ""
    });
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user${type === "signin" ? "/signin" : "/signup"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch (error: any) {
            if (error.response) {
                setError(error.response.data)
            } else {
                setError("Something Went Wrong")
            }
            alert("Invalid User!!")
            return <div>
                <p className="text-red-500 font-bold text-center mb-2">{error}</p>
            </div>
        }
    }

    return <div className="flex justify-center h-screen items-center">
        <div className="flex justify-center flex-col">
            <div>
                <div className="font-bold text-2xl flex justify-center">
                    {type === "signin" ? "Login" : "Create An Account"}
                </div>
                <div className="text-slate-400 w-fit">
                    {type === "signin" ? "Create New Account" : "Already Have An Account"}
                    <Link to={type === "signin" ? "/signup" : "/signin"} className="px-1 underline">{type === "signin" ? "signup" : "signin"}</Link>
                </div>
            </div>
            <div className="w-full max-w-md">
                {type === "signup" ? <Inputs label="UserName" placeholder="Enter Your Name" onchange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}
                <Inputs label="Email" placeholder="your@email.com" onchange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} /><Inputs label="Password" placeholder="Password" type="password" onchange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                {error && (
                    <p className="text-red-500 font-bold text-center mb-2">{error}</p>
                )}{" "}
            </div>
            <div>
                <button onClick={sendRequest} type="button" className="w-full mt-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-black dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>

            </div>
        </div>
    </div>
}

interface inputs {
    label: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function Inputs({ label, placeholder, onchange, type }: inputs) {
    return <div>
        <div>
            <label className="block mb-1 pt-3 text-lg font-bold text-gray-900">{label}</label>
            <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-slate-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    </div>
}