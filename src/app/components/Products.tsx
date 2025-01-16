import Image from "next/image";

import pic1 from "@/image/feature1.png";
import pic2 from "@/image/feature2.png";
import pic3 from "@/image/feature3.png";
import pic4 from "@/image/feature4.png";
import pic5 from "@/image/feature5.png";
import pic6 from "@/image/feature6.png";
import pic7 from "@/image/feature7.png";
import pic8 from "@/image/feature8.png";
import CardText from "./CardText";

export default function ProductCard() {
  return (
    <div className="w-full absolute top-[1470px] left-0 flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
            (pic, index) => (
              <div key={index} className="w-[238px] h-[615px] mx-auto">
                <div className="w-full h-615">
                  <div className="w-[239px]">
                    <Image src={pic} alt={`picture${index + 1}`} />
                  </div>
                  <CardText />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
