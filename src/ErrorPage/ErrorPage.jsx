import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
      <div className="flex justify-center items-center">
          <div className="mt-11 lg:mt-60 md:mt-24 border-2 shadow-lg p-11"
           id="error-page ">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
         <div className="mt-11 flex justify-center">
         <Link to={'/'}>
          <button className="btn bg-pink-700">Home</button>
          </Link>
         </div>
        </p>
      </div>
      </div>
    );
};

export default ErrorPage;