const DropDown = (props) => {
    return (
      <>
        <div className="relative inline-block text-left">
          {/* Dropdown toggle button */}
          <input
            type="checkbox"
            id={props.id}
            className="hidden peer"
          />
          <label
            htmlFor={props.id}
            className="flex cursor-pointer text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <h3>Action</h3>
          </label>
  
          {/* Dropdown menu */}
          <div className="absolute right-0 z-50 hidden peer-checked:block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3">
              <button type="button" className="block text-sm text-gray-900 dark:text-white" onClick={props.handleDelete}>Delete
              </button>
              
            </div>
            {/* <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </>
    );
  };
  
  export default DropDown;
  