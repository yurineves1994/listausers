
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "../pages/Home";
import EditUser from "../pages/EditUser";
import UserView from "../pages/UserView";
import AddUser from "../pages/AddUser";
import Header from "../components/Header";


export function RoutesList() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />s
        <Route path="/users" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<UserView />} />
      </Routes>
    </BrowserRouter>
  )
}
