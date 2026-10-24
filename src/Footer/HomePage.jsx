import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Homepage() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
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
          className="w-64 h-64 sm:w-96 sm:h-96 md:w-125 md:h-125 object-cover rounded-full opacity-[0.15]"
        />
      </div>

      {/* Navbar start */}
      <nav className="w-full font-sans relative z-50">
        {/* Top Header Section */}
        <div className="font-bold flex items-center justify-between gap-2 px-3 sm:px-4 md:px-8 py-1.5 text-white text-[10px] sm:text-xs bg-[rgb(49_56_81)]">
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
        <div className="px-3 sm:px-4 md:px-8 py-3 bg-white">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <a href="/">
              <img
                alt="Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 object-contain"
                src="/BG-LOGO.png"
              />
            </a>
            {/* Center Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-auto">
              <div className="flex w-full max-w-xl mx-auto">
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
          <div className="md:hidden mt-3">
            <div className="flex w-full">
              <input placeholder="Search medicines..." className="flex-1 min-w-0 px-4 py-2.5 text-sm outline-none rounded-l-md bg-white text-gray-700 placeholder-gray-400 border-2 border-[#b6c7d6] focus:border-[#313851]" type="text" />
              <button className="px-4 py-2.5 text-sm font-semibold text-white rounded-r-md bg-[rgb(49_56_81)]">Search</button>
            </div>
          </div>
        </div>

        {/* Main Category Menu Bar */}
        <div className="mx-auto bg-white xl:bg-[rgb(49_56_81)] max-w-full text-gray-700 xl:text-white border-b border-gray-200 xl:border-0">
          <div className="hidden items-center justify-between px-4 py-3 xl:hidden">
            <span className="text-sm font-semibold">Categories</span>
            <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close category menu" : "Open category menu"} aria-expanded={mobileOpen} className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          <ul
            ref={menuRef}
            className="flex flex-col items-stretch gap-0 px-0 pb-0 xl:flex-row xl:items-center xl:justify-center xl:gap-8 xl:px-4 xl:py-3 xl:pb-3"
          >
            {/* Men's Health */}
            <li className="relative w-full xl:w-auto border-b border-gray-100 xl:border-0 px-3 py-0 xl:px-0 xl:py-0">
              <button
                onClick={() => toggleMenu("men")}
                className="flex w-full items-center justify-between gap-2 py-3 text-sm font-semibold whitespace-nowrap cursor-pointer xl:w-auto xl:justify-start xl:py-0"
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
                <div className="static mt-2 w-full xl:absolute xl:left-0 xl:right-auto xl:top-full xl:mt-3.5 xl:w-52 bg-white divide-y divide-gray-100 text-gray-700 rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
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
                    onClick={() => { setOpenMenu(null); setMobileOpen(false); }}
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                  >
                    Sildenafil
                  </Link>
                  <Link
                    to="/Tadalafil"
                    onClick={() => { setOpenMenu(null); setMobileOpen(false); }}
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                  >
                    Tadalafil
                  </Link>
                  <Link
                    to="/Vardenafil"
                    onClick={() => { setOpenMenu(null); setMobileOpen(false); }}
                    className="hover:text-amber-600 block px-5 py-3 text-sm hover:bg-gray-100"
                  >
                    Vardenafil
                  </Link>
                </div>
              )}
            </li>

            {/* Women's Health */}
            <li className="relative w-full xl:w-auto border-b border-gray-100 xl:border-0 px-3 py-0 xl:px-0 xl:py-0">
              <button
                onClick={() => toggleMenu("women")}
                className="flex w-full items-center justify-between gap-2 py-3 text-sm font-semibold whitespace-nowrap cursor-pointer xl:w-auto xl:justify-start xl:py-0"
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
                <div className="static mt-2 w-full xl:absolute xl:left-0 xl:right-auto xl:top-full xl:mt-3.5 xl:w-52 bg-white text-gray-700 rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
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
                onClick={() => { setOpenMenu(null); setMobileOpen(false); }}
                className="block w-full py-3 text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] xl:w-auto xl:py-0"
              >
                Pain Killer
              </Link>
            </li>

            <li>
              <Link to ="/Weightloss"
                className="block w-full py-3 text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] xl:w-auto xl:py-0"
              >
                Weight Loss
              </Link>
            </li>

            <li>
              <Link to ="/Steroid"
                className="block w-full py-3 text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] xl:w-auto xl:py-0"
              >
                Steroid
              </Link>
            </li>

            <li>
              <Link to = "/SleepingPills"
                className="block w-full py-3 text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] xl:w-auto xl:py-0"
              >
                Sleeping Pills
              </Link>
            </li>

            <li>
              <Link to ="/Modafinil_Armodafinil"
                className="block w-full py-3 text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] xl:w-auto xl:py-0"
              >
                Modafinil & Armodafinil
              </Link>
            </li>

            <li>
              <Link to = "/Antiviral_Antibiotic"
                className="block w-full py-3 text-sm font-semibold whitespace-nowrap hover:text-[#D4F0E0] xl:w-auto xl:py-0"
              >
                Antiviral & Antibiotic
              </Link>
            </li>

            {/* Other Categories */}
            <li className="relative w-full xl:w-auto border-b border-gray-100 xl:border-0 px-3 py-0 xl:px-0 xl:py-0">
              <button
                onClick={() => toggleMenu("other")}
                className="flex w-full items-center justify-between gap-2 py-3 text-sm font-semibold whitespace-nowrap cursor-pointer xl:w-auto xl:justify-start xl:py-0"
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
                <div className="static mt-2 w-full xl:absolute xl:left-0 xl:right-auto xl:top-full xl:mt-3.5 xl:w-52 bg-white text-gray-700 rounded-lg divide-y divide-gray-100 shadow-xl border border-gray-200 z-50 overflow-hidden">
                  <Link to ="/HairLossTreatment"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Hair Loss Treatment
                  </Link>
                  <Link to="/SkinCreame"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Skin Cream
                  </Link>
                  <Link to = "/EyeEarDrops"
                    className="hover:text-amber-600 block px-5 py-2.5 text-sm hover:bg-gray-100"
                  >
                    Eye-Ear-Drops
                  </Link>
                  <Link to="/KamagraAllRange"
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

      {/*-----------------------------------------------------------------------------------  */}
      {/* Main first two sections */}
      <main className="flex-1 relative z-10">
        {/* first section */}
        <section className="w-full px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto ">
            {/* div for heading and cards */}
            <div className="flex-1 rounded-2xl p-5 border-[1.5px] border-[#313851]">
              {/* div for heading */}
              <div className="flex items-center justify-between mb-5 md:grid-cols-2 sm:grid-cols-1 ">
                <h2 className="text-2xl font-extrabold text-gray-900 font-[Georgia,serif]">
                  BestSeller
                </h2>
                <Link to="/BestSeller"
                  className="text-sm font-semibold no-underline hover:underline text-[rgb(23,184,197)]"
                >
                  See All
                </Link>
              </div>
              {/* div for cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  {/* 1st card */}
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-32 sm:h-40">
                    <img
                      src="Bestseller1.jpg"
                      alt=""
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Cenforce-100
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* 2nd Card */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-32 sm:h-40">
                    <img src="Bestsaller2.png" alt="" />{" "}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Ivermectin 12
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* 3rd card */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-32 sm:h-40">
                    <img src="Bestsaller3.png" alt="" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Nervigesic-300
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* 4th Card */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-32 sm:h-40">
                    <img src="Bestsaller4.png" alt="" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Artvigil-150
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
            {/* ================================================================================= */}

            {/* side div section */}
            <div className="w-full md:w-72 lg:w-80 shrink-0">
              <div className="rounded-2xl p-6 flex flex-col gap-5 bg-[rgb(254,251,232)] border border-[rgb(232,216,122)]">
                <h2 className="text-xl font-extrabold text-gray-900 leading-snug font-[Georgia,serif]">
                  How to Order Medicines online?
                </h2>
                <div className="flex flex-col gap-4">
                  {/* first div 1 */}
                  <div className="flex items-start gap-3">
                    {/* div for circle and number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 border-2 justify-center shrink-0 border-[rgb(23_184_197)] font-bold text-sm text-[rgb(23_184_197)] rounded-full flex items-center">
                        1
                      </div>
                      {/* div for dashes */}
                      <div className="w-px mt-1 h-7 border-l-2 border-dashed border-l-[rgb(23,184,197)]"></div>
                    </div>
                    {/* div for text */}
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-gray-900">
                        Search your meds
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Compare prices & brands.
                      </p>
                    </div>
                  </div>

                  {/* second div 2 */}
                  <div className="flex items-start gap-3">
                    {/* div for circle and number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 border-2 justify-center shrink-0 border-[rgb(23_184_197)] font-bold text-sm text-[rgb(23_184_197)] rounded-full flex items-center">
                        2
                      </div>
                      {/* div for dashes */}
                      <div className="w-px mt-1 h-7 border-l-2 border-dashed border-l-[rgb(23,184,197)]"></div>
                    </div>
                    {/* div for text */}
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-gray-900">
                        Place your order
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        We'll get your prescriptions.
                      </p>
                    </div>
                  </div>

                  {/* third div 3 */}
                  <div className="flex items-start gap-3">
                    {/* div for circle and number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 border-2 justify-center shrink-0 border-[rgb(23_184_197)] font-bold text-sm text-[rgb(23_184_197)] rounded-full flex items-center">
                        3
                      </div>
                      {/* div for dashes */}
                      <div className="w-px mt-1 h-7 border-l-2 border-dashed border-l-[rgb(23,184,197)]"></div>
                    </div>
                    {/* div for text */}
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-gray-900">
                        Satisfaction Guaranteed
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Meds delivered on your terms.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[rgb(23,184,197)]">
                  Please provide a valid prescription at checkout for a seamless
                  experience
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ================================================================================== */}
        {/* Shop by Health corner  */}
        {/* second section */}
        <section className="w-full py-8 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-6 font-[Georgia,serif]">
            Shop By Health Concerns
          </h2>

          {/* div for 5 sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
            {/* first Image  */}
            <Link to="/SkinCreame"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-44 sm:h-48 w-full border border-gray-400"
            >
              <img
                src="Shop1.jpeg"
                alt="Skin Care"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  Skin Care
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </Link>
            {/* Second Image  */}
            <Link
              to="/Avanafil"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-44 sm:h-48 w-full border border-gray-400"
            >
              <img
                src="Shop2.jpg"
                alt="Problem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  ERECTILE DYSFUNCTION
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </Link>
            {/* Third Image  */}
            <Link
              to="/Dapoxetine"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-44 sm:h-48 w-full border border-gray-400"
            >
              <img
                src="Shop3.jpg"
                alt="Problem-2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  PREMATURE EJACUALATION
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </Link>
            {/* Fourth Image */}
            <Link to ="/EyeEarDrops"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-44 sm:h-48 w-full border border-gray-400"
            >
              <img
                src="shop4.jpg"
                alt="Eye Care"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  EYE CARE
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </Link>
            {/* fifth Image */}
            <Link to ="/HairLossTreatment"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-44 sm:h-48 w-full border border-gray-400"
            >
              <img
                src="Shop5.jpg"
                alt="Hair issue"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  HAIR PROBLEM
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </Link>
          </div>
        </section>
        {/* ------------------------------------------------------------------------ */}
        {/* Skin Care */}
        <section className="w-full px-4 md:px-8 py-8 ">
          <div className="max-w-7xl mx-auto">
            {/* div for link and heading */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-[Georgia,serif]">
                Skin Care
              </h2>
              <Link to="/SkinCreame"
                className="text-sm font-semibold no-underline hover:underline text-[rgb(23,184,197)]"
              >
                See All
              </Link>
            </div>

            {/* div for images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                {/* 1st image */}
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40 ">
                  <img
                    src="Skin1.jpg"
                    alt="GLYCO 6.jpg"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer  "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  GLYCO 6%
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* Second img  */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Skin2.jpg"
                    alt="Tretiheal 0.05 cream"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Tretiheal 0.05% cream
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* 3rd Img */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Skin3.jpg"
                    alt="Tretiheal 0.1 cream"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Tretiheal 0.1% cream
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* 4th Img */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Skin4.jpg"
                    alt="Skinlite"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Skinlite
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* 5th Img */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Skin5.jpg"
                    alt="Tretiheal 0.025 cream"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1cursor-pointer "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Tretiheal 0.025% cream
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*-----------------------------------------------------------------------------------  */}
        {/* Ed */}
        {/* Head Div  */}
        <div className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
          {/* h2 Ed */}
          <h2 className="font-serif text-[44px] font-bold text-[#101828]">
            What is ED?
          </h2>
          {/* first paragraph  */}
          <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">
            Erectile dysfunction is the persistent inability to achieve or
            maintain an erection sufficient to permit satisfactory sexual
            performance. An erection requires a smooth muscle relaxation cascade
            triggered by nitric oxide, raising cyclic GMP, which lets
            <a href="#" className="text-blue-600 hover:underline">
              blood flood the corpora cavernosa
            </a>
            . Vascular blockage, nerve damage,
            <a href="#" className="text-blue-600 hover:underline">
              hormonal imbalance
            </a>
            . or psychological stress may interrupt this pathway leading to
            Erectile Dysfunction.
          </p>
          {/* Second paragraph  */}
          <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
            It's not just a normal part of aging, though prevalence does rise
            with age.
            <span className="font-bold">
              Affects approx. 30% of men aged 40-70, and up to 70% › 70.
            </span>
          </p>
          {/* Third Paragraph */}
          <p className="text-sm md:text-base font-bold text-gray-900 mb-4">
            What leads to Erectile issue in men?
          </p>
          {/* fourth paragraph  */}
          <p className="text-sm md:text-base font-semibold text-gray-900 mb-2">
            Causes
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base text-gray-800 mb-6">
            {/* first li */}
            <li>Vascular: Atherosclerosis, Hypertension, Diabetes, Smoking</li>
            {/* Second li */}
            <li>
              Neurogenic: Spinal Injury, Multiple Sclerosis,
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Pelvic surgery
              </a>
              , Peripheral neuropathy
            </li>
            {/* Thidr Li */}
            <li>
              Hormonal:
              <a
                href="
                "
                className="text-blue-600 hover:underline"
              >
                Low testosterone
              </a>
              , Hyperprolactinemia, Thyroid disease
            </li>
            {/* 4th Li */}
            <li>
              Medication induced: Beta-blockers, thiazides, antidepressants,
              anti-psychotics, 5-alpha reductase inhibitor
            </li>
            {/* 5th Li */}
            <li>
              Psychogenic:
              <a href="#">Anxiety</a>, Depression,
              <a href="3" className="text-blue-600 hover:underline">
                {" "}
                Performance stress
              </a>
              ,
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Relationship issues
              </a>
              .
            </li>
            {/* 6th li */}
            <li>Mixed: Combination of organic and Psychogenic factors.</li>
          </ul>
          {/* 2nd statement p */}
          <p className="text-sm md:text-base font-semibold text-gray-900 mb-2">
            Treatment
          </p>
          {/* UL */}
          <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base text-gray-800">
            <li>
              PDE5 Inhibitor Medications:
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Sildenafil
              </a>
              ,
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Tadalafil
              </a>
              ,
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Vardenafil
              </a>
              , and
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Avanafil
              </a>
              .
            </li>
            {/* 2nd Li */}
            <li>
              <span className="font-bold">Topical anesthetics:</span>
              Lidocaine -prilocaine cream or spray to reduce glance sensitivity.
            </li>
            {/* 3rd Li */}
            <li>
              <span className="font-bold">
                SSRIs, Selective serotonin reuptake inhibitors:
              </span>{" "}
              Paroxetine, Sertraline e.g., Dapoxetine
            </li>
            {/* 4th li */}
            <li>
              <span className="font-bold">Intra-urethral suppositories:</span>{" "}
              Alprostadil
            </li>
            {/* 5th Li */}
            <li>
              <span className="font-bold">Surgical implants:</span> Penile
              Dorsal-nerve neurolysis
            </li>
            {/* 6th li */}
            <li>
              <span className="font-bold">Psychosexual therapy:</span> Cognitive
              behavioural therapy,
              <a href="#" className="text-blue-600 hover:underline">
                Sex therapy
              </a>
            </li>
          </ul>
        </div>
        {/*--------------------------------------------------------------------------------------  */}
        {/* Mens Health */}
        <section className="w-full px-4 md:px-8 py-8 ">
          <div className="max-w-7xl mx-auto ">
            {/* div for link and heading */}
            <div className="flex items-center justify-between mb-6 ">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-[Georgia,serif]">
                Mens Health
              </h2>

              <Link
                to="/Sildenafil"
                className="text-sm font-semibold no-underline hover:underline text-[rgb(23,184,197)]"
              >
                See All
              </Link>
            </div>

            {/* div for images */}
            {/* 1st Img */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40 ">
                  <img
                    src="Mens1.jpg"
                    alt="img"
                    className="object-contain w-full h-full transition-transform duration-300 cursor-pointerduration-500 hover:scale-110 hover:-translate-y-1 "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Cenforce-50
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* 2nd Img  */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Mens2.jpg"
                    alt="Tretiheal 0.05 cream"
                    className=" object-contain w-full h-full transition-transform cursor-pointer duration-500 hover:scale-110 hover:-translate-y-1"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Cenforce-D
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* 3rd Img */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Mens3.jpg"
                    alt="Tretiheal 0.1 cream"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer  "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Fildena Double-200
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* 4th Img */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Mens4.jpg"
                    alt="Skinlite"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Fildena-150
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
              {/* 5th Img */}
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                  <img
                    src="Mens5.jpg"
                    alt="Tretiheal 0.025 cream"
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                  Cenforce Soft-100
                </p>
                <a
                  href=""
                  className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*------------------------------------------------------------------  */}
        {/* Pe */}
        <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto font-sans text-gray-800">
          {/* Primary Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-gray-900">
            What is PE?
          </h1>

          {/* first para */}
          <p className="text-sm sm:text-base leading-relaxed mb-6 text-gray-700">
            Premature ejaculation (PE) is one of the most prevalent sexual
            disorders that afflict countless men across the globe. Premature
            ejaculation is a condition in which a man ejaculates earlier during
            sexual intercourse than he or his partner desires. Premature
            ejaculation can be divided into two forms: lifelong (primary) and
            acquired (secondary). Lifelong PE is when the man has constantly had
            PE, whereas acquired PE occurs after some period of normal sexual
            functioning.
          </p>

          {/* Second heading */}
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-900">
            What leads to Premature ejaculation in Mens
          </h2>

          {/* Third heading */}
          <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">
            Causes
          </h3>

          {/* Unordered lists of items */}
          <ul className="list-disc list-outside pl-5 space-y-2 mb-6">
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Biological : </span>
              Hypersensitivity, Serotonin Imbalance, Thyroid problems, and
              inflammation (Prostatitis).
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">
                Psychological :{" "}
              </span>
              Anxiety, Stress, Depression, Performance Pressure.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Behavioural : </span>
              Infrequent Sex, Learned Pattern, Lack of awareness.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Medical : </span>
              Erectile Dysfunction, Certain medications, SSRIs.
            </li>
          </ul>

          {/* Paragraph */}
          <p className="text-sm sm:text-base font-bold mb-3 text-gray-900">
            Affects approximately 20–30% of men at any time in their lives.
          </p>
          <p className="text-sm sm:text-base font-bold mb-3 text-gray-900">
            SSRIs (Selective serotonin reuptake inhibitors) have effects on
            ejaculation because they increase serotonin levels within the brain.
            Daily or on-demand SSRIs — that is paroxetine, sertraline,
            {/* link */}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              — are frequently used to delay ejaculation and for treating
              premature ejaculation.
            </a>
          </p>

          {/* Third Heading */}
          <h3 className="text-sm sm:text-base font-semibold mb-3 text-gray-900">
            Treatment
          </h3>

          {/* unordered list */}
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Medications : </span>
              <span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Priligy 30 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Dapoforce 30 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Vidalista 80 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Poxet 60 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Super Krrista
                  </a>
                </span>
              </span>
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Daily SSRIs :</span>
              Selective serotonin reuptake inhibitors that increase serotonin
              and leads to delay ejaculation.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">
                PDE-5 Inhibitor :
              </span>
              Useful when Premature ejaculation co-exists along with erectile
              dysfunction.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">
                Psychosexual therapy :
              </span>
              Cognitive-behavioural therapy, couples' therapy, or sex therapy
              focused on anxiety and relationship dynamics.
            </li>
          </ul>
        </section>
        {/* ---------------------------------------------------------*/}
        {/* Hair Loss */}
        {/* div section for hairloss */}
        <div className="bg-[radial-gradient(rgb(49,56,81)_0%,rgb(194,203,211)_60%,rgb(246,243,237)_100%)]">
          <section className="w-full px-4 md:px-8 py-8 ">
            <div className="max-w-7xl mx-auto">
              {/* div for heading */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-[Georgia,serif]">
                  Hair Loss
                </h2>
                <Link
                to="/HairLossTreatment"

                className="text-sm font-semibold no-underline hover:underline text-[rgb(23,184,197)]"
              >
                See All
              </Link>
              </div>

              {/* div for sections */}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                  
                  {/* 1st imag */}
                  <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40 ">
                    <img
                      src="Minoxiboon 2.5mg.jpg"
                      alt="GLYCO 6.jpg"
                      className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                    Minoxiboon 2.5mg
                  </p>
                  <a
                    href=""
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* 2nd Img  */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                  <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                    <img
                      src="Minoxiboon 5mg.jpg"
                      alt="Tretiheal 0.05 cream"
                      className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                    Minoxiboon 5mg
                  </p>
                  <a
                    href=""
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* 3rd img  */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                  <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                    <img
                      src="Finalo.jpg"
                      alt="Tretiheal 0.1 cream"
                      className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                    Finalo
                  </p>
                  <a
                    href=""
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* 4th img */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                  <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                    <img
                      src="MorrF 10.png"
                      alt="Skinlite"
                      className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                    MorrF 10%
                  </p>
                  <a
                    href=""
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* 5th img  */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
                  <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                    <img
                      src="Finpecia 1mg.jpg"
                      alt="Tretiheal 0.025 cream"
                      className="object-contain w-full h-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer "
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                    Finpecia 1mg
                  </p>
                  <a
                    href=""
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* --------------------------------------------------------------*/}
        {/* Latest Vlog  */}
        {/* Docotor Section  */}
        <section className="w-full px-4 md:px-16 lg:px-30 py-8">
          {/* Latest Blogs And See All Div  */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Latest Blogs
            </h2>
            <a
              href="#"
              className="text-teal-600 text-sm font-semibold hover:underline"
            >
              See All
            </a>
          </div>
          {/* Docotor Image head Div */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1st image card */}
            <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src="Doctor1.avif"
                  alt="Doctor Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Discription */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="text-base font-bold text-gray-900">
                  What Doctors have to tell you about MedClickPharma's Medicines
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  MedclickPharma is truly delivering what it promises.
                </p>
                <Link
                  to="/BlogFirstPage"
                  className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
            {/* 2nd image card */}
            <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src="Doctor2.avif"
                  alt="Docotr Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Discription */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="text-base font-bold text-gray-900">
                  MedClickPharma have a wide range of products for men's health.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  Explore the products of MedClickPharma and find the best
                  solution for your health needs.
                </p>
                <Link
                  to="/BlogSecondPage"
                  className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
            {/* 3rd image card */}
            <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src="Doctor3.avif"
                  alt="Docotor Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Discription */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="text-base font-bold text-gray-900">
                  Ever had a hairy, itchy, irritated eye? Cyclomune 0.05% Eye
                  Drops can help.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  Hair loss can be treated well with medclickpharma's products.
                </p>
                <Link
                  to="/BlogThirdPage"
                  className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
            {/* 4th Image card */}
            <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src="Doctor4.avif"
                  alt="Docotor Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Discription */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="text-base font-bold text-gray-900">
                  Tired of Dry, Irritated Eyes? Order Cyclomune 0.05% Eye Drops
                  Online Today
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  It often starts as something small, something you can dismiss
                  at first. You've been scrolling
                </p>
                <Link
                  to="/BlogFourthPage"
                  className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*-----------------------------------------------------------  */}
        {/* Customer Review */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-10">
          {/* Customer Review  */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Customer Reviews
          </h2>
          {/* Head Div Start */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-10">
            {/* First Card */}
            <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
              {/* Image */}
              <img
                src="Review1.jpg"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
                alt="John Deo"
              />
              {/* text */}
              <h3 className="text-base font-bold text-gray-900">John Deo</h3>
              <div className="flex items-center gap-0.5">
                {/* Paragraph */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  After using Silditop, there is a significant improvement in
                  erectile function and sexual performance, which also helped me
                  boost up confidence.
                </p>
              </div>
            </div>
            {/* 2nd card */}
            <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
              {/* Image */}
              <img
                src="Review2.jpg"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
                alt="John Deo"
              />
              {/* text */}
              <h3 className="text-base font-bold text-gray-900">Maria Mak</h3>
              <div className="flex items-center gap-0.5">
                {/* Paragraph */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sildigra 25 mg was a great starting dose, worked smoothly
                  without any harsh effects. Felt more relaxed and confident, as
                  it worked pretty fast.
                </p>
              </div>
            </div>
            {/* 3rd Card */}
            <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
              {/* Image */}
              <img
                src="Review3.jpg"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
                alt="John Deo"
              />
              {/* text */}
              <h3 className="text-base font-bold text-gray-900">
                Mark Milligan
              </h3>
              <div className="flex items-center gap-0.5">
                {/* Paragraph */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tried Fildena 100 mg, honestly, it worked better than I
                  expected. Within 40 minutes, I felt more confident, as it
                  really helped bring back my spark.
                </p>
              </div>
            </div>
            {/* 4th card */}
            <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
              {/* Image */}
              <img
                src="Review4.jpg"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
                alt="John Deo"
              />
              {/* text */}
              <h3 className="text-base font-bold text-gray-900">Lucas</h3>
              <div className="flex items-center gap-0.5">
                {/* Paragraph */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  I'm Lucas, about to reach my 40s, suffering from ED. I've got
                  to know about Vidalista, amazed by the results, all of my ED
                  problems being solved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      

<a
  href="https://wa.me/917559300419"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="fixed bottom-4 right-4 md:bottom-6 md:right-8 z-[9999] flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full bg-[#00C853] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-7 w-7 md:h-8 md:w-8"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 5.5-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
</a>



      {/* --------------------------------------------------------- */}
      {/* Footer Section */}
      <footer className="bg-[rgb(194_203_211)]">
        {/* Head Div  */}
        <div className="px-6 md:px-10 pt-5 pb-8">
          {/* grid div */}
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 gap-8 md:items-start">
            {/* again div  */}
            <div className="w-full md:max-w-xs lg:max-w-sm shrink-0 flex flex-col gap-3">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-1 gap-8 md:gap-6 lg:gap-10">
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
                  href="tel:917559300419"
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
export default Homepage;