import "./header.css";

const Header = () => {
  return (
    <header className="app-header flex items-start md:items-center px-5 py-2 md:px-5 md:pt-3 md:pb-4 border-t-2 border-b">
      <div className="flex flex-col">
        <a href="/worklist" className="text-sky-600 text-xss font-bold">
          <i class="bi bi-arrow-left pr-1"></i>
          WORKLIST
        </a>
        <h1 className="font-bold text-lg md:text-2xl md:mt-2">Promotion Management</h1>
      </div>
      <button
        type="button"
        class="add-event-btn text-white bg-sky-600 hover:bg-sky-800 rounded md:rounded-lg text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 focus:outline-none"
      >
        Add Event
      </button>
    </header>
  );
};

export default Header;
