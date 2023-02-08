import ovq4 from '../img/ovq4.png'
import ovq5 from '../img/ovq5.png'
import ovq6 from '../img/ovq6.png'
import ovq7 from '../img/ovq7.png'
import Page31 from './Page3.1'

export let Page3 = () => {
    return (
        <>
            <div className="page3_big">
                <div className="page3_text">
                    <p className="page3_text_p">Food Category</p>
                    <p className="page3_text_p1"><span>Ch</span>oose Food Iteam</p>
                </div>
                <div className="page3_img">
                    <img src={ovq4} alt="" />
                    <img src={ovq5} alt="" />
                    <img src={ovq6} alt="" />
                    <img src={ovq7} alt="" />
                </div>
                <Page31 />
            </div>
        </>
    )
}