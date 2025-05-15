import { fetchAuthSession, signIn, signOut } from "aws-amplify/auth";
import { getErrorMessage } from "../auth/get-error-message";

export async function handleSignInAdmin(formData: FormData) {
  try {
    await signIn({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
    });

    const { tokens } = await fetchAuthSession();
    if (tokens) {
      const groups = tokens.accessToken.payload["cognito:groups"];
      // @ts-ignore aws recognize
      const isAdmin = Boolean(groups && groups.includes("Admins"));

      if (isAdmin) {
        return "isAdmin";
      }
      return "none";
    }
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    return getErrorMessage(error);
  }
  window.location.href = "/";
}
