import { useState } from "react";
import { FiBell, FiBellOff } from "react-icons/fi"
import { ActionIcon } from "@mantine/core";

const Nav = () => {

  const [notificationsOn, setNotificationsOn] = useState<boolean>(true)

  return (
    <nav className="grid w-full grid-cols-2 p-3 antialiased text-gray-200 md:px-6 bg-darkest">
      <div className="self-end font-semibold">Salah<span className="text-primary">Times</span></div>
      <div className="justify-self-end">
        <ActionIcon variant="transparent" className="text-gray-200" onClick={() => setNotificationsOn(current => !current)}>
          {notificationsOn ? <FiBell /> : <FiBellOff />}
        </ActionIcon>
      </div>
    </nav>
  )
};

export default Nav;
