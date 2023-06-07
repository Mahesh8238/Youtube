import youtube from '../images/youtube.png'
// import searchicon from '../images/searchicon.png'
import '../styles/Navbar.css'
import notification from '../images/notification.png'
import video from '../images/video.png'

function Navbar()
{
    return(
        <div className="navbar">
            <div className="logo">
                <img  height={30} width={70} src={youtube}  alt=""/>
            </div>
            <div className="searchbar">
                <input type="text" placeholder='search'></input>
    
            </div>

            <div className="useroptions">
                <img width={35} src={notification} alt=""/>
                <img  width={35} src={video} alt=""/>
                <h4>R</h4>
            </div>
                </div>
    );
}
export default Navbar;