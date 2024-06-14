import { useState } from "react";
import { Appbar } from "../components/AppBar";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Publish() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()
    return <div>
        <Appbar />
        <div className="flex justify-center w-full">
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => setTitle(e.target.value)} placeholder="Title..." id="large-input" className="w-full font-bold p-2 h-20 mt-2 text-gray-900 rounded-lg bg-gray-50 text-3xl  focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                <div className="w-full mb-4 rounded-lg bg-gray-50 focus:border-blue-500 ">
                    <div className="py-2 bg-white rounded-t-lg ">
                        <textarea onChange={(e) => setDescription(e.target.value)} id="comment" rows={8} className="focus:outline-none w-full p-2 px-0 text-base  bg-gray-50" placeholder="Add Your Story...." required ></textarea>
                    </div>
                </div>
                <button onClick={async () => {
                    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title, content: description
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${res.data.id}`)
                }} type="submit" className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">
                    Post
                </button>
            </div>
        </div>
    </div>
}