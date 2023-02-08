import { MdKeyboardArrowDown } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
import handbag from '../img/Handbag.png'
import taom from '../img/Image.png'

function Home_page() {
    return (
        <>
            <div className="container_big">
                <div className="nav">
                    <div className="logo">
                        <p className="logo_text"><span>Food</span>tuck</p>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Blog</li>
                            <li>Pages</li>
                            <li>About <MdKeyboardArrowDown /></li>
                            <li>Shop</li>
                            <li>Contact</li>
                        </ul>
                        <div className="sea">
                            <input type="search" placeholder="search..." />
                            <p className="sea_p">< CiSearch /></p>
                            <img src={handbag} alt="" />
                        </div>
                    </div>
                    <p className='bars'><GoThreeBars /></p>
                </div>
                <div className="home">
                    <div className="home_text">
                        <div className="home_icon">
                            <div className="line"></div>
                            <p><FaFacebookF /></p>
                            <p className='tw'><AiOutlineTwitter /></p>
                            <p><FaPinterestP /></p>
                            <div className="line1"></div>
                        </div>
                        <div className="home_tebut">
                            <p className="tebut_p">Its Quick & Amusing!</p>
                            <p className="tebut_p1"><span>Th</span>e Art of speed<br /> food Quality</p>
                            <p className="tebut_p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                            <button className="tebut_btn">See Menu</button>
                        </div>
                    </div>
                    <div className="home_img">
                        <img src={taom} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_page;