import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Layout ({children}) {
    return (

        <>
            <NavBar/>
            <Outlet/>
            {/* <footer>
                this is footer
            </footer> */}
        </>
    )
}

export default Layout;