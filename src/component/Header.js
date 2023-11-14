const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 mb-10 bg-orange-500 ">
      <div id="logo" className="w-20 font-semibold text-xl">
        Food<span className="text-2xl">X</span>
      </div>
      <div id="links">
        <ul className="flex gap-3 text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">AboutUs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
