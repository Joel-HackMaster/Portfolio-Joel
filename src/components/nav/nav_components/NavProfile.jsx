import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  ChevronDownIcon,
  EyeIcon
} from "@heroicons/react/24/solid";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

export default function NavProfile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1
                rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="Joel Sanchez"
            className="border border-custom-gray-person p-0.5"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FSuperusers%2F14?alt=media&token=d172ff02-9ed3-48d9-aaf5-61112f35c0da"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform text-custom-gray-person ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem
          onClick={closeMenu}
          className="flex justify-center items-center gap-2 rounded-lg"
        >
          {React.createElement(EyeIcon, {
            className: `h-4 w-4 text-blue-gray-900`,
            strokeWidth: 2,
          })}
          <Typography
            as="a"
            target="_blank" 
            rel="no ref"
            href="https://www.canva.com/design/DAGD0m0bHVI/nyTPo4OijqjdGrzmIFehfA/view?utm_content=DAGD0m0bHVI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            variant="small"
            className="font-normal text-blue-gray-900"
          >
            Ver Curriculum
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
