import Image from "next/image";
import home from "@/images/all-img.jpg"


import avacado from "@/images/avacado-img.jpg";
import chocolate from "@/images/dark-img.jpg";
import red from "@/images/red-img.jpg";
import strawberry from "@/images/straw-img.jpg";
import caramel from "@/images/crunch-img.jpg";
import scoop from "@/images/double-img.jpg";
import con from "@/images/con-img.jpg";
import orange from "@/images/img1.jpg";

export default function Home() {
  return (
    <>
   {/* HOME PAGE */}
    <div className="w-[100%]  flex  justify-center items-center ">
      <h1 className="w-[95%] m-6 p-3  font-sans text-center text-pink-500 font-extrabold  flex flex-col justify-center items-center  md:text-3xl ">WELCOME TO THE  ICECREAM SHOP
        <Image src={home} alt="home" className="w-[100%] p-4 m-2 "/>

         </h1>
      
    </div>
    {/* ABOUT SECTION */}
    <section className="bg-bannerImg bg-repeat bg-cover bg-bottom ">
        <div className="w-full h-screen flex items-end bg-blackOverlay"> 
            <div className="conatiner mx-auto mb-20 md:mb-30">
                <h1 className=" text-white text-2xl font-bold flex justify-center items-center m-2 md:text-5xl md:m-5"> ABOUT US </h1>
                <p className="text-white w-full max-w-2xl my-4 md:my-8 ">Lorem ipsum dolor sit amet consectetur adipisicing 
                    soluta dolore asperiores alias quidem in omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a deleniti hic asperiores reprehenderit omnis enim, porro vel iure dolore perferendis molestiae molestias eaque consequuntur obcaecati, pariatur ratione corrupti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi aperiam deserunt magnam sed quam nemo labore impedit quibusdam magni nostrum soluta, architecto delectus. Dolore corrupti aliquid nam ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi modi mollitia magnam veritatis optio vel hic fugiat in, reprehenderit dolor, enim, cumque recusandae amet. Quod impedit unde aliquam fugit. Quae, facere atque! Repellendus illum corporis magni consequatur iste, veritatis est at officia incidunt laudantium debitis aliquid quidem necessitatibus exercitationem odit commodi.</p>
            </div>
        </div>

       </section>

       {/* FLAVOUR SECTION */}

       
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


    {/* CONTACT */}


    <div className="p-4">
        <h1 className="flex justify-center items-center text-pink-600 text-xl font-extrabold mb-6 font-sans md:text-2xl" >
          Feel Free to Contact Us
        </h1>
        <form className="flex flex-col justify-center items-center gap-4 p-4 rounded-lg border-2 border-pink-500 md:w-[60%] md:mx-auto">
          <input 
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 border-2 border-pink-500 rounded-md md:w-[80%]"
            required
          />
          <input  required
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border-2 border-pink-500 rounded-md md:w-[80%]"
          />
          <input  required
            type="number"
            placeholder="+92-xxxxxxxxxx"
            className="w-full p-3 border-2 border-pink-500 rounded-md md:w-[80%]"
          />
          <input  required
            type="text"
            placeholder="Subject"
            className="w-full p-3 border-2 border-pink-500 rounded-md md:w-[80%]"
          />
          <textarea  required
            name="text"
            id="coment"
            placeholder="Write Your Comments..."
            className="w-full h-[120px] p-3 border-2 border-pink-500 rounded-md md:w-[80%]"
          />
          <button className="bg-pink-500 text-white w-full p-3 rounded-md hover:bg-pink-600 md:w-[50%]">
            SUBMIT FORM
          </button>
        </form>
      </div>
    
    </>
    
  );
}
