
import { Appbar } from "../components/AppBar";
import { BlogRender } from "../components/blogRender";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";

export const Blog = () => {
    
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    
                </div>
            </div>
        </div>
    }
    return <div>
        <BlogRender blog={blog} />
    </div>
}
