import profileImage from "../asset/avtar.png";
import Image from "next/image";
import Quotes from "./quote";
import Stats from "./stats";
export default function Hero() {
  return (
    <>
      <Quotes />
      <Stats/>
      <div className="hero md:-mt-20  font-handlee">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={profileImage}
            width={400}
            height={400}
            alt="Picture of the author"
          />
          <div>
            <h1 className="text-5xl font-bold text-app-purple">
              Hello Buddy ! 👋
            </h1>
            <p className="py-6 md:text-2xl text-xl">
              I am <span className="font-bold text-app-purple">Nimai</span> here. Welcome to another dumb-a*s
              portfolio,where you will be seeing unecessary url redirects, not
              so needed tech blogs, useless & time-waste tweet, un-necessary code
              snippets. 😜
            </p>
            <button className="btn bg-app-purple">Subscribe Email 📩</button>
          </div>
        </div>
      </div>
    </>
  );
}
