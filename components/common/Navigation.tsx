"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 bg-white shadow">
      <Link 
        href="/" 
        className={`nav-link ${pathname === '/' ? 'text-blue-600 font-bold' : ''}`}
      >
        Home
      </Link>
      <Link 
        href="/dashboard" 
        className={`nav-link ${pathname === '/dashboard' ? 'text-blue-600 font-bold' : ''}`}
      >
        Dashboard
      </Link>
      <Link 
        href="/editor" 
        className={`nav-link ${pathname === '/editor' ? 'text-blue-600 font-bold' : ''}`}
      >
        Editor
      </Link>
    </nav>
  );
};

export default Navigation;
