import { Home, Lock, UserCheck, Users } from "lucide-react";

import NavItem from "./NavItem";

const routes = [
  { path: "/", Icon: Home, name: "Dashboard" },
  { path: "/attendance", Icon: UserCheck, name: "Attendance" },
  { path: "/employees", Icon: Users, name: "Employees" },
  { path: "/user", Icon: Lock, name: "Users" },
];

function NavMenu({ isOpen }) {
  return (
    <div className=" h-[calc(100dvh-32px-16px-150px)]  overflow-x-hidden overflow-y-auto">
      <ul className="flex flex-col mt-0.5 justify-center gap-3">
        {routes.map((i, l) => (
          <NavItem
            key={l}
            path={i.path}
            Icon={i.Icon}
            name={i.name}
            isOpen={isOpen}
          />
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;
