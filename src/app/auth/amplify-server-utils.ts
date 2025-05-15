import { createServerRunner, NextServer } from "@aws-amplify/adapter-nextjs";

import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth/server";
import { authConfig } from "../lib/awsAmplifyCognito";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: authConfig,
  },
});

export async function authenticatedUser(context: NextServer.Context) {
  return await runWithAmplifyServerContext({
    nextServerContext: context,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);

        if (!session.tokens) {
          console.log("No session tokens found.");
          return;
        }

        const user = {
          ...(await getCurrentUser(contextSpec)),
          isAdmin: false,
        };
        const groups = session.tokens.accessToken.payload["cognito:groups"];
        // @ts-ignore aws recognize
        user.isAdmin = Boolean(groups && groups.includes("Admins"));

        return user;
      } catch (error) {
        console.log(error);
      }
    },
  });
}
