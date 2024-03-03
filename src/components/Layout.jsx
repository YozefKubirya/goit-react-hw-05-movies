import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
const Layout = ({children}) => {
   return (<div><nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li><NavLink to={'/movies'}>Movies</NavLink></li>
      </ul>
   
   </nav>
   
     <Suspense fallback={<div>Loading...</div>}>
       <Outlet />
       </Suspense>
   </div>)
};
export default Layout;