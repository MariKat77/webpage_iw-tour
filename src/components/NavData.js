import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";


export const NavData = [
  {
    title: "Strona główna",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "navText",
  },
  {
    title: "Oferta",
    path: "/oferta",
    icon: <MdIcons.MdOutlineLocalOffer />,
    cName: "navText",
  },
  {
    title: "Galeria",
    path: "/galeria",
    icon: <AiIcons.AiFillPicture />,
    cName: "navText",
  },
  {
    title: "Kontakt",
    path: "/kontakt",
    icon: <AiIcons.AiOutlineContacts />,
    cName: "navText",
  },
];
