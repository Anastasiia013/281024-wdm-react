import SectionTitle from "../SectionTitle/SectionTitle";
import CardList from "../CardList/CardList";
import UserList from "../UserList/UserList";

import { getCurrentDate } from "../../utils/date-functions";

import "./Main.css";

const mainTitle = "Welcome to site";

const arr = [1, 3, 4];
const obj = {

};

const cardItems = [
    {
        title: "Product title",
        price: 200
    },
    {
        title: "Product title 2",
        available: false,
        price: 300
    },
    {
        title: "Product title 3",
        available: true,
        price: 700
    },
    {
        title: "Product title 4",
        available: false,
        price: 900
    },
];

const Main = ()=> {
    return (
        <div className="main">
            <SectionTitle text="Product cards" />
            <CardList  />

           
            
            <SectionTitle text="Section title 2" />
            {/* const props = {
                text: "Section title"
            }
            SectionTitle(props)
            */}
            {/* <h1>{mainTitle}. Today {getCurrentDate()}</h1>
            {arr}
            <UserList /> */}
            {/* UserList() */}
            {/* {obj} */}
        </div>
    )
}

export default Main;