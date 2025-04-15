import Link from "next/link";
import "../../src/app/globals.css";

export default function Navbar() {
    const navLinks =[
        {name: "Menu", href: "/menu"},
        {name: "Blog", href: "/blog"},
        {name: "About", href: "/about"},
        {name: "Book a table", href: "/book-a-table"},
      ]
      return (
        <div className="hidden bg-black w-fit rounded-[12px] md:flex">
            <ul className="flex mx-[25px] my-[15px] items-center">
            <li className="font-[playfair] text-[20px]/[1]"><Link href="/"> <p>Premium <br/> Govedina</p></Link></li>
            <div className="ml-[30px] flex gap-[15px] items-center">{navLinks.map((item, index)=>(
                <li key={index}
                className="text-[18px]"
                >
                    <Link href={item.href} className="font-mono font-regular">{item.name}
                    </Link>
                </li>
            ))}</div>
            
            </ul>
        </div>
      );
}
