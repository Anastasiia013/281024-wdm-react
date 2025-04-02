import Users from "../Users/Users";
import BuyList from "../BuyList/BuyList";
import Timer from "../Timer/Timer";
import PostList from "../PostList/PostList";
import ScrolableText from "../ScrolableText/ScrolableText";
import CollapseItem from "../CollapseItem/CollapseItem";

import mainText from "../../data/mainText";

import "../../styles/style.css";

function App() {
  return (
    <>
      {/* <Users /> */}
      {/* <BuyList /> */}
      {/* <Timer /> */}
      {/* <PostList /> */}
      {/* <ScrolableText items={mainText} /> */}
      <CollapseItem title="Title" content={"content"} />
    </>
  )
}

export default App
