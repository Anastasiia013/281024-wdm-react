import { nanoid } from "nanoid";

const mainMenuItems = [
    {
        id: nanoid(),
        href: "/",
        text: "Home",
    },
    {
        id: nanoid(),
        href: "/notes",
        text: "Notes",
        private: true,
    },
    {
        id: nanoid(),
        href: "/notes-important",
        text: "Notes important",
        private: true,
    },
    {
        id: nanoid(),
        href: "/contacts",
        text: "Contacts"
    },
];

export default mainMenuItems;