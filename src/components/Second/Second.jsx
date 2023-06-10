import React from 'react'
import "./Second.css"
import kids from "../../images/kids.jpg"
import flag from "../../images/flag.png"

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

const Second = () => {
    return (
        <div className='flex-p'>
            <div className='flex-c1'>
                <img className='kid' src={kids} alt="kids" width="400vw" />
            </div>
            <div className='flex-c2'>
                <h2 className='about'>About Rahul</h2>
                <img className='flag' src={flag} alt="flag" width="60px" />
                <p>Rahul Gandhi is an indian politician who is currently serving as Member of Parliament, Lok Sabha, Amethi, Uttar Pradesh.He also currently serves as Member of Parliamentary Standing Committee of External Affairs<span id="dots">...</span>
                    <span id="more">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere ducimus quisquam, vero totam nihil illo adipisci esse suscipit accusantium natus voluptates perferendis quasi minus impedit, sed repudiandae pariatur dolor.</p></span>
                </p>
                <button onClick={readMore} id="myBtn">Read More...</button>
            </div>

        </div>
    )
}

export default Second