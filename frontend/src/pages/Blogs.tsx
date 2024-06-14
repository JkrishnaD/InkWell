import { Appbar } from "../components/AppBar";
import { BlogRender } from "../components/blogRender";
import { BlogSkeleton } from "../components/blogSkeleton";
import { useBlogs } from "../hooks";

export function Blogs() {
    const { loading, blogs } = useBlogs();
    if (loading || !blogs) {
        return <div>
            <Appbar />
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
            <div className="flex justify-center max-w-screen-xl">
                {blogs.map(blog => <BlogRender
                    id={blog.id}
                    authurName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    date="DD/MM/YYYY" />)}
            </div>
        </div>
    </div>
}