import { css } from "@emotion/react";

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={{ color: 'hotpink' }}>
    Some hotpink text.
    {children}
  </div>
);

function App() {
  return (
    <>
      <SomeComponent />
    </>
  );
}

export default App;
