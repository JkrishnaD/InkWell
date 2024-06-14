import { Link } from "react-router-dom";

interface BlogProps {
    authurName: string,
    title: string,
    content: string,
    date: string
    id: string
}

export function BlogsRender({ authurName, title, content, date, id }: BlogProps) {
    return <Link to={`/blog/${id}`} className="w-1/2">
        <div className="border-b w-fit border-slate-300 p-3 flex flex-col justify-center mt-8 px-2">
            <div className="flex pb-1">
                <div className="flex justify-center flex-col">
                    <Avatar size={"small"} name={authurName} />
                </div>
                <div className="font-normal pl-2 ">
                    {authurName}
                </div>
                <div className="font-extralight pl-2"> : {date}</div>
            </div>
            <div className="flex justify-center flex-col">
                <div className="font-bold text-2xl">
                    {title}
                </div>
                <div className=" flex   font-medium font-serif pb-4 w-1/2">
                    {content.length > 190 ? content.slice(0, 190) + "..." : content}
                </div>
                <div className="text-xs bg-gray-300 rounded-xl w-fit p-2">
                    {Math.ceil(content.length / 600)} min read
                </div>
            </div>
        </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string; size: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-8 h-8" : "w-10 h-10"}overflow-hidden bg-gray-100 rounded-full dark:bg-black p-1`}>
        <span className={`${size === "small" ? "text-sm" : "text-xl"} font-medium text-white dark:text-white}`}>{name[0]}</span>
    </div>
}