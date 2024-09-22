import Image from "next/image";
export default function Header() {
    return (
        <header className="transparent p-4 mx-auto my-10 max-w-screen-sm flex justify-center">
            <Image
                src="/logo.png"
                alt="logo"
                height="20"
                width="50" />
        </header>
    );
}