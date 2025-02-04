import React from 'react';
import './Hero.css';

const Hero = () => 
{
    return (  
<section  className='hero flex'>
<div className="left-section">
    <div className="parent-avatar">
<img src="../../../public/my-modified.png" className='avatar' alt="logo" />
        <span className='icon-verified'></span> 
        <h1 className="title">
Software designer, founder, and amateur astronaut.
</h1>
<p className="sub-title">
I’m Nareg Najjar 
a software designer and entrepreneur based in The Middle East.
Self Tought Developer 
</p>
    </div>

<div className="all-icons flex">
<div className="icon icon-twitter"></div>
<div className="icon icon-instagram"></div>
<div className="icon icon-github-square"></div>
<div className="icon icon-linkedin-square"></div>
</div>
</div>




<div className="right-section border animation ">animation</div>

</section>
    );
}
export default Hero;




