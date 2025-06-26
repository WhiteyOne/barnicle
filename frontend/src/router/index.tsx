import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "*",
        element:<><img href="https://mliusekbln72.i.optimole.com/w:461/h:430/q:mauto/ig:avif/https://runningtbeef.com/wp-content/uploads/2019/07/no-barn-stamp.png"></img ><h1 style={{"zIndex":-1}}>404 This Page Doesn't Exsist</h1></>
      }
    ],
  },
]);
