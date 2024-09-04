const ProfileBanner = () => {
    return (
      <>
        <div className="relative inline-block text-left">
          {/* Dropdown toggle button */}
          <input
            type="checkbox"
            id="user-menu-toggle"
            className="hidden peer"
          />
          <label
            htmlFor="user-menu-toggle"
            className="flex cursor-pointer text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="user photo"
            />
          </label>
  
          {/* Dropdown menu */}
          <div className="absolute right-0 z-50 hidden peer-checked:block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900">
                Bonnie Green
              </span>
              <span className="block text-sm text-gray-500 truncate">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default ProfileBanner;
  