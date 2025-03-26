import Header from "../Header/Header";
import Main from "../Main/Main";
import Posts from "../Posts/Posts";

import "../../styles/style.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Posts />
      </Main>
    </>
  );
}

export default App;
