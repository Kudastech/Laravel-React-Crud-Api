import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout =  (ev) =>{
        ev.preventDefault();
        axiosClient.get('/logout')
        .then(({}) => {
           setUser(null)
           setToken(null)
        })
    }
    return (
        <div id="defaultLayout">
        <div className="content">
           <header>
               <div>
                   Kudastech
               </div>
               <div>
                   {user.name}
                   <a href="#" onClick={onLogout} className="btn-logout"> Logout</a>
               </div>
           </header>
           <main>
           <Outlet />
           </main>
           </div>
       </div>
    );
}
