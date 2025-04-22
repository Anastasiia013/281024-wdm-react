/** @jsxImportSource @emotion/react */
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { titleStyle } from './styles';

const PageLayout = ({children, title}) => {
  return (
    <main>
      <Container>
        {title && <Typography css={titleStyle} variant='h1' gutterBottom>{title}</Typography>}
        {children}
      </Container>
    </main>
  );
};

export default PageLayout;
