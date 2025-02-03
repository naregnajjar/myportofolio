import React from "react";
import "./main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className=" flex menu active ">
        <button>All Projects</button>
        <button>Html Css </button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node Express</button>
      </section>
      {/* ====================================================== */}

      <section className="project-cards ">
        <article className="card">
          <img width={266} src="../../../public/proj_1.JPG" alt="" />
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
              <a href="">
               More <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>

        <article className="card">
          <img width={266} src="../../../public/proj_2.JPG" alt="" />
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
              <a href="">
               More <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
          <img width={266} src="../../../public/proj_3.JPG" alt="" />
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
              <a href="">
               More <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
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
              <a href="">
               More <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
          <img width={266} src="../../../public/proj_5.JPG" alt="" />

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
              <a href="">
               More <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
          <img width={266} src="../../../public/proj_6.JPG" alt="" />
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
              <a href="">
               More <span className="icon-arrow-right"></span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
export default Main;
