import Link from "next/link";
import Navbar from "../../public/components/navbar";

export default function Home() {
  return (
    <section className="flex flex-col rounded-[20px] md:flex-row bg-black p-[15px] gap-[15px] h-full w-full md:flex-row">
      {/* Hero Section */}
      <div className="h-full  w-3/4 p-[20px] bg-[url('/assets/images/stefangospic_premium_baked_beef_stake_on_a_dark_plate_with_so_a553d122-40f8-436e-a0ff-7f7c76dd2742_1.webp')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        <Navbar />
        <div className="h-[85%] w-full flex items-end justify-end">
        <h2 className="text-[40px]/[1]  uppercase">Premium <br/> <span className="font-bold">Govedina</span></h2>
        </div>
      </div>

      {/* Service Section */}
      <div className="h-full w-1/4 grid grid-cols-1 gap-[10px]">
      
      {/* Menu */}
      <div className="relative group w-full rounded-[20px] overflow-hidden">
      <Link href="/menu">
      <div className="absolute inset-0 bg-[url('/assets/images/stefangospic_premium_beef_stake_on_a_dark_plate_dark_backgrou_74c6b5e2-1500-49eb-8881-8c843eab175b_3.webp')] bg-cover bg-center transition-all duration-300 group-hover:blur-sm"></div>
      <div className="relative z-10 flex justify-center items-center h-[200px]">
      <div className="w-[100px] bg-black rounded-[6px]">
        <h2 className="text-[20pt] text-white text-center">Menu</h2>
        </div>
      </div>
      </Link>
      </div>
    
    {/* Blog */}
    <div className="relative group w-full rounded-[20px] overflow-hidden">
    <Link href="/blog">
    <div className="absolute inset-0 bg-[url('/assets/images/stefangospic_premium_beef_stake_on_a_dark_plate_dark_marble_b_5dcfed36-1f17-418e-86f8-736e696f9307_3.webp')] bg-cover bg-center transition-all duration-300 group-hover:blur-sm"></div>
    <div className="relative z-10 flex justify-center items-center h-[200px]">    
      <div className="w-[100px] bg-black rounded-[6px]">
        <h2 className="text-[20pt] text-white text-center">Blog</h2>
        </div>
    </div>
    </Link>
    </div>

    {/* About */}
    <div className="relative group w-full rounded-[20px] overflow-hidden">
    <Link href="/about">
    <div className="absolute inset-0 bg-[url('/assets/images/stefangospic_premium_beef_stake_on_a_dark_plate_dark_marble_b_5dcfed36-1f17-418e-86f8-736e696f9307_1.webp')] bg-cover bg-center transition-all duration-300 group-hover:blur-sm"></div>
    <div className="relative z-10 flex justify-center items-center h-[200px]">      
      <div className="w-[100px] bg-black rounded-[6px]">
        <h2 className="text-[20pt] text-white text-center">About</h2>
        </div>
    </div>
    </Link>
    </div>
    </div>
    </section>
  );
}
