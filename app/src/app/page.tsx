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
        <div className="absolute right-12 top-12">
          <SignIn />
        </div>
        <div className="pl-24 pt-64 ml-4">
          <div className="flex flex-col gap-2 w-fit">
            <h1 className="text-h1 font-extrabold tracking-tighter">Welcome to my domain.</h1>
            <h2 className="text-h2 font-normal">Here’s everything to suit my fancy.<br />
            Take a look, maybe <span className="bg-gradient-to-r from-primary via-secondary__variant-dark to-secondary inline-block text-transparent bg-clip-text animate-gradient bg-300%">yours</span> too.</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
