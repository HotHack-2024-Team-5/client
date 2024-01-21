import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="pt-10 bg-[#2F3E46] flex flex-row items-center p-4">
      <div className="flex items-center justify-center mb-4">
        <img
          src="/mod_team_5.png"
          alt="Team 5 Logo"
          className="h-[9rem] w-[9rem]"
        />
      </div>
      <div className="px-10">
        <Link href="/" className="text-white font-bold px-4 text-2xl">
          Client
        </Link>
        <Link
          href="/dashboard"
          className="text-white font-bold py-2 px-4 rounded text-2xl"
        >
          Employee
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
