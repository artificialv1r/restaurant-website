import Navbar from "../../../public/components/navbar";

export default function Blog() {
  return (
    <section className="flex flex-col rounded-[20px] md:flex-row bg-black p-[15px] gap-[15px] h-full w-full md:flex-row">
      {/* Hero Section */}
      <div className="h-full  w-1/2 p-[20px] bg-[url('/assets/images/stefangospic_Premium_beef_restaurant_photography_for_website__c81c0f98-8da9-4bdc-999f-cd78c38d6f24_2.webp')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        <Navbar />
        <div className="h-[85%] w-full flex items-end justify-end">
        <h2 className="text-[40px]/[1]  uppercase">Blog</h2>
        </div>
      </div>

    {/* Special Offers */}
        <div className="h-full w-1/2 grid grid-cols-1 gap-[10px] p-[20px] bg-[url('/assets/images/stefangospic_clean_empty_black_texture_background_with_smoke__f978dd59-baf4-4e78-81ff-7e331c98791c_2.png')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        {/* Title */}
        <div className="w-full">
        <h3 className="font-semibold italic font-[playfair] text-[36pt] text-center">The Art of Beef</h3>
        </div>

        {/* Menu */}
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.rungtCdL-kJCX8_beef_ribeye_--v_6.1_8204ed6b-3901-4038-a963-a53a88e1134d_2.webp" alt="ribeye" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">Why Ribeye Steak is the King of Premium Cuts</h2>
                    <h2 className="text-[12pt] text-[#F3F3F3]">Discover what makes ribeye steak the crown jewel of beef cuts. From its perfect marbling to melt-in-your-mouth tenderness, learn why steak lovers can't resist this premium cut—and where to find the best ribeye in town.</h2>
                </div>
            </div>
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.runcCA5622PbPQ_beef_t-bone_on_a_plate__d531b3ef-126d-401a-84e3-aa3557e8e8ef_2.webp" alt="t-bone" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">T-Bone Steak vs. Ribeye: Which Premium Cut Reigns Supreme?</h2>
                    <h2 className="text-[12pt] text-[#F3F3F3]">Torn between a juicy ribeye and a bold t-bone? We break down the differences in flavor, texture, and experience so you can choose your ultimate steak. Spoiler alert: both are irresistible at our steakhouse.</h2>
                </div>
            </div>
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.rungtCdL-kJCX8_beef_ribs_on_a_plate_--_d93f6af9-570a-4833-9416-7b03a043954a_1.webp" alt="premiun ribs" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">The Secret to Perfect Premium Ribs: Slow, Smoky, and Savory</h2>
                    <h2 className="text-[12pt] text-[#F3F3F3]">Ever wonder what makes premium ribs fall-off-the-bone delicious? Explore our chef's techniques for preparing the juiciest, most flavorful ribs you'll ever taste—crafted from the finest beef cuts only.</h2>
                </div>
            </div>
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.rungtCdL-kJCX8_beef_burger_on_a_plate__f421559d-efa5-405e-81c2-ca2edac3204d_2.webp" alt="premium burger" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">Burger Goals: Inside Our Premium Beef Burger Experience</h2>
                    <h2 className="text-[12pt] text-[#F3F3F3]">Not your average burger. Our premium beef burger is handcrafted with top-grade beef, fresh toppings, and grilled to perfection. Here's why foodies are calling it the best burger in the city.</h2>
                </div>
            </div>
        </div>
    </section>
  );
}
