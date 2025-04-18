import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import styles from "./PageLayout.module.css";

const PageLayout = ({children, title}) => {
  return (
    <main>
      <Container>
        {title && <Typography variant='h1' gutterBottom sx={{fontSize: "2rem"}}>{title}</Typography>}
        {children}
      </Container>
    </main>
  );
};

export default PageLayout;
