import { signIn } from "@/auth";
import GithubLogo from "@/assets/github.svg";
import MenuItem from "@/components/MenuItem";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button className="hover:bg-background__variant--light" type="submit">
        <MenuItem imageSrc={GithubLogo} title="Sign in" />
      </button>
    </form>
  );
}
