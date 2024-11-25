import Image from "next/image";
import avacado from "@/images/avacado-img.jpg";
import chocolate from "@/images/dark-img.jpg";
import red from "@/images/red-img.jpg";
import strawberry from "@/images/straw-img.jpg";
import caramel from "@/images/crunch-img.jpg";
import scoop from "@/images/double-img.jpg";
import con from "@/images/con-img.jpg";
import orange from "@/images/img1.jpg";

export default function Flavour() {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl text-pink-700 underline underline-offset-2 m-7">
        Choose Your Favourite ICECREAM Flavour
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={caramel} alt="Caramel Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">CARAMEL FLAVOUR</h1>
        </div>

        {/* Card 2 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={orange} alt="Orange Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">ORANGE FLAVOUR</h1>
        </div>

        {/* Card 3 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={strawberry} alt="Strawberry Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">STRAWBERRY FLAVOUR</h1>
        </div>

        {/* Card 4 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={con} alt="Brown Con Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">BROWN CON FLAVOUR</h1>
        </div>

        {/* Card 5 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={avacado} alt="Avacado Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">AVACADO FLAVOUR</h1>
        </div>

        {/* Card 6 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={scoop} alt="Vanilla Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">VANILLA FLAVOUR</h1>
        </div>

        {/* Card 7 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={chocolate} alt="Magnum Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">MAGNUM FLAVOUR</h1>
        </div>

        {/* Card 8 */}
        <div className="h-56 p-4 rounded-lg border-4 border-pink-500 hover:shadow-2xl cursor-pointer">
          <Image src={red} alt="Chocbar Flavour" className="w-full h-[130px] object-cover rounded-lg" />
          <h1 className="text-center text-xl text-pink-800 mt-2">CHOCBAR FLAVOUR</h1>
        </div>
      </div>
    </div>
  );
}


