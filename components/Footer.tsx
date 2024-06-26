import { FOOTER_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        // This is the footer component that will be displayed at the bottom of the page of every page of the website.
        // This displays the company logo and links to other pages on the bottom sticky footer.
        <div className="flex max-container padding-container bg-ablue px-2 sticky bottom-0 z-30 py-2 bg-ablue">
            <ul className=" flex w-full gap-[30%] px-[10%]">
                {/* List of taken from contants/index.ts*/}
            {FOOTER_LINKS.map((link) => (
                <Link href={link.href} key={link.key}>
                    <figure>
                    <Image src={link.src} alt={link.key} width={50} height={50}/>
                    <figcaption style={{ color: 'white' }}>{link.key}</figcaption>
                    </figure>
                </Link>
            ))}
            </ul>
        </div>

      
    )
  }
  
  export default Footer