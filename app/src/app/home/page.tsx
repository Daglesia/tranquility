import Logo from "@/assets/daglesium.svg";
import MenuItem from "@/components/MenuItem";
import CloudCluster from "@/components/CloudCluster";
import { SignOut } from "@/components/SignOut";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      Temporary screen that indicates that user is logged in.
      <SignOut />
    </main>
  );
}
