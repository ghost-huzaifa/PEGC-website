import Image from 'next/image';

export default function Nav() {
    return (
        <nav className="transparent p-4 font-thin text-s mx-auto my-10 max-w-screen-sm">
            <ul className="flex items-center gap-x-6 justify-between">
                <li>Home</li>
                <li>About Us</li>
                <Image
                    src="/logo.png"
                    alt="logo"
                    height="20"
                    width="50" />
                <li>Tournaments</li>
                <li>Join Us</li>
            </ul>
        </nav>
    );
}