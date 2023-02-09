import cok from '../img/cok.png'
import burg from '../img/burg.png'
import vel from '../img/vel.png'
import pit from '../img/pit.png'

function Page4() {
    return (
        <>
            <div className="page4_big">
                <div className="page4_big_bag">
                    <div className="page4_big_cok">
                        <img src={cok} alt="" className="page4_big_img1"/>
                        <div className="page4_big_text">
                        <p className="page4_big_cok_p">Professional Chefs</p>
                        <p className="page4_big_cok_p1">420</p>
                        </div>
                    </div>
                    <div className="page4_big_burg">
                        <img src={burg} alt="" className="page4_big_img"/>
                        <div className="page4_big_text">
                        <p className="page4_big_cok_p">Items Of Food</p>
                        <p className="page4_big_cok_p1">320</p>
                        </div>
                    </div>
                    <div className="page4_big_vel">
                        <img src={vel} alt="" className="page4_big_img2"/>
                        <div className="page4_big_text">
                        <p className="page4_big_cok_p">Years Of Experienced</p>
                        <p className="page4_big_cok_p1">30+</p>
                        </div>
                    </div>
                    <div className="page4_big_pit">
                        <img src={pit} alt="" className="page4_big_img3"/>
                        <div className="page4_big_text">
                        <p className="page4_big_cok_p">Happy Customers</p>
                        <p className="page4_big_cok_p1">220</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page4;