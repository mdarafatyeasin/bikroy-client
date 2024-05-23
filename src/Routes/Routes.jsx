import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AdPost from "../Pages/AdPost/AdPost";
import Adds from "../Pages/Adds/Adds";
import DetailPost from "../Pages/Adds/Post/DetailPost";
import Registration from "../Pages/Register/Registration";
import Profile from "../Pages/Profile/Profile";
import ProfileInfo from "../Pages/Profile/ProfileInfo";
import UserEdit from "../Pages/EditProfile/UserEdit/UserEdit";
import BasicEdit from "../Pages/EditProfile/BasicEdit/BasicEdit";
import AdditionalEdit from "../Pages/EditProfile/AdditionalEdit/AdditionalEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/registration',
            element: <Registration/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/ad-post',
            element: <AdPost/>
        },
        {
            path: '/view-adds',
            element: <Adds/>
        },
        {
            path: '/view-adds/:id',
            element: <DetailPost/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/profile-info',
            element: <ProfileInfo/>
        },
        {
            path: '/profile-info/user-edit',
            element: <UserEdit/>
        },
        {
            path: '/profile-info/basic-edit',
            element: <BasicEdit/>
        },
        {
            path: '/profile-info/additional-edit',
            element: <AdditionalEdit/>
        },
    ]
  },
]);
