import React from "react";
import "./main.css";
import { useState } from "react";



const Main = () => {
  const [currentactive, setCurrentActive] = useState("all");
  return (
    <main className="flex">
      <section className=" flex  project-menu active ">
        <button  onClick={() => { setCurrentActive === "all" }}  className={currentactive === "all" ? "active" : null}>All Projects</button>
        <button  onClick={() => { setCurrentActive === "css" }}  className={currentactive === "css" ? "active" : null}>Html Css </button>
        {/* <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node Express</button> */}
      </section>
      {/* ====================================================== */}
 

      <section className=" project-cards flex">
        {["aa","bb","cc",1,2,3,4,5].map((iteam)=>{
       return(
          <article key={iteam} className="border card">
          <img width={266} src="../../../public/proj_4.JPG" alt="" />
          <div className="box" style={{ width: "266px" }}>
          <h1 className="title">Landing Page 1</h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus
            </p>
            <div className="flex icons">
          <div style={{gap:"11px"}} className="flex">
          <div className="icon-link"></div>
            <div className="icon-github"></div>
            </div>
              <a className="flex link  ">
              More <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article> 
        )})}
        
      </section>
      </main>
        );
};
export default Main;
