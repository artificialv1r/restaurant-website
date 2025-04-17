import Navbar from "../../../public/components/navbar";

export default function About() {
  return (
    <section className="flex flex-col rounded-[20px] bg-black p-[15px] gap-[15px] h-full w-full md:flex-row">
      {/* Hero Section */}
      <div className="h-[40dvh] md:h-full  md:w-1/2 p-[20px] bg-[url('/assets/images/stefangospic_photograph_of_modern_large_restaurant_which_serv_04abbd9f-cc05-46f9-85f4-f31a48c2c2c2_1.webp')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        <Navbar />
      </div>

      {/* Special Offers */}
      <div className="h-fit md:h-full md:w-1/2 grid grid-cols-1 gap-[10px] p-[20px] bg-linear-to-b from-[#0C0C0C] to-[#040303] md:bg-[url('/assets/images/stefangospic_clean_empty_black_texture_background_with_smoke__f978dd59-baf4-4e78-81ff-7e331c98791c_2.png')] md:bg-cover md:bg-center md:bg-no-repeat rounded-[20px] md:overflow-y-auto md:max-h-[90vh] md:scrollbar-thin md:scrollbar-thumb-black md:scrollbar-track-black">
        {/* Title */}
        <div className="w-full">
          <h3 className="font-semibold italic font-[playfair] text-[24pt] md:text-[36pt] text-center">
            About Us
          </h3>
          <div className="text-center  md:text-left flex flex-col mt-[20px] gap-[10px] text-[12pt] md:text-[16pt] text-[#F3F3F3] font-light">
            <p>
              <span className="font-bold">
                Welcome to Premium Govedina restaurant
              </span>{" "}
              — where premium beef takes center stage.
            </p>
            <p>
              At Premium Govedina, we&apos;re passionate about one thing:{" "}
              <span className="font-bold">
                serving the highest-quality beef
              </span>{" "}
              with unmatched flavor, tenderness, and care. Our modern restaurant
              is built for those who appreciate exceptional taste, refined
              atmosphere, and a love for{" "}
              <span className="font-bold">craft beef dishes</span>.
            </p>
            <p>
              We specialize exclusively in{" "}
              <span className="font-bold">premium cuts of beef</span>, from
              juicy <span className="font-bold">ribeye steaks</span> and tender{" "}
              <span className="font-bold">T-bones</span> to flavorful{" "}
              <span className="font-bold">ribs</span> and gourmet{" "}
              <span className="font-bold">beef burgers</span>. Every dish is
              carefully prepared by our skilled chefs using only the finest,
              ethically sourced beef-grass-fed, hormone-free, and aged to
              perfection.
            </p>
            <p>
              Our mission is simple:
              <br />
              <span className="font-bold">
                To deliver an unforgettable beef dining experience
              </span>
              .
            </p>
            <p>
              Whether you&apos;re a steak connoisseur or discovering the
              richness of premium meat for the first time, Premium Govedina
              offers a menu designed to impress. We combine{" "}
              <span className="font-bold">modern culinary techniques</span> with
              a deep respect for tradition, bringing out the natural flavor in
              every bite.
            </p>
            <p>
              Join us and discover why we&apos;re the go-to destination for{" "}
              <span className="font-bold">premium beef lovers</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
