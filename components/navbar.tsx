import Link from 'next/link';
const Navigation = () => {
  return (
    <nav className="mt-6">
      <Link href="/" className="bg-[#BC6C25] text-white font-bold py-2 px-4 rounded mb-12 mr-4 text-2xl">Client</Link>
      <Link href="/dashboard" className="bg-[#BC6C25] text-white font-bold py-2 px-4 rounded mb-12 text-2xl">Employee</Link>
    </nav>
  );
};
export default Navigation;