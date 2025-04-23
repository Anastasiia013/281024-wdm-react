import { Global } from "@emotion/react";

import Theme from "../context/Theme";

import globalStyles from "../shared/styles/global";

function App() {
  return (
    <Global styles={globalStyles}>
      <Theme>
        
      </Theme>
    </Global>
  )
}

export default App
