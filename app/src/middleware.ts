import { auth } from "@/auth"

export default auth(async (req) => {
    //todo redirect
    console.log(req.auth, process.env);
})