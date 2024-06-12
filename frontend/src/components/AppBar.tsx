import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Appbar() {
    return <div className="flex border-b justify-between px-10 py-4 bg-slate-400 " >
        <Link to={'/blogs'} className="font-bold text-white text-2xl flex justify-center flex-col">InkWell</Link>
        <div className="flex justify-center flex-row">
            <Link to={'/publish'}>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Publish </button>
            </Link>
            <Logout/>
        </div>
    </div>
}