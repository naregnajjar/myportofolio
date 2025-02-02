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
          <img width={266 } src="../../assets/proj_1.jpg" alt=""  />
          <div className="box"style={{width:"266px"}}>
            <h1 className="title">Landing Page 1</h1>
           <p className="sub-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus  </p>
            <div className="flex">
              <div className="icon-link">
               </div>

              <div className="icon-github">
              </div>
              <a href="">
                <span className="icon-arrow-right">

                </span>
              </a>
            </div>
          </div>
        </article>

        <article className="card">
          <img width={266 } src="" alt=""  />
          <div className="box"style={{width:"266px"}}>
            <h1 className="title">Landing Page 2</h1> <p className="sub-title"> </p>
            <div className="flex">
              <div className="icon-link">
                <span> </span>
              </div>
              <div className="icon-github">
              </div>
              <a href="">
                <span className="icon-arrow-right">

                </span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
          <img width={266 } src="" alt=""  />
          <div className="box"style={{width:"266px"}}>
            <h1 className="title">Landing Page 3</h1> <p className="sub-title"> </p>
            <div className="flex">
              <div className="icon-link">
                <span> </span>
              </div>
              <div className="icon-github">
              </div>
              <a href="">
                <span className="icon-arrow-right">

                </span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
          <img width={266 } src="" alt=""  />
          <div className="box"style={{width:"266px"}}>
            <h1 className="title">Landing Page 4</h1> <p className="sub-title"> </p>
            <div className="flex">
              <div className="icon-link">
                <span> </span>
              </div>
              <div className="icon-github">
              </div>
              <a href="">
                <span className="icon-arrow-right">

                </span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
          <img width={266 } src="" alt=""  />

          <div className="box"style={{width:"266px"}}>
            <h1 className="title">Landing Page 5</h1> <p className="sub-title"> </p>
            <div className="flex">
              <div className="icon-link">
                <span> </span>
              </div>
              <div className="icon-github">
              </div>
              <a href="">
                <span className="icon-arrow-right">

                </span>
              </a>
            </div>
          </div>
        </article>
        <article className="card">
          <img width={266 } src="" alt=""  />
          <div className="box"style={{width:"266px"}}>
            <h1 className="title">Landing Page 6</h1> <p className="sub-title"> </p>
            <div className="flex">
              <div className="icon-link">
                <span> </span>
              </div>
              <div className="icon-github">
              </div>
              <a href="">
                <span className="icon-arrow-right">

                </span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
export default Main;
