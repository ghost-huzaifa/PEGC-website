import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className=" ">
      <Image
        className="mx-auto justify-center flex p-4 mb-10 mt-10 xl:mt-28 max-w-sm xl:max-w-md  "
        src="/pegc.png"
        alt="PIEAS E-Gaming Club"
        width="1280"
        height="720"
      />

      <h1 className="mx-auto justify-center flex font-semibold text-lg xl:text-xl tracking-wider">Where Gamers Unite and Legends Are Made</h1>
      <Button variant="destructive" className="mx-auto text-lg font-medium justify-center max-w-20 flex mt-10 px-16 py-7" asChild>
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">JOIN US</Link>
      </Button>

    </div>
  );
}
