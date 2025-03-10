import { useState } from "react";

import AccordionItem from "./AccordionItem/AccordionItem";

// const sallary = 5000;
// const sallary2 = 4000.5;
// const sallary3 = 10000 / 0;
// const sallary4 = Number("3456a");

// console.log(typeof sallary);
// console.log(typeof sallary2);
// console.log(sallary3);
// console.log(typeof sallary3);
// console.log(sallary4);
// console.log(typeof sallary4);
// const userName = "Bogdan";
// const userLastName = "Lyamzin";
// // const userFullName = userName + " " + userLastName;
// const userFullName = `${userName} ${userLastName}`;
// console.log(userFullName)
// const backendResponse = "5000 usd";
// const sallaryInUSD = Number(backendResponse);
// if(!Number.isNaN(sallaryInUSD)) {
//     const sallaryInEuro = sallaryInUSD / 1.03;
//     console.log(sallaryInEuro)
// }
// else {
//     console.log("Зарплата это не число")
// }

const Accordion = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const changeOpenIndex = (index) => {
    setOpenIndex((prevOpenIndex) => {
      if (prevOpenIndex === index) return null;
      return index;
    });
  };

  const elements = items.map((item, index) => (
    <AccordionItem
      open={openIndex === index}
      index={index}
      changeOpenIndex={changeOpenIndex}
      key={item.title}
      title={item.title}
      content={item.content}
    />
  ));

  return (
    <div>
      <h2>{title}</h2>
      {elements}
    </div>
  );
};

export default Accordion;
