import React from 'react';
import './contactUs.css';

const contact = () =>
{
    return (
 <section className='conact-us '>
        {/* ===========top============ */}
        <div className='top'> 

<h1 className='title'>
    <span className='icon-envelope'></span>
    ContactUs
    </h1>
    <p>Contact us for more information and Get notified when I publish somthing new .</p>
</div> 
{/* =============left============== */}
<div className='left flex border'> 
<form action="border">
<label htmlFor="email">Email Address:</label> 
<input type="email" name="" id="email" />
<label htmlFor="message">Message:</label> 
<textarea  name="" id="message" />
</form>
<div className="animation"></div> 

</div>
{/* ==============right========== */}
<div className='left'> 

</div>
 </section>

    );
}

export default contact ;