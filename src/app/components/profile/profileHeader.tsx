import { user } from "~/types/types";
import Image from "next/image";
import PersonalList from "~/app/components/profile/personalLists";

type Props = {
  user: user;
};

export default function ProfileHeader({ user }: Props) {
  return (
    <div className="max-w-4xl">
      <div className="m-10 border">
        <div className="relative">
          <div className="h-[170px] w-[600px]">
            <Image
              src="/pixel_art_outer_space.jpg"
              alt="banner pixel art outer space image made by erikaducharme on deviantart"
              fill
              className=""
            />
          </div>
          <div className="absolute -bottom-16 left-9">
            <img
              src={user.image!}
              alt="user profile picture"
              className="h-1/3 w-1/3 border-2 border-black shadow-xl"
            />
          </div>
        </div>
        <div className="m-24"></div>
        <div className="ml-10">
          <div>
            <h1 className="text-xl font-bold">{user.userName}</h1>
          </div>
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div className="divider"></div>
        <PersonalList user={user} />
      </div>
    </div>
  );
}
