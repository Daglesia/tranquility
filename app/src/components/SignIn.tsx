import { signIn } from "@/auth"
import GithubLogo from "@/assets/github.svg";
import MenuItem from "@/components/MenuItem";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit"><MenuItem imageSrc={GithubLogo} title="Sign in" /></button>
    </form>
  )
} 