import profileImage from "../asset/avtar.png";
import Image from "next/image";
import { ProfileData } from "../model/app-models";
import { useEffect, useState } from "react";
export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  //get the data from public/data/profile.json
  useEffect(() => {
    fetch("/data/profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          name: data.name,
          bio: data.bio,
        });
        console.log(data);
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);
  return (
    <>
      {/* <Quotes /> */}
      {/* <Stats/> */}
      <div className="hero md:-mt-20  font-handlee">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={profileImage}
            width={400}
            height={400}
            alt="Picture of the author"
          />
          <div>
            <p className="py-6 dark:text-slate-300 font-firacode">
              {profile?.bio}
            </p>
            <button className="btn bg-app-purple">Subscribe Email 📩</button>
          </div>
        </div>
      </div>
    </>
  );
}
