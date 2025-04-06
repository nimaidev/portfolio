import Link from "next/link";

export default function ActiveProject() {
    return <div className="w-[50%]">
        <div>
        <p className="text-2xl text-black dark:text-app-white font-firacode">Active Projects <Link className="text-sm text-app-primary dark:text-app-teal" href="/blogs">All Projects-{">"}</Link></p>
        <p className="text-sm text-gray-500">My part-time experiments.</p>
      </div>
    </div>
}