import { Claims, getSession } from "@auth0/nextjs-auth0";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";

export const getUserProfileData = async ({
    isServer
}: {
    isServer: boolean
}): Promise<Claims | UserProfile> => {

    if (isServer) {
        const session = await getSession();
        if (!session) {
            throw new Error(`Requires authentication`);
        }
        const { user } = session;
        console.log(user)
        return user;
    } else {
        const { user } = useUser()
        if (!user) {
            throw new Error(`Requires authentication`);
        }
        return user
    }

};