import { useParams } from "react-router-dom";
import { Appbar } from "../components/AppBar";
import { useBlog } from "../hooks";
import { BlogSkeleton } from "../components/blogSkeleton";

export function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <Appbar />
        <div>
            <Blog/>
        </div>
    </div>
}