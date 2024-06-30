import Image from "next/image";
import cta_image from "@/images/cta-page.jpg";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src={cta_image}
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-base-100  bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
          What are you waiting for?
          </h2>
            <p className="text-lg opacity-80 mb-12 md:mb-16">
                Stop wasting time & money, utilize the power of <b className="underline decoration-emerald-500">TradeLikeBot</b> and 
                <b className="underline decoration-pink-500"> easily</b> earn from trading!
            </p>
            <Link href="/pricing" passHref>
            <button className="btn btn-gradient-green btn-wide group">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="w-8 h-8 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12l3 0" /><path d="M12 3l0 3" /><path d="M7.8 7.8l-2.2 -2.2" /><path d="M16.2 7.8l2.2 -2.2" /><path d="M7.8 16.2l-2.2 2.2" /><path d="M12 12l9 3l-4 2l-2 4l-3 -9" /></svg>
              {'Get TradeLikeBot'}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
