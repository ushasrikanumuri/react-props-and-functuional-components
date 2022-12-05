import{Link} from 'react-router-dom'
function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">About</Link>
        </div>
    )
}
export default Navbar