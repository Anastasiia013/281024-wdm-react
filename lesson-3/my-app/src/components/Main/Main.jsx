import Section from "../Section/Section";
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
        id: 1,
        title: "Lenovo X120S",
        price: 200
    },
    {
        id: 2,
        title: "iPhone XR",
        available: false,
        price: 3500
    },
    {
        id: 3,
        title: "Bosh wachmachine",
        available: true,
        price: 700
    },
    {
        id: 4,
        title: "Apple watch",
        available: false,
        price: 900
    },
];

const Main = ()=> {
    return (
        <div className="main">
            <Section title="Products">
                <CardList items={cardItems} />
            </Section>
            {/*
            const props = {
                title: "Products",
                children: <CardList items={cardItems} />
            }
            Section(props);
            */}
            <Section title="Some text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet similique itaque perspiciatis quae quam laudantium, delectus voluptatibus culpa sequi! Accusamus mollitia, eligendi quis adipisci amet delectus optio iure inventore.</p>
            </Section>
            {/* <div className="section">
                <div className="container">
                    <SectionTitle text="Product cards" />
                    <CardList items={cardItems} />
                </div>
            </div>
            
            <div className="section">
                <div className="container">
                    <SectionTitle text="Section title 2" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet similique itaque perspiciatis quae quam laudantium, delectus voluptatibus culpa sequi! Accusamus mollitia, eligendi quis adipisci amet delectus optio iure inventore.</p>
                </div>
            </div>
             */}

            
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