import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="p-4 mx-auto mb-10 mt-10 xl:mt-28 max-w-md flex justify-cente"
        src="/pegc.png"
        alt="PIEAS E-Gaming Club"
        width="1280"
        height="720"
      />

      <h1 className="flex font-semibold text-xl tracking-wider mx-auto justify-center">Where Gamers Unite and Legends Are Made</h1>
    </div>
  );
}
