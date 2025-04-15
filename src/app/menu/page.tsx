import Navbar from "../../../public/components/navbar";

export default function Menu() {
  return (
    <section className="flex flex-col rounded-[20px] md:flex-row bg-black p-[15px] gap-[15px] h-full w-full md:flex-row">
      {/* Hero Section */}
      <div className="h-full  w-1/2 p-[20px] bg-[url('/assets/images/stefangospic_premium_beef_stake_on_a_dark_plate_wit_some_gree_11f964a6-7e67-4630-bfc7-44dbfdd5649b_2.webp')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        <Navbar />
        <div className="h-[85%] w-full flex items-end justify-end">
        <h2 className="text-[40px]/[1]  uppercase">Menu</h2>
        </div>
      </div>

    {/* Special Offers */}
        <div className="h-full w-1/2 grid grid-cols-1 gap-[10px] p-[20px] bg-[url('/assets/images/stefangospic_clean_empty_black_texture_background_with_smoke__f978dd59-baf4-4e78-81ff-7e331c98791c_2.png')] bg-cover bg-center bg-no-repeat rounded-[20px] overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
        {/* Title */}
        <div className="w-full">
        <h3 className="font-semibold italic font-[playfair] text-[36pt] text-center">Special Offers</h3>
        </div>

        {/* Menu */}
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.rungtCdL-kJCX8_beef_ribeye_--v_6.1_8204ed6b-3901-4038-a963-a53a88e1134d_2.webp" alt="ribeye" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">Ribeye steak</h2>
                    <h2 className="text-[12pt]">Richly marbled and incredibly tender, our Ribeye delivers a juicy, flavorful experience with every bite.</h2>
                    <p className="text-[#B69D74] text-right w-full font-extrabold">$45 per lb</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.runcCA5622PbPQ_beef_t-bone_on_a_plate__d531b3ef-126d-401a-84e3-aa3557e8e8ef_2.webp" alt="t-bone" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">T-bone steak</h2>
                    <h2 className="text-[12pt]">A classic cut that combines the tenderness of filet and the flavor of strip steak—perfectly balanced and expertly trimmed.</h2>
                    <p className="text-[#B69D74] text-right w-full font-extrabold">$40 per lb</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.rungtCdL-kJCX8_beef_ribs_on_a_plate_--_d93f6af9-570a-4833-9416-7b03a043954a_1.webp" alt="premiun ribs" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">Premium Ribs</h2>
                    <h2 className="text-[12pt]">Slow-cooked and fall-off-the-bone tender, our premium ribs are packed with bold, smoky flavor.</h2>
                    <p className="text-[#B69D74] text-right w-full font-extrabold">$25 per lb</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-[120px] h-[120px]"><img className="rounded-[20px]" src="/assets/images/stefangospic_httpss.mj.rungtCdL-kJCX8_beef_burger_on_a_plate__f421559d-efa5-405e-81c2-ca2edac3204d_2.webp" alt="premium burger" /></div>
                <div className="w-[650px] flex flex-col gap-[10px] ml-[15px] justify-center items-start">
                    <h2 className="font-semibold text-[14pt]">Premium Burger</h2>
                    <h2 className="text-[12pt]">Crafted from the finest cuts, our gourmet beef burgers are juicy, savory, and made to impress.</h2>
                    <p className="text-[#B69D74] text-right w-full font-extrabold">$18 per lb</p>
                </div>
            </div>
        </div>
    </section>
  );
}
