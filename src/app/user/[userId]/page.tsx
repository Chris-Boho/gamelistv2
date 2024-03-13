import { getCurrentUser } from "~/server/session";
import { useSession } from "next-auth/react";
import ProfileHeader from "~/app/components/profile/profileHeader";

import { db } from "~/server/db";

type Props = {};

export default async function UserPage({}: Props) {
  const user = await getCurrentUser();
  const fullUser = await db.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (fullUser) {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <ProfileHeader user={fullUser} />
          </div>
        </div>
      </>
    );
  }
}
