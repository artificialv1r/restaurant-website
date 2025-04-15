import Navbar from "../../../public/components/navbar";

export default function Menu() {
  return (
    <section className="flex flex-col rounded-[20px] md:flex-row bg-black p-[15px] gap-[15px] h-full w-full md:flex-row">
      {/* Hero Section */}
      <div className="h-full  w-1/2 p-[20px] bg-[url('/assets/images/stefangospic_Premium_beef_restaurant_photography_for_website__162d7e79-9bc2-41a3-a1fc-c14d012d7508_3.webp')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        <Navbar />
        <div className="h-[85%] w-full flex items-end justify-end">
        <h2 className="text-[40px]/[1]  uppercase">Booking</h2>
        </div>
      </div>

    {/* Special Offers */}
        <div className="h-full w-1/2 grid grid-cols-1 gap-[10px] p-[20px] bg-[url('/assets/images/stefangospic_clean_empty_black_texture_background_with_smoke__f978dd59-baf4-4e78-81ff-7e331c98791c_2.png')] bg-cover bg-center bg-no-repeat rounded-[20px]">
        {/* Title */}
        <div className="w-full">
        <h3 className="font-semibold italic font-[playfair] text-[36pt] text-center">Dine With Us</h3>
        </div>

<form
  action="https://formspree.io/f/mblgbeyo"
  method="POST"
  className="grid grid-cols-2 gap-4 p-6 bg-transparent backdrop-blur rounded-xl"
>
  {/* Left Side */}
  <div className="flex flex-col gap-3">
    <input type="text" name="name" placeholder="Name" required className="p-2 rounded border-b-2" />
    <input type="email" name="email" placeholder="Email" required className="p-2 rounded border-b-2" />
    <input type="date" name="date" required className="p-2 rounded border-b-2" />
  </div>

  {/* Right Side */}
  <div className="flex flex-col gap-3">
    <input type="time" name="time" required className="p-2 rounded border-b-2" />
    <input type="number" name="guests" placeholder="Number of Guests" required className="p-2 rounded border-b-2" />
    <button
      type="submit"
      className="bg-transparent border text-white py-2 rounded-md font-semibold cursor-pointer"
    >
      Reserve Table
    </button>
  </div>
</form>


  {/* Contact & Location Info */}
  <div className="grid grid-cols-2 gap-[10px] p-[20px]">
    {/* Contact Info */}
    <div className="text-lg leading-relaxed space-y-2">
      <p><strong>Address:</strong> Bulevar Nikole Tesle, Belgrade</p>
      <p><strong>Email:</strong> stefan.gospic.1@gmail.com</p>
      <p><strong>Phone:</strong> +381 65 658 4503</p>
      <p><strong>Our Doors Are Open:</strong></p>
      <ul className="pl-4 list-disc">
        <li>Mon-Fri: 8:00-23:00</li>
        <li>Sat-Sun: 10:00-01:00</li>
      </ul>
    </div>

    {/* Google Maps */}
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.177009889716!2d20.45727351581372!3d44.81654697909837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7abddbc9391d%3A0x9799e91f47c2db41!2sRepublic%20Square!5e0!3m2!1sen!2srs!4v1710000000000!5m2!1sen!2srs"
        width="100%"
        height="250"
        allowFullScreen={true}
        loading="lazy"
        className="rounded-md border border-gray-300 grayscale-[40%] contrast-[80%] brightness-[60%]"
      ></iframe>
    </div>
  </div>        </div>
    </section>
  );
}
