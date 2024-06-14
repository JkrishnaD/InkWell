import { useNavigate } from "react-router-dom"

export function Logout() {
    const navigate = useNavigate();
    
    async function logout() {
        navigate("/signin");
    }

    return <div>
        <button type="button" onClick={logout} className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Logout</button>
    </div>
}