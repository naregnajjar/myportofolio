import React from "react";
import "./contactUs.css";

const contact = () => {
  return (
    <section className="contact-us  ">
      {/* ===========top============ */}
      <div className="top">
        <h1 className="title">
          <span className="icon-envelope"></span>
          ContactUs
        </h1>
        <p className="sub-title">
          Contact us for more information and Get notified when I publish
          somthing new .
        </p>
      </div>

        <form  className="">
<div className="flex">
<label htmlFor="email">Email Address:</label>
<input required type="email" name="" id="email" />
</div>
        
<div className="flex" style={{marginTop:"24px"}}> 
<label htmlFor="message">Your Message:</label>
<textarea required  name="message" id="message" />
</div>

        <button type="submit" className="submit">Submit</button>
<div className="border animation">
    animation   
</div>
        
        </form>

    </section>
  );
};

export default contact;
