const Header = (props) => {
  return (
    <div className="flex justify-between items-center p-2 mb-10 bg-orange-500 ">
      <div id="logo" className="w-20 font-semibold text-xl ml-[7px]">
        Food<span className="text-2xl text-white">X</span>
      </div>
      <div id="links">
        <ul className="flex gap-10 text-white">
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
      <div className="relative">
        <img
          className="h-[32px] mr-[20px]"
          src="https://cdn-icons-png.flaticon.com/512/4290/4290701.png"
          alt="cart-icon"
        />
        <span className="absolute top-[-7px] right-2 bg-yellow-300 rounded-full p-[0.2px] px-[4px] text-[15px] text-blue-600 font-semibold">
          {" "}
          {props.count}{" "}
        </span>
      </div>
    </div>
  );
};

export default Header;
