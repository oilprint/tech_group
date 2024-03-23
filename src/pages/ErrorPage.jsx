import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      ErrorPage
      <Link to="/">Back</Link>
    </>
  );
};

export default ErrorPage;
