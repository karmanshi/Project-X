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
            className="flex cursor-pointer text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-300"
          >
            <h3>Action</h3>
          </label>
  
          {/* Dropdown menu */}
          <div className="absolute right-0 z-50 hidden peer-checked:block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ">
            <div className="px-4 py-3">
              <button type="button" className="block text-sm text-gray-900 " onClick={props.handleDelete}>Delete
              </button>
              
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default DropDown;
  