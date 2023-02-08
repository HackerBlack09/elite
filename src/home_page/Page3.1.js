import ovq8 from '../img/ovq8.png'
import ovq9 from '../img/ovq9.png'
import ovq10 from '../img/ovq10.png'
import ovq11 from '../img/ovq11.png'
import ovq12 from '../img/ovq12.png'
import ovq13 from '../img/ovq13.png'
import { GiHamburger } from 'react-icons/gi'
import { BiCookie } from 'react-icons/bi'
import { TbGlassFull } from 'react-icons/tb'

function Page3_1() {
    return (
        <>
            <div className="page3_1_big">
                <div className="page3_1_img">
                    <div className="page3_1_img1">
                        <img src={ovq8} alt="" className="ssd" />
                        <img src={ovq9} alt="" className="ssd1" />
                    </div>
                    <div className="page3_1_img2">
                        <div className="as">
                            <img src={ovq10} alt="" className="ssd2" />
                            <img src={ovq11} alt="" className="ssd3" />
                        </div>
                        <div className="page3_1_img3">
                            <img src={ovq12} alt="" className="ssd4" /><br />
                            <img src={ovq13} alt="" className="ssd4" />
                        </div>
                    </div>
                </div>
                <div className="page3_1_text">
                    <div className="page3_1_text1">
                        <p className="page3_1_text_p">Why Choose us</p>
                        <p className="page3_1_text_p1"><span>Ex</span> ta ordinary taste<br /> And Experienced </p>
                        <p className="page3_1_text_p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit<br /> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis<br /> sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in<br /> consequat.</p>
                    </div>
                    <div className="page3_1_btn">
                        <div className="btn1">
                            <button className="page3_1_btn11"><GiHamburger /></button>
                            <p className="page3_1_btn_p1">Fast Food</p>
                        </div>
                        <div className="btn2">
                            <button className="page3_1_btn1"><BiCookie /></button>
                            <p className="page3_1_btn_p">Lunch</p>
                        </div>
                        <div className="btn3">
                            <button className="page3_1_btn1"><TbGlassFull /></button>
                            <p className="page3_1_btn_p">Dinner</p>
                        </div>
                    </div>
                    <div className="page3_1_yers">
                        <div className="lh"></div>
                        <p className="page3_1_yers_p">30+</p>
                        <div className="page3_1_yers1">
                            <p className="page3_1_yers1_p1">Years of</p>
                            <p className="page3_1_yers1_p2">Experienced</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3_1;