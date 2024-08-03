import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import NavListMenu from "./NavListMenu";

export default function NavList() {
  const [isTransition, setIsTransition] = React.useState(false);
  const navListItems = [
    {
      label: "DashBoard",
      icon: UserCircleIcon,
      path: "#",
    },
    {
      label: "Blogs",
      icon: CubeTransparentIcon,
      path: "#2",
    },
    {
      label: "Projects",
      icon: CodeBracketSquareIcon,
      path: "#1",
    },
  ];
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          as="a"
          href={path}
          variant="small"
          className="font-medium text-blue-gray-900"
        >
          <MenuItem className='flex items-center gap-2 lg:rounded-full'>
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
