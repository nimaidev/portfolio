import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-app-purple text-base-content rounded font-handlee">
      <div className="grid grid-flow-col gap-4">
        <p className="text-3xl font-bold">
          {" "}
          Lets connect for not so better cause. 🤟
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="#">
            <Image
              src="/twitter.png"
              height={25}
              width={25}
              objectFit="cover"
              layout="fixed"
              alt="Twitter"
            />
          </a>
          <a href="#">
            <Image
              src="/dev-black.png"
              height={25}
              width={25}
              objectFit="cover"
              alt="Dev.to"
            />
          </a>
          <a href="#">
            <Image
              src="/insta.png"
              height={25}
              width={25}
              objectFit="cover"
              alt="Instagram"
            />
          </a>
          <a href="#">
            <Image
              src="/discord.png"
              height={32}
              width={32}
              objectFit="cover"
              alt="Discord"
            />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - Proudly Ctrl+C & Ctrl+V by Chintu</p>
      </div>
    </footer>
  );
}
