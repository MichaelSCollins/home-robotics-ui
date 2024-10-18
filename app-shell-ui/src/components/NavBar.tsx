export const NavBar = () => {
    return <nav className="flex bg-teal-950 p-8 justify-between absolute sticky drop-shadow-lg hover:shadow-orage-200 shadow-gray-800 sticky">
        <section className="text-xl md:pl-4 flex cursor-pointer md:justify-evenly md:w-1/8"><HomeIcon/> <p className="pl-2">Home Robotics</p></section>
        <ul className="flex text-xl max-md:hidden">
            <li className="mr-8 cursor-pointer text-orange-400 hover:border-b border-b-orange-400">Robots</li>
            <li className="mr-10 cursor-pointer hover:text-orange-400 hover:border-b hover:border-b-orange-400">Devices</li>
            <li className="mr-10 cursor-pointer hover:text-orange-400 hover:border-b hover:border-b-orange-400">MAP-Bots</li>
            <li className="mr-10 cursor-pointer hover:text-orange-400 hover:border-b hover:border-b-orange-400">RPG-Bots</li>
        </ul>
    </nav>
}

const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
<g fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 12 L4 32 L12 32 L12 56 H28 V40 H36 V56 H52 V32 L60 32 Z" />
  <rect x="24" y="40" width="8" height="8" />
  <rect x="14" y="36" width="4" height="4" />
  <rect x="42" y="36" width="4" height="4" />
</g>
</svg>