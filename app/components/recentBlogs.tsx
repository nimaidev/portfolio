"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { BlogRepo } from "../model/app-models";
import Link from "next/link";
export default function RecentBlogs() {

  const [blogData, setBlogData] = useState<BlogRepo[]>([]);

  useEffect(() => {
    //declare a method
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=nimaidev");
        const data = await response.json();
        const sortedData = data.sort((a: { published_timestamp: string }, b: { published_timestamp: string }) => 
          new Date(b.published_timestamp).getTime() - new Date(a.published_timestamp).getTime()
        ).slice(0,5);
        setBlogData(sortedData);
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    };
    fetchBlogs();
  }, []);

  // sort the blogData

  return <>
    <div className="w-[50%]">
      <div>
        <p className="text-2xl text-black dark:text-app-white font-firacode">Recent Blogs  <Link className="text-sm text-app-primary dark:text-app-teal" href="/blogs">Full Archive-{">"}</Link></p>
        <p className="text-sm text-gray-500">Things I have written recently.</p>
      </div>
      <div className="mt-3 font-firacode">
      {blogData.map(blog => {return(
        <div className="m-2" key={blog.url}>
          <li className="text-md font-bold">{new Date(blog.published_timestamp).toISOString().split("T")[0]}</li>
            <a className="text-[17px] text-app-primary dark:text-app-teal italic underline" href={blog.url}>{blog.title}</a>
        </div>
      )})}
      </div>
    </div>
  </>
}
