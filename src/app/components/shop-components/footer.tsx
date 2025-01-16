import Link from "next/link";

export default function Footer() {
    return (
<>
<div className="">

    <div className="bg-[#FAFAFA]">
        <div className="max-w-[1050px] mx-auto flex justify-between h-[140px] items-center">
        <div>
            <h2 className="font-bold text-[24px]">Bandage</h2>
        </div>
        <div className="flex gap-[15px] text-[#23A6F0]">
        <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
        <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
        <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
        </div>
        </div>
        </div>
        <footer className=" py-10">
  <div className="max-w-[1050px] mx-auto h-[270px] grid grid-cols-1 md:grid-cols-6 gap-8 items-center">
    {/* Column 1 */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Company Info</h4>
      <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
        <li> 
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">About Us</a>
            </li>
        <li>
             <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer" >Carrier</a>
             </li>
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer"> We are hiring</a>

        </li>
        
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer"> Blog</a>

        </li>
      </ul>
    </div>

     {/* Column 2 */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Legal</h4>
      <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">About Us</a>
            </li>
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">Carrier</a>
            </li>
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">We are hiring</a>
            </li>
            <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">Blog</a>
            </li>
      </ul>
    </div>

     {/* Column 3 */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Features</h4>
      <ul className="space-y-2 text-[#737373] font-bold text-[14px] ">
        <li>
            <a href='/' className="text-gray-600 hover:text-gray-800 cursor-pointer">Business Marketing</a>
            </li>
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">User Analytic</a>
            </li>
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">Live Chat</a>
            </li>
            <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">Unlimited Support</a>
            </li>
      </ul>
    </div>

     {/* Column 4 */}
    <div>
      <h4 className="font-semibold text-lg mb-4">Resources</h4>
      <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">IOS & Android </a>
            </li>
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">Watch & Demo</a>
            </li>
        <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">Customers</a>
            </li>
            <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 cursor-pointer">API</a>
            </li>
      </ul>
    </div>

     {/* Column 5 */}
    <div className="col-span-2">
      <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
      <div>
      <form className="flex">
   <input className="bg-[#F9F9F9] py-4 px-2 rounded-[5px] border border-[#E6E6E6]" placeholder="Your Email" type='text' />
   <button className="bg-[#23A6F0] p-4 text-white rounded-[5px]" type="submit">Subscribe</button>
      </form>
      <div>
        Lore imp sum dolar Amit
        </div>
      </div>
    </div>
  </div>
</footer>
    
    <div className="bg-[#FAFAFA]">
        <div className="max-w-[1050px] mx-auto h-[75px] flex items-center">
        <p className="m-0 p-0">Made With Love By Haram Adnan All Right Reserved</p>
        </div>
    </div>
</div>


</>

    );

}