import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-10 pt-12 max-w-screen-xl">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">{blog.title}</div>
                <div className="text-slate-500 pt-2">
                    Posted on 2nd March, 2024
                </div>
                <div className="pt-4 text-xl font-normal">{blog.content}</div>
            </div>
            <div className="col-span-4">
                <div className="text-slate-600 text-lg">
                    Author
                </div>
                <div className="flex">
                    <div className="flex justify-center flex-col">
                        <Avatar name={blog.author.name || "Anonymous"}/>
                    </div>
                    <div className="pl-4">
                        <div className="font-bold text-lg">
                            {blog.author.name || "Rudra"}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Random catch phrase about the author's ability to grab the user's attention
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
