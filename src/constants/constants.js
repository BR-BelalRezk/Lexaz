import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
export const navbar = [
  {
    name: "Home",
    path: "/dashboard",
    icon: HiOutlineHome,
  },
  {
    name: "Bookings",
    path: "/bookings",
    icon: HiOutlineCalendarDays,
  },
  {
    name: "Cabins",
    path: "/cabins",
    icon: HiOutlineHomeModern,
  },
  {
    name: "Users",
    path: "/users",
    icon: HiOutlineUsers,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: HiOutlineCog6Tooth,
  },
];

export const PAGE_SIZE = 5;
