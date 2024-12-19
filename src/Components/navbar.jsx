import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-orange-500 text-2xl font-bold ml-10">
              MyPersonalDiary
            </a>
          </div>

          {/* Nav links */}
          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-black hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/journal"
                className="text-black hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Journal
              </a>
              <a
                href="/affirmation"
                className="text-black hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Affirmation
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
