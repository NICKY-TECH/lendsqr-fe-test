import "./styles/base.css"
import { Login,Dashboard,Main,Details } from ".";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Login/>}/>
        <Route path="dashboard" element={<Main/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="users/details" element={<Details/>}/>

        </Route>
      </Route>
    )
  );
    return <RouterProvider router={router} />
  
}

export default App
