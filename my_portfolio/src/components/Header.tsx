import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex absolute top-[1.5em] left-[8em]">
            <nav className="flex items-end">
                <Link href="/" className={`cursor-pointer hover:scale-125 transition duration-600 hover:bg-red-700 w-[5em] h-[2em] flex bg-gray-500 items-center justify-center`}>
                        Home
                </Link>
                <Link href="/Profile" className={`cursor-pointer hover:scale-125 transition duration-600 hover:bg-red-700 w-[5em] h-[2em] flex bg-gray-500 items-center justify-center`}>
                        Profile
                </Link>
                <Link href="/Projects" className={`cursor-pointer hover:scale-125 transition duration-600 hover:bg-red-700 w-[5em] h-[2em] flex bg-gray-500 items-center justify-center`}>
                        Projects
                </Link>
                <Link href="/Contact" className={`cursor-pointer hover:scale-125 transition duration-600 hover:bg-red-700 w-[5em] h-[2em] flex bg-gray-500 items-center justify-center`}>
                        Contact
                </Link>
            </nav>
        </header>
    );
}