import AccountToggle from "../components/AccountToggle";
import NavMenu from "../components/NavMenu";

import ToggleClose from "../components/ToggleClose";

function Sidebar({ isOpen, handleSidebar }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm sm:hidden"
          onClick={handleSidebar}
        />
      )}
      <aside
        className={`relative shadow sm:shadow-none 
           bg-black/20 sm:bg-transparent
         rounded z-20 flex flex-col h-full col-start-1 transition-[width] duration-500 ${
           isOpen ? "w-[15rem]" : "w-[2.75rem]"
         }`}
      >
        <div>
          <AccountToggle isOpen={isOpen} />

          <NavMenu isOpen={isOpen} />
        </div>

        <ToggleClose isOpen={isOpen} handleSidebar={handleSidebar} />
      </aside>
    </>
  );
}

export default Sidebar;

{
  /*<div className="flex flex-col flex-1 border-t border-stone-300 px-2 py-1.5">
        <Plan />
      </div> */
}
