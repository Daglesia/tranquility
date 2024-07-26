import MenuItem from "@/components/MenuItem";
import User from "@/assets/user.svg";
import Logo from "@/assets/daglesium.svg";
import { auth } from "@/auth";

export default async function HomeNavigationDrawer() {
  const currentUser = (await auth())?.user?.name ?? "";

  return (
    <div className="flex flex-col gap-6 p-6">
      <MenuItem title={currentUser} label={"logged as"} imageSrc={User} />
      <hr className="border-2 border-primary rounded-3xl" />
      <div className="absolute left-6 bottom-6">
        <MenuItem title={"Daglesia"} label={"created by"} imageSrc={Logo} />
      </div>
    </div>
  );
}
