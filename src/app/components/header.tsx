import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-center space-x-4">
        <Link href="/">
          <div className="hover:underline"> Home</div>
        </Link>
        <Link href="/about">
          <div className="hover:underline">About</div>
        </Link>
        <Link href="/contact">
          <div className="hover:underline">Contact</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
