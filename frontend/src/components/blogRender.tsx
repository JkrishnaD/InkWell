import { Blog } from "../hooks"
import { Appbar } from "./AppBar"
import { Avatar } from "./blogsRender"

export const BlogRender = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-xs bg-gray-300 rounded-xl w-fit p-2 mt-2">
                        {Math.ceil(blog.content.length / 600)} min read
                    </div>
                    <div className="pt-4 mt-2">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex justify-center text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full mt-1">
                        <div className="pr-4 ">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}