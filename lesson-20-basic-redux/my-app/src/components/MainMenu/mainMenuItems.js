import { nanoid } from "nanoid";

const mainMenuItems = [
    {
        id: nanoid(),
        href: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        href: "/buy-list",
        text: "Buy list"
    },
    {
        id: nanoid(),
        href: "/urgency-buy-list",
        text: "Urgency buy list"
    },
    {
        id: nanoid(),
        href: "/contacts",
        text: "Contacts"
    },
];

export default mainMenuItems;