import { BsCheckLg } from 'react-icons/bs'
import ovq1 from '../img/ovq1.png'
import ovq2 from '../img/ovq2.png'
import ovq3 from '../img/ovq3.png'

export function Page2() {
    return (
        <>
            <div className="page2_big">
                <div className="page2_text">
                    <p className="page2_text_p">About us</p>
                    <p className="page2_text_p1"><span>We</span> Create the best foody product</p>
                    <p className="page2_text_p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <p className="page2_text_p3"><BsCheckLg /> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <p className="page2_text_p3"><BsCheckLg /> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
                    <p className="page2_text_p3"><BsCheckLg /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className='page2_btn'>Read More</button>
                </div>
                <div className="page2_img">
                    <div className="page2_img1">
                        <img src={ovq1} alt="" />
                    </div>
                    <div className="page2_img2">
                        <img src={ovq2} alt="" />
                        <img src={ovq3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}