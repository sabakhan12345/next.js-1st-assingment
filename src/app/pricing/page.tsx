import Image from "next/image";
import avacado from "@/images/avacado-img.jpg";
import chocolate from "@/images/dark-img.jpg";
import red from "@/images/red-img.jpg";
import strawberry from "@/images/straw-img.jpg";
import caramel from "@/images/crunch-img.jpg";
import scoop from "@/images/double-img.jpg";
import con from "@/images/con-img.jpg";
import orange from "@/images/img1.jpg";

export default function Pricing() {
  const cards = [
    { image: caramel, title: "Caramel Crunch ICE CREAM", before: 250, now: 200 },
    { image: orange, title: "Cool Orange ICE CREAM", before: 200, now: 150 },
    { image: strawberry, title: "Strawberry Combo ICE CREAM", before: 250, now: 200 },
    { image: con, title: "Brown Chocolate CON", before: 270, now: 220 },
    { image: avacado, title: "Creamy Avocado ICE CREAM", before: 400, now: 370 },
    { image: scoop, title: "Vanilla Mix ICE CREAM", before: 340, now: 300 },
    { image: chocolate, title: "Dark MAGNUM ICE CREAM", before: 470, now: 400 },
    { image: red, title: "Chocbar ICE CREAM", before: 250, now: 200 },
  ];

  return (
    <div className="p-4">
      <h1 className="flex justify-center items-center text-yellow-500 text-2xl md:text-3xl font-bold mb-6">
        BEST PRICE EVER
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center h-auto w-full p-4 border-4 border-pink-500 rounded-xl hover:shadow-2xl cursor-pointer"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
              <Image
                src={card.image}
                alt="pricing image"
                className="rounded-md object-cover w-full h-[120px] md:w-[90%] md:h-[100px]"
              />
            </div>

            {/* Title and Prices */}
            <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-pink-700 text-lg md:text-xl font-bold mb-2">
                {card.title}
              </h1>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="text-yellow-400 text-lg bg-pink-100 rounded-lg p-2">
                  Before: <s>Rs.{card.before}/=</s>
                </div>
                <div className="text-pink-700 text-lg bg-yellow-400 rounded-lg p-2">
                  NOW: Rs.{card.now}/=
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
