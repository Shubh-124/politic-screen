import React from 'react'
import sign from "../../images/sign.jpeg"
import rahul from "../../images/rahul.jpeg"
import tricolor from "../../images/tricolor3.png"
// import congress from "../../images/congress.jpeg"
import "./Intro.css"

const Intro = () => {
    return (
        <div>
            <div className='comp'>
                <div className='comp1'>
                    <h2><span className='title'>Leadership</span> is the capacity to translate vision into reality</h2>
                    <img className='sign' src={sign} alt="sign" width="200px" />
                </div>
                <div className='comp2'>
                    <img className='img' src={rahul} alt="rahul" width="500px" />
                </div>
            </div>
            <div className='tricolor'>
                <img className='border' src={tricolor} alt="tricolor" width="1450px" />
            </div>
        </div>
    )
}

export default Intro