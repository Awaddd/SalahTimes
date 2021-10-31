import { useState } from "react";
import { FiBell, FiBellOff } from "react-icons/fi"

const Nav = () => {

  const [notificationsOn, setNotificationsOn] = useState<boolean>(true)

  return (
    <nav className="grid w-full grid-cols-2 px-3 py-3 antialiased text-gray-200 bg-gray-900">
      <div className="font-semibold">Salah<span className="text-blue-400">Times</span></div>
      <button className="text-blue-400 justify-self-end" onClick={() => setNotificationsOn(current => !current)}>{notificationsOn ? <FiBell /> : <FiBellOff />}</button>
    </nav>
  )
};

export default Nav;
