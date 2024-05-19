import Logo from "@/assets/daglesium.svg";
import MenuItem from "@/components/MenuItem";
import Button from "@/components/Button";
import CloudCluster from "@/components/CloudCluster";
import { SignIn } from "@/components/SignIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="absolute h-full w-full">
        <CloudCluster />
      </div>
      <div className="z-10 w-full">
        <div className="absolute left-12 top-12">
          <MenuItem title={"Daglesia"} label={"created by"} imageSrc={Logo} />
        </div>
        <div className="pl-24 pt-64 ml-4">
          <div className="flex flex-col gap-2 w-fit">
            <h1 className="text-h1 font-extrabold tracking-tighter">It’s time to stop the mundane.<br />
              Let’s automate it together.</h1>
            <h2 className="text-h2 font-normal">Monitor and automate daily chores.<br />
              Completely <span className="bg-gradient-to-r from-primary via-secondary__variant-dark to-secondary inline-block text-transparent bg-clip-text animate-gradient bg-300%">free</span>.</h2>
            <div className="w-fit self-center mt-14 flex flex-col gap-2">
              <Button text={"Check it out!"} />
              <p className="text-p text-secondary text-center font-extrabold">No registration needed!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
