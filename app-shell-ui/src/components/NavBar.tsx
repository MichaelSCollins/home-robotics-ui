import { HomeIcon } from "../icons/HomeIcon";

export const NavBar = () => {
  return (
    <nav className="flex bg-teal-950 p-8 justify-between absolute sticky drop-shadow-lg hover:shadow-orage-200 shadow-gray-800 sticky">
      <section className="text-xl md:pl-4 flex cursor-pointer md:justify-evenly md:w-1/8">
        <HomeIcon /> <p className="pl-2">Home Robotics</p>
      </section>
      <ul className="flex text-xl max-md:hidden">
        <li className="mr-8 cursor-pointer text-orange-400 hover:border-b border-b-orange-400">
          <a href="/robots/">Robots</a>
        </li>
        <li className="mr-10 cursor-pointer hover:text-orange-400 hover:border-b hover:border-b-orange-400">
          Devices
        </li>
        <li className="mr-10 cursor-pointer hover:text-orange-400 hover:border-b hover:border-b-orange-400">
          MAP-Bots
        </li>
        <li className="mr-10 cursor-pointer hover:text-orange-400 hover:border-b hover:border-b-orange-400">
          RPG-Bots
        </li>
      </ul>
    </nav>
  );
};
