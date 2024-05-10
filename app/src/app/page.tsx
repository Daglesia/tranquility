import Image from "next/image";
import Logo from "@/assets/daglesium.svg";
import MenuItem from "@/components/MenuItem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full">
        <div className="absolute left-12 top-12">
          <MenuItem title={"Daglesia"} label={"created by"} imageSrc={Logo} />
        </div>
        <div className="pl-24 pt-64 ml-4">
          <div className="flex flex-col gap-2">
          <h1 className="text-h1 font-extrabold tracking-tighter">It’s time to stop the mundane.<br />
Let’s automate it together.</h1>
<h2 className="text-h2 font-normal">Monitor and automate daily chores.<br />
Completely <span className="bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">free</span>.</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
