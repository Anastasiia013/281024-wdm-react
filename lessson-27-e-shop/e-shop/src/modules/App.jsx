import { Global } from "@emotion/react";

import Theme from "../context/Theme";

import PageLayout from "./layouts/PageLayout/PageLayout";

import Navigation from "../pages/Navigation";

import globalStyles from "../shared/styles/global";

function App() {
  return (
    <Theme>
      <Global styles={globalStyles} />
      <PageLayout>
        <Navigation />
      </PageLayout>
    </Theme>
  );
}

export default App;
