export default function SideNav() {
  return (
    <>
      <div className="p-4 font-handlee">
  <div>
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 rounded-full bg-app-purple"></div>
      <div className="text-xl">Quick Links 🔗</div>
    </div>
    <div className="-mb-3 ml-2.5 mt-1.5 h-7 w-4 rounded-bl-lg border-l-2 border-b-2"></div>
  </div>
  <ul className="ml-8 space-y-5">
    <li className="flex items-center gap-2">
      <div className="h-5 w-5 rounded bg-app-yellow"></div>
      <a href="#"><span className="text-xl">GitHub 🧫</span></a>
    </li>
    <li className="flex items-center gap-2 border-r-2">
      <div className="h-5 w-5 rounded bg-app-yellow"></div>
      <a href="#"><span className="text-xl">Tech Blogs ✍️</span></a>
    </li>
    <li className="flex items-center gap-2">
      <div className="h-5 w-5 rounded bg-app-yellow"></div>
      <a href="#"><span className="text-xl">Twitter 🕊️</span></a>
    </li>
  </ul>
</div>
    </>
  );
}
