import { Global } from "@emotion/react";

import Theme from "../context/Theme";

import Navigation from "../pages/Navigation";

import globalStyles from "../shared/styles/global";

function App() {
  return (
    <Theme>
      <Global styles={globalStyles} />
      <Navigation />
    </Theme>
  );
}

export default App;
