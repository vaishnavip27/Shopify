import NavBar from "../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll overflow-hidden">
      <div className="snap-start h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex flex-col bg-gray-400">
          {/* Content for Section 1 */}
          <h2 className="text-black text-xl ml-4 mt-3 font-bold">
            Discover products
          </h2>

          {/* flex whole box */}
          <div className="w-full h-full flex gap-3 ml-4 mt-3 mb-4 mr-4">
            <div className="w-1/2 h-full flex flex-col gap-3">
              <div className="w-full h-1/2 border-2 border-gray-500 overflow-hidden rounded-xl">
                <Image
                  src="/images/vase.png"
                  alt="fashion-image"
                  width={370}
                  height={350}
                  className="-mt-24"
                />
              </div>
              <div className="w-full h-1/2 border-2 border-gray-500 overflow-hidden rounded-xl">
                <Image
                  src="/images/toys.png"
                  alt="toys-image"
                  width={500}
                  height={380}
                  className="-mt-32"
                />
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-row  gap-3">
              <div className="h-full w-1/2 border-2 border-gray-500 overflow-hidden rounded-xl">
                <Image
                  src="/images/fashion.png"
                  alt="fashion-image"
                  width={460}
                  height={380}
                  className="relative mt-72 object-cover"
                />
              </div>
              <div className="h-full w-1/2 border-2 border-gray-500 overflow-hidden rounded-xl">
                <Image
                  src="/images/sneakers.png"
                  alt="fashion-image"
                  width={500}
                  height={400}
                  className="relative mt-72 object-cover rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Another section */}
      <div className="snap-start h-screen flex bg-#fefefe-500">
        <h1 className="text-black text-2xl font-bold ml-4 mt-4">
          Top selling products
        </h1>
      </div>
      <div className="snap-start h-screen flex items-center justify-center bg-green-500">
        {/* Content for Section 3 */}
        <h1 className="text-white text-4xl">Women's Collection</h1>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
}
