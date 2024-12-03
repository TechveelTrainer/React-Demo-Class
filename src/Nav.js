import { Link, Outlet } from "react-router-dom"

const Nav = () => {
    return (
        <>
        <nav>
            <ul>
                <Link to='calculator'><li>Calculator</li></Link>
                
                <Link to='country'><li>Country</li></Link>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Nav