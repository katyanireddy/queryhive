export default function Navbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="h-[80px] border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">
      
      <h2 className="text-white text-2xl font-semibold">
        Dashboard
      </h2>

      <div className="text-zinc-300">
        {user?.name}
      </div>
    </div>
  );
}