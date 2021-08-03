import { ImGithub } from "react-icons/im";
import { FaRegBell, FaRegStar } from "react-icons/fa";
import {
  AiOutlineProject,
  AiOutlineMenu,
  AiOutlineCaretDown,
} from "react-icons/ai";
import {
  HiOutlinePlus,
  HiOutlineBookOpen,
  HiOutlineCube,
} from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
import { BiBookBookmark, BiBuildings } from "react-icons/bi";
import { FiMapPin, FiMail } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { RiChatQuoteLine } from "react-icons/ri";

const Icons = {
  //navbar
  Menu: AiOutlineMenu,
  Github: ImGithub,
  Bell: FaRegBell,
  Plus: HiOutlinePlus,
  Arrow: AiOutlineCaretDown,
  //contentNavbar
  Book: HiOutlineBookOpen,
  Repo: BiBookBookmark,
  Project: AiOutlineProject,
  Cube: HiOutlineCube,
  Blog: RiChatQuoteLine,
  //sidebar
  People: IoPeopleOutline,
  Star: FaRegStar,
  Building: BiBuildings,
  Map: FiMapPin,
  Mail: FiMail,
  Link: BsLink45Deg,
  Linkedin: IoLogoLinkedin,
};

export default Icons;
