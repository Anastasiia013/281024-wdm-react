import Menu from "../Menu/Menu";
import ToggleButton from "../ToggleButton/ToggleButton";
import BuyList from "../BuyList/BuyList";
import Calculate from "../Calculate/Calculate";
import ShowTextButton from "../ShowTextButton/ShowTextButton";

function App() {

  return (
    <>
    <Menu />
    <ToggleButton>Click me</ToggleButton>
    <BuyList />
    <Calculate initialValue={5} />
     {/* <ShowTextButton firstText="Show" secondText="Hide" nextText="Next text" /> */}
      {/* 
      const props = {
        firstText: "Show",
        secondText: "Hide",
        nextNext: "Next text"
      };
      ShowTextButton(props);
      */}
    </>
  )
}

export default App
