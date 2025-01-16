
import Image from "next/image";

import React from "react";

const Logo = () => {
  return (
    <div>
      {/* grid-cols-6 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center mt-16 px-20 space-y-10 my-10">
        {/* Image 1 */}
        <Image
          src="/companies.png"
          alt="companies"
          width={153}
          height={34}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        
      </div>
    </div>
  );
};

export default Logo;
