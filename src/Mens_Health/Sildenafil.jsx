import { useState ,useEffect, useRef} from "react";
import { Link } from "react-router-dom";
function Sildenafil() {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    3;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Fix WaterMark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <img
          src="/BG-LOGO.png"
          alt="Logo"
          className="w-125 h-125 object-cover rounded-full opacity-[0.3]"
        />
      </div>

      {/* Navbar start */}
      <nav className="w-full font-sans relative z-50">
        {/* Top Header Section */}
        <div className="font-bold flex items-center justify-between px-4 md:px-8 py-1.5 text-white text-xs bg-[rgb(49_56_81)]">
          {/* Gmail */}
          <a
            href="mailto:medclickpharma@gmail.com"
            className="flex items-center gap-1.5 no-underline hover:underline"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
            medclickpharma@gmail.com
          </a>
          {/* Telephone number */}
          <a
            href="tel:+917559300419"
            className="flex items-center gap-1.5 no-underline hover:underline"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"></path>
            </svg>
            +91 75593 00419
          </a>
        </div>

        {/* Search & Logo Section */}
        <div className="px-4 md:px-8 py-3 bg-white">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <a href="/">
              <img
                alt="Logo"
                className="w-36 h-36 object-contain"
                src="/BG-LOGO.png"
              />
            </a>
            {/* Center Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-auto">
              <div className="flex w-150 mx-auto">
                <input
                  placeholder="Search medicines..."
                  className="flex-1 px-4 py-3 text-sm outline-none rounded-l-md bg-white text-gray-700 placeholder-gray-400 border-2 border-[#b6c7d6] focus:border-[#313851] transition-colors"
                  type="text"
                />
                <button className="px-6 py-3 text-sm font-semibold text-white rounded-r-md cursor-pointer hover:opacity-90 transition-opacity bg-[rgb(49_56_81)]">
                  Search
                </button>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917559300419"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-full py-2 px-3 md:px-4 hover:shadow-md transition-shadow shrink-0 border-2 border-[#313851]"
            >
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#25D366" />
                <path
                  d="M22.5 9.5C20.8 7.8 18.5 6.9 16 6.9C10.7 6.9 6.4 11.2 6.4 16.5C6.4 18.2 6.9 19.9 7.7 21.3L6.3 25.7L10.8 24.3C12.2 25.1 13.8 25.5 15.5 25.5H16C21.3 25.5 25.6 21.2 25.6 15.9C25.6 13.5 24.2 11.2 22.5 9.5ZM16 23.9C14.5 23.9 13 23.5 11.8 22.8L11.4 22.6L8.4 23.5L9.3 20.6L9.1 20.2C8.3 18.9 7.9 17.4 7.9 15.9C7.9 11.8 11.2 8.5 15.5 8.5C17.6 8.5 19.5 9.3 21 10.8C22.5 12.3 23.3 14.3 23.3 16.4C23.7 20.6 20.3 23.9 16 23.9ZM20.3 18.1C20.1 18 19 17.4 18.8 17.4C18.6 17.3 18.5 17.3 18.3 17.5C18.2 17.7 17.7 18.3 17.5 18.5C17.4 18.7 17.2 18.7 17.1 18.6C16 18.1 15.2 17.6 14.4 16.5C14.2 16.2 14.7 16.2 15.1 15.5C15.2 15.3 15.1 15.2 15 15.1C14.9 15 14.3 13.9 14.1 13.4C13.9 13 13.7 13 13.5 13H13.1C12.9 13 12.6 13.1 12.4 13.3C12.2 13.5 11.5 14.1 11.5 15.2C11.5 16.3 12.4 17.4 12.5 17.5C12.6 17.6 14.3 20.2 16.9 21.1C18.6 21.7 19.3 21.8 20.2 21.6C20.7 21.5 21.8 20.9 22 20.3C22.2 19.6 22.2 19.1 22.1 19C22 18.9 21.9 18.8 20.3 18.1Z"
                  fill="white"
                />
              </svg>
              <span className="hidden md:inline text-sm font-semibold text-[#313851]">
                WhatsApp Us
              </span>
            </a>
          </div>
        </div>

        {/* Main Category Menu Bar */}
        <div className="mx-auto h-12 bg-[rgb(49_56_81)] max-w-full text-white ">
          {/* ref={menuRef} attached to the outer menu container */}
          <ul
            ref={menuRef}
            className="flex items-center justify-center gap-8 pt-3 "
          >
            {/* Men's Health */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("men")}
                className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap cursor-pointer"
              >
                Men's Health
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openMenu === "men" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {openMenu === "men" && (
                <div className="absolute left-0 right-0 top-full mt-3.5 w-52 bg-white divide-y divide-gray-100 text-gray-700 rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                  <Link
                    to="/Avanafil"
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                    onClick={() => setOpenMenu(null)}
                  >
                    Avanafil
                  </Link>
                  <Link
                    to="/Dapoxetine"
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                    onClick={() => setOpenMenu(null)}
                  >
                    Dapoxetine
                  </Link>
                  <Link
                    to="/Sildenafil"
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                  >
                    Sildenafil
                  </Link>
                  <Link
                    to="/Tadalafil"
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                  >
                    Tadalafil
                  </Link>
                  <Link
                    to="/Vardenafil"
                    href="#"
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                  >
                    Vardenafil
                  </Link>
                </div>
              )}
            </li>

            {/* Women's Health */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("women")}
                className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap cursor-pointer divide-y divide-gray-100"
              >
                Women's Health
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openMenu === "women" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {openMenu === "women" && (
                <div className="absolute left-0 right-0 top-full mt-3.5 w-52 bg-white text-gray-700 rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                  <Link
                    to="/Contraceptives"
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                    onClick={() => setOpenMenu(null)}
                  >
                    Contraceptives
                  </Link>
                </div>
              )}
            </li>

            {/* Normal Links */}
            <li>
              <Link
                to="/Pain Killer"
                href="#"
                className="text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] "
              >
                Pain Killer
              </Link>
            </li>

            <li>
              <Link to ="/Weightloss"
                href="#"
                className="text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] "
              >
                Weight Loss
              </Link>
            </li>

            <li>
              <Link to ="/Steroid"
                href="#"
                className="text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] "
              >
                Steroid
              </Link>
            </li>

            <li>
              <Link to = "/SleepingPills"
                href="#"
                className="text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] "
              >
                Sleeping Pills
              </Link>
            </li>

            <li>
              <Link to ="/Modafinil_Armodafinil"
                href="#"
                className="text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] "
              >
                Modafinil & Armodafinil
              </Link>
            </li>

            <li>
              <Link to = "/Antiviral_Antibiotic"
                href="#"
                className="text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] "
              >
                Antiviral & Antibiotic
              </Link>
            </li>

            {/* Other Categories */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("other")}
                className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap cursor-pointer "
              >
                Other Categories
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openMenu === "other" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {openMenu === "other" && (
                <div className="absolute left-0 right-0 top-full mt-3.5 w-52 bg-white text-gray-700 rounded-lg divide-y divide-gray-100 shadow-xl border border-gray-200 z-50 overflow-hidden">
                  <Link to ="/HairLossTreatment"
                    href="#"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Hair Loss Treatment
                  </Link>
                  <Link to="/SkinCreame"
                    href="#"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Skin Cream
                  </Link>
                  <Link to = "/EyeEarDrops"
                    href="#"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Eye-Ear-Drops
                  </Link>
                  <Link to="/KamagraAllRange"
                    href="#"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Kamagra All Range
                  </Link>
                  <Link to="/BestSeller"
                    
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Best Seller
                  </Link>
                  <Link to ="/OtherProducts"
                   
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Others Products
                  </Link>
                  <Link to ="/DropShipping"
                    href="#"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Drop Shipping
                  </Link>
                </div>
              )}
            </li>
          </ul>
          
        </div>
      </nav>

      {/*Main Page   */}
      <main className="flex-1 relative z-10">
        <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-10">
          <div className="max-w-7xl mx-auto mb-10">
            <Link to="/">
              <button className="text-gray-900 font-semibold mb-4 flex items-center gap-1 hover:underline text-sm">
                ← Back
              </button>
            </Link>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Sildenafil
            </h2>
            <p className="text-gray-900 mt-2 text-sm">17 product found</p>
          </div>
          {/* first card  */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/*Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767252609362_cenforce-50-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Conforce-50
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* second card  */}

            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* image */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767253173397_cenforce-D-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cenforce-D
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* Third card  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* image */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767254108473_fildena-double-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Fildena Double-200
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 4th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* image */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767253688330_fildena-extra-power-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Fildena-150
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 5th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* image */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767254257377_cenforce-soft-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cenforce Soft-100
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 6th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* image */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767254621871_sildalsit-3.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Sildalist
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 7th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* image */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767255571252_filagra-2.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Filagra Gel Shots
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 8th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/*  Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767254970430_cenforce-professional-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cenforce professional
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 9th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767254970430_cenforce-professional-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Suhagra-100
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 10th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767255341148_fildena-100-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Fildena-100
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 11th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767256424170_cenforce-fm-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cenforce-FM
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 12th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/*  Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767256822631_cenforce-150-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cenforce-150
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 13th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/*Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1756805916742-_DWX9305.png"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cobra-200
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 14th img */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/*Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767257754523_cenforce-100-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cenforce-100
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 15th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767258199538_fildena-super-active-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Fildena Super Active
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 16th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/* Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1767257583980_cenforce-200-1.jpg"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Cenforce-200
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
            {/* 17th img  */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              {/*Image  */}
              <img
                src="https://gqniwicdcpddltqkrphq.supabase.co/storage/v1/object/public/product-images/1756806161200-_DWX9342.png"
                className="w-full h-52 object-cover"
                alt="Product "
              />
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900 leading-snug">
                  Femalegra-100
                </h4>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* --------------------------------------------------------- */}
      {/* Footer Section */}
      <footer className="bg-[rgb(194_203_211)]">
        {/* Head Div  */}
        <div className="px-6 md:px-10 pt-5 pb-8">
          {/* grid div */}
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 gap-8 md:items-start">
            {/* again div  */}
            <div className="md:max-w-65 lg:max-w-75 shrink-0 flex flex-col gap-2b">
              {/* Image */}
              <a
                href="
                /"
              >
                <img
                  src="BG-LOGO.png"
                  className="w-36 h-36 object-contain"
                  alt="logo"
                />
              </a>

              <div>
                {/* Diclaimber */}
                <h3 className="font-bold text-sm mb-2">DISCLAIMER</h3>
                <p className="text-sm leading-relaxed">
                  medclickpharma is a go to source for detailed information on
                  medications and health related topics that deals in generic
                  erectile dysfunction (ED) medications with a user-friendly
                  interface for customers regarding medication such as
                  Sildenafil, Tadarise etc., to help them make the best choice.
                  The content of this website is intended for general
                  informational purposes only and do not constitute professional
                  medical advice, diagnosis, or treatment. Erectile dysfunction
                  drugs have side effects, interactions, and contraindications.
                </p>
              </div>
            </div>
            {/* 2nd grid  */}
            <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-6 lg:gap-10 md:justify-between md:mt-37">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1">
                  HOT SELLING PRODUCT
                </h3>
                <a
                  href="#
                    "
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Buy Cenforce 100mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Buy Cenforce 200mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Fildena 100mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Vidalista 20mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Sildenafil Oral Jelly 100mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Vilitra 40mg
                </a>
              </div>

              {/* 3rd Grid  */}
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1">
                  INFORMATION
                </h3>
                <Link
                  to="/About Us"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  About Us
                </Link>

                <Link
                  to="/BlogMainPage"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Blog
                </Link>
              </div>
              {/* 4th grid */}
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1">
                  OUR POLICIES
                </h3>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Terms & Conditions
                </a>

                <Link
                  to="/FAQ"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  FAQ
                </Link>
              </div>
              {/* 5th grid */}
              <div className="flex flex-col ">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] ">
                  NEED HELP
                </h3>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1"></h3>
                  <Link
                    to="/ContactUs"
                    className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                  >
                    Contact Us
                  </Link>
                </div>
                <p className="text-sm text-[#1a1a1a] mt-2 leading-snug font-bold">
                  medclickpharma@gmail.com
                </p>
                <a
                  href="#"
                  className="text-sm text-gray-50 no-underline hover:underline mt-2 p-5 text-center rounded-lg bg-gray-900 flex flex-col items-center gap-1"
                >
                  <span className="flex items-center gap-1 font-bold ">
                    Call Us Today
                  </span>
                  <span className="font-bold">917559300419</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer last section  */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 py-4 border-t border-black/10">
          <p className="text-sm text-[#1a1a1a] order-2 md:order-1">
            Copyright © 2026 medclickpharma
          </p>
        </div>
      </footer>
    </>
  );
}
export default Sildenafil;
