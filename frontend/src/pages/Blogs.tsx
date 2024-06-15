import { useEffect } from "react";
import { Appbar } from "../components/AppBar";
import { BlogSkeleton } from "../components/blogSkeleton";
import { BlogsRender } from "../components/blogsRender";
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";

export function Blogs() {
    const { loading, blogs } = useBlogs();
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/signin")
        }
    },[])
    function getRandomDate(): string {
        const startDate: number = new Date("2024-01-01").getTime();
        const endDate: number = new Date("2024-06-14").getTime();

        const randomTimestamp: number =
            Math.floor(Math.random() * (endDate - startDate + 1)) + startDate;

        const date: Date = new Date(randomTimestamp);
        const options: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "2-digit",
            year: "numeric",
        };
        const formattedDate: string = date.toLocaleDateString("en-US", options);

        return formattedDate;
    }
    if (loading || !blogs) {
        return <div>
            <Appbar/>
            <div className="flex justify-center w-screen">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="flex items-center flex-col ">
                {blogs.map(blog => <BlogsRender
                    id={blog.id}
                    authurName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    date={getRandomDate()} />)}
            </div>
        </div>
    </div>
}