export default function Contact() {
    return (
      <div className="p-4">
        <h1 className="flex justify-center items-center text-pink-600 text-2xl font-extrabold my-6 font-sans md:text-3xl" >
          Feel Free to Contact Us
        </h1>
        <form className="flex flex-col justify-center items-center my-  p-4 rounded-lg border-2 border-pink-500 md:w-[60%] md:mx-auto">
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
    );
  }
  