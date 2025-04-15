import Navbar from "../../../public/components/navbar";

export default function About() {
  return (
    <section className="flex flex-col rounded-[20px] md:flex-row bg-black p-[15px] gap-[15px] h-full w-full md:flex-row">
      {/* Hero Section */}
      <div className="h-full  w-1/2 p-[20px] bg-[url('/assets/images/stefangospic_photograph_of_modern_large_restaurant_which_serv_04abbd9f-cc05-46f9-85f4-f31a48c2c2c2_1.webp')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        <Navbar />
        <div className="h-[85%] w-full flex items-end justify-end">
        <h2 className="text-[40px]/[1]  uppercase">About</h2>
        </div>
      </div>

    {/* Special Offers */}
        <div className="h-full w-1/2 grid grid-cols-1 gap-[10px] p-[20px] bg-[url('/assets/images/stefangospic_clean_empty_black_texture_background_with_smoke__f978dd59-baf4-4e78-81ff-7e331c98791c_2.png')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        {/* Title */}
        <div className="w-full">
        <h3 className="font-semibold italic font-[playfair] text-[36pt] text-center">About Us</h3>
        <div className="flex flex-col mt-[20px] gap-[10px] text-[16pt] text-[#F3F3F3] font-thin">
        <p><span className="font-bold">Welcome to Premium Govedina restaurant</span> — where premium beef takes center stage.</p>
        <p>At Premium Govedina, we&apos;re passionate about one thing: <strong>serving the highest-quality beef</strong> with unmatched flavor, tenderness, and care. Our modern restaurant is built for those who appreciate exceptional taste, refined atmosphere, and a love for <strong>craft beef dishes</strong>.</p>
        <p>We specialize exclusively in <b>premium cuts of beef</b>, from juicy <b>ribeye steaks</b> and tender <b>T-bones</b> to flavorful <b>ribs</b> and gourmet <b>beef burgers</b>. Every dish is carefully prepared by our skilled chefs using only the finest, ethically sourced beef—grass-fed, hormone-free, and aged to perfection.</p>
        <p>Our mission is simple:<br/><b>To deliver an unforgettable beef dining experience</b>.</p>
        <p>Whether you&apos;re a steak connoisseur or discovering the richness of premium meat for the first time, Premium Govedina offers a menu designed to impress. We combine <b>modern culinary techniques</b> with a deep respect for tradition, bringing out the natural flavor in every bite.</p>
        <p>Join us and discover why we&apos;re the go-to destination for <b>premium beef lovers</b>.</p>
        </div>
        </div>
        </div>
    </section>
  );
}
