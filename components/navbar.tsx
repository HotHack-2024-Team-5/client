import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="pt-10 bg-[#3e5e56] flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src="/mod_team_5.png"
          alt="Team 5 Logo"
          className="h-[9rem] w-[9rem] mb-4"
        />
        <Link
          href="/"
          className="text-white font-bold py-2 px-4 rounded mb-12 mr-4 text-2xl"
        >
          Client
        </Link>
        <Link
          href="/dashboard"
          className="text-white font-bold py-2 px-4 rounded mb-12 text-2xl"
        >
          Employee
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
