import {
  FiHome,
  FiMessageSquare,
  FiFileText,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[250px] h-screen bg-zinc-900 border-r border-zinc-800 p-6">

      <div className="flex items-center gap-3 mb-10">
  <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold">
    Q
  </div>

  <h1 className="text-3xl font-bold text-white">
    QueryHive
  </h1>
</div>
<div className="flex flex-col gap-5">
  {/* all links here */}

      <Link
  to="/dashboard"
  className="flex items-center gap-3 bg-violet-600/20 text-violet-400 px-3 py-2 rounded-lg"
>
  <FiHome />
  Dashboard
</Link>

  <Link
  to="/dashboard"
  className="flex items-center gap-3 text-zinc-300 hover:text-white"
>
  <FiMessageSquare />
  Chats
</Link>

<Link
  to="/dashboard"
  className="flex items-center gap-3 text-zinc-300 hover:text-white"
>
  <FiFileText />
  Documents
</Link>

<Link
  to="/dashboard"
  className="flex items-center gap-3 text-zinc-300 hover:text-white"
>
  <FiBarChart2 />
  Analytics
</Link>

<Link
  to="/dashboard"
  className="flex items-center gap-3 text-zinc-300 hover:text-white"
>
  <FiSettings />
  Settings
</Link>

  <div className="mt-auto">
    <Link
      to="/dashboard"
      className="flex items-center gap-3 text-zinc-300 hover:text-white"
    >
      <FiHelpCircle />
      Help
    </Link>
    </div>
  </div>
</div>
  );
}