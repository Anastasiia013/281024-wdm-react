import { Link } from "react-router-dom";

import PageLayout from "../../components/PageLayout/PageLayout";

const NotFoundPage = () => {
  return (
    <PageLayout title="Page not found">
      <Link to="/">To home page</Link>
    </PageLayout>
  );
};

export default NotFoundPage;
