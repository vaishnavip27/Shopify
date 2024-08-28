import NavBar from "../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="scroll-smooth overflow-y-scroll overflow-hidden">
      <div className="flex flex-col">
        <NavBar />
        <div className="flex-grow flex flex-col bg-[#f8f8f8]">
          {/* Content for Section 1 */}
          <h2 className="text-black text-xl ml-4 mt-3 font-bold">
            Discover products
          </h2>

          {/* Flex whole box */}
          <div className="w-full flex gap-3 ml-4 mt-3 mb-4 mr-4">
            <div className="w-1/2 flex flex-col gap-3">
              <div className="w-full border-2 border-gray-500 overflow-hidden rounded-xl">
                <Image
                  src="/images/vase.png"
                  alt="fashion-image"
                  width={370}
                  height={350}
                  className="-mt-24"
                />
              </div>
              <div className="w-full border-2 border-gray-500 overflow-hidden rounded-xl">
                <Image
                  src="/images/toys.png"
                  alt="toys-image"
                  width={500}
                  height={380}
                  className="-mt-32"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-row gap-3">
              <div className="w-1/2 border-2 border-gray-500 overflow-hidden rounded-xl">
                <Image
                  src="/images/fashion.png"
                  alt="fashion-image"
                  width={460}
                  height={380}
                  className="relative mt-72 object-cover"
                />
              </div>
              <div className="w-1/2 border-2 border-gray-500 overflow-hidden rounded-xl">
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
      <div className="flex flex-col bg-[#f8f8f8] mt-8">
        <h1 className="text-black text-2xl font-bold ml-4 mt-4">
          Top selling products
        </h1>

        {/* Cards container */}
        <div className="flex items-center ml-4 mt-3 gap-4">
          <div className="flex flex-col">
            <div className="h-[310px] w-[310px] border-2 border-gray-500 rounded-sm"></div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="text-black text-sm font-semibold">
                  Name of the product
                </div>
                <div className="text-sm">Item description</div>
              </div>
              <div className="text-black text-sm font-semibold">$99.99</div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="h-[310px] w-[310px] border-2 border-gray-500 rounded-sm"></div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="text-black text-sm font-semibold">
                  Name of the product
                </div>
                <div className="text-sm">Item description</div>
              </div>
              <div className="text-black text-sm font-semibold">$99.99</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[310px] w-[310px] border-2 border-gray-500 rounded-sm"></div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="text-black text-sm font-semibold">
                  Name of the product
                </div>
                <div className="text-sm">Item description</div>
              </div>
              <div className="text-black text-sm font-semibold">$99.99</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[310px] w-[310px] border-2 border-gray-500 rounded-sm"></div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="text-black text-sm font-semibold">
                  Name of the product
                </div>
                <div className="text-sm">Item description</div>
              </div>
              <div className="text-black text-sm font-semibold">$99.99</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[310px] w-[310px] border-2 border-gray-500 rounded-sm"></div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="text-black text-sm font-semibold">
                  Name of the product
                </div>
                <div className="text-sm">Item description</div>
              </div>
              <div className="text-black text-sm font-semibold">$99.99</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-green-500 mt-8 py-20">
        {/* Content for Section 3 */}
        <h1 className="text-white text-4xl">Women's Collection</h1>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
}
