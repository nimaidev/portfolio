import Image from "next/image";
import backgroundImage from '../asset/bg.png'
export default function Background() {
    return(
        <>
            <div>
            <Image
            src={backgroundImage}
            width={400}
            height={400}
            alt="Picture of the author"
          />
            </div>
        </>
    )
}