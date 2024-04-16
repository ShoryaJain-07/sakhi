import React from "react";
import { blogItems } from "../../constants";
import { videos } from "../../constants";

const Blogs = () => {
  return (
    <div className="w-full mb-20">
      <div className="flex">
        <div className="w-1/2">
          <div className="w-full text-6xl font-bold text-center my-10 text-red-400">
            Blogs
          </div>
          <div className="w-full flex flex-col items-center">
            {blogItems.map((item) => (
              <div className="w-[70%] p-2 text-start rounded-xl bg-red-100 mb-8">
                <div className="w-full text-2xl font-bold p-2 text-red-400">
                  {item.title}
                </div>
                <div className="w-full text-lg p-2">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full text-6xl font-bold text-center my-10 text-red-400">
            Videos
          </div>
          <div className="w-full flex flex-col items-center">
            {videos.map((item) => (
              <div className="w-[70%] p-2 text-start rounded-xl bg-red-100 mb-8 h-80">
                <video controls controlsList="nodownload" src={item.link} className="w-[100%] rounded-lg"></video>
                <div className="mt-3 font-bold text-lg">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
